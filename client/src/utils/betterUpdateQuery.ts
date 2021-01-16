import { QueryInput, Cache } from '@urql/exchange-graphcache';

function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query,
): void {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

export { betterUpdateQuery };
