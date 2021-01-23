import React from 'react';
import TestComponent from 'components/graphqlComponents/TestComonent';
import NavBar from 'components/NavBar';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from 'utils/createUrqlClient';
import { usePostsQuery } from 'generated/graphql';

const Home = () => {
  const [variables, setVariables] = React.useState<{ limit: number; cursor: string | null }>({
    limit: 5,
    cursor: null,
  });
  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const posts = data?.posts.posts;
  const hasMore = data?.posts.hasMore;
  return (
    <>
      <NavBar />
      <TestComponent />
      {posts &&
        posts.map((p) => (
          <div key={p.id}>
            <p>{p.title}</p>
            <p>{p.textSnippet}</p>
          </div>
        ))}

      {posts && hasMore && (
        <button
          type="button"
          disabled={fetching}
          onClick={() => {
            setVariables({ limit: variables.limit, cursor: posts[posts.length - 1].createdAt });
          }}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Home);
