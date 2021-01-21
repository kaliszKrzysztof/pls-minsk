// import React from 'react';
// import { useRouter } from 'next/router';
// import { withUrqlClient } from 'next-urql';
// import { Formik, Form } from 'formik';
// import InputField from 'components/InputField';
// import { useChangePasswordMutation } from 'generated/graphql';
// import { toErrorMap } from 'utils/toErrorMap';
// import { createUrqlClient } from 'utils/createUrqlClient';

// const ChangePassword: React.FC = () => {
//   const [, changePassword] = useChangePasswordMutation();
//   const router = useRouter();

//   return (
//     <div>
//       <Formik
//         initialValues={{ newPassword: '' }}
//         onSubmit={async (values, { setErrors }) => {
//           const response = await changePassword({
//             token: router.query.token as string,
//             newPassword: values.newPassword,
//           });
//           if (response.data?.changePassword.errors) {
//             setErrors(toErrorMap(response.data.changePassword.errors));
//           } else {
//             router.push('/');
//           }
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <InputField name="newPassword" placeholder="New password" label="New password" type="password" />
//             <button disabled={isSubmitting} type="submit">
//               Change password
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default withUrqlClient(createUrqlClient)(ChangePassword);

import TestComponent from 'components/TestComonent';

export default TestComponent;
