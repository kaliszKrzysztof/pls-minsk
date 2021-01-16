import { dedupExchange, fetchExchange, stringifyVariables } from 'urql';
import { cacheExchange, Resolver, Cache } from '@urql/exchange-graphcache';
import { LoginMutation, MeQuery, MeDocument } from 'generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';
import { isServer } from './isServer';

const cursorPagination = (): Resolver => (_parent, fieldArgs, cache, info) => {
  const { parentKey: entityKey, fieldName } = info;
  const allFields = cache.inspectFields(entityKey);
  const fieldInfos = allFields.filter((inf) => inf.fieldName === fieldName);
  const size = fieldInfos.length;
  if (size === 0) {
    return undefined;
  }

  const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
  const isItInTheCache = cache.resolve(cache.resolveFieldByKey(entityKey, fieldKey) as string, 'posts');
  // eslint-disable-next-line no-param-reassign
  info.partial = !isItInTheCache;
  let hasMore = true;
  const results: string[] = [];
  fieldInfos.forEach((fi) => {
    const key = cache.resolveFieldByKey(entityKey, fi.fieldKey) as string;
    const data = cache.resolve(key, 'posts') as string[];
    const _hasMore = cache.resolve(key, 'hasMore');
    if (!_hasMore) {
      hasMore = _hasMore as boolean;
    }
    results.push(...data);
  });

  return {
    __typename: 'PaginatedPosts',
    hasMore,
    posts: results,
  };
};

function invalidateAllPosts(cache: Cache) {
  const allFields = cache.inspectFields('Query');
  const fieldInfos = allFields.filter((info) => info.fieldName === 'posts');
  fieldInfos.forEach((fi) => {
    cache.invalidate('Query', 'posts', fi.arguments || {});
  });
}
export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = null;
  if (isServer()) {
    cookie = ctx.req.headers.cookie;
  }
  return {
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
      credentials: 'include' as const,
      headers: cookie ? { cookie } : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: {
          PaginatedPosts: () => null,
        },
        resolvers: {
          Query: {
            posts: cursorPagination(),
          },
        },
        updates: {
          Mutation: {
            createPost: (_result, _, cache) => {
              invalidateAllPosts(cache);
            },
            logout: (_result, _, cache) => {
              betterUpdateQuery<LoginMutation, MeQuery>(cache, { query: MeDocument }, _result, () => ({ me: null }));
            },
            login: (_result, _, cache) => {
              betterUpdateQuery<LoginMutation, MeQuery>(cache, { query: MeDocument }, _result, (result, query) => {
                if (result.login.errors) {
                  return query;
                }
                return {
                  me: result.login.user,
                };
              });
            },
          },
        },
      }),
      ssrExchange,
      fetchExchange,
    ],
  };
};
