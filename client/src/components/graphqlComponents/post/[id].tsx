// import React from 'react';
// import { withUrqlClient } from 'next-urql';
// import { createUrqlClient } from 'utils/createUrqlClient';
// import { useGetPostFromUrl } from 'utils/useGetPostFromUrl';

// const Post: React.FC = () => {
//   const [{ data, error, fetching }] = useGetPostFromUrl();
//   console.log({ data, error, fetching });
//   return <div>{fetching}</div>;
// };

// export default withUrqlClient(createUrqlClient, { ssr: true })(Post);

import TestComponent from 'components/graphqlComponents/TestComonent';

export default TestComponent;
