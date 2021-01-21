// import React from 'react';
// import { useRouter } from 'next/router';
// import { withUrqlClient } from 'next-urql';
// import { Formik, Form } from 'formik';
// import InputField from 'components/InputField';
// import { useUpdatePostMutation } from 'generated/graphql';
// import { createUrqlClient } from 'utils/createUrqlClient';
// import { useIsAuthenticated } from 'hooks/useIsAuthenticated';
// import { useGetPostFromUrl } from 'utils/useGetPostFromUrl';

// const EditPost: React.FC = () => {
//   const router = useRouter();
//   const [{ data, fetching }] = useGetPostFromUrl();
//   const [, updatePost] = useUpdatePostMutation();

//   useIsAuthenticated();

//   if (fetching) {
//     return <p>Loading...</p>;
//   }
//   if (!data?.post) {
//     return <p>Could not find the post</p>;
//   }

//   const { id } = data.post;

//   return (
//     <Formik
//       initialValues={{ title: data.post.title, text: data.post.text }}
//       onSubmit={async (values) => {
//         const { error: updateError } = await updatePost({ id, ...values });
//         if (!updateError) {
//           router.push('/');
//         }
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <InputField name="title" placeholder="Title" label="Title" />
//           <InputField name="text" placeholder="Text" label="Text" />
//           <button disabled={isSubmitting} type="submit">
//             Create Post
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default withUrqlClient(createUrqlClient)(EditPost);

import TestComponent from 'components/TestComonent';

export default TestComponent;
