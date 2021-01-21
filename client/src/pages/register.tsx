// import React from 'react';
// import { useRouter } from 'next/router';
// import { withUrqlClient } from 'next-urql';
// import { Formik, Form } from 'formik';
// import InputField from 'components/InputField';
// import { useRegisterMutation } from 'generated/graphql';
// import { toErrorMap } from 'utils/toErrorMap';
// import { createUrqlClient } from 'utils/createUrqlClient';

// const RegisterPage: React.FC = () => {
//   const router = useRouter();
//   const [, register] = useRegisterMutation();
//   return (
//     <Formik
//       initialValues={{ username: '', password: '', email: '' }}
//       onSubmit={async (values, { setErrors }) => {
//         const response = await register(values);
//         if (response.data?.register.errors) {
//           setErrors(toErrorMap(response.data.register.errors));
//         } else {
//           router.push('/login');
//         }
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <InputField name="username" placeholder="Username" label="Username" />
//           <InputField name="email" placeholder="Email" label="Email" />
//           <InputField name="password" placeholder="Password" label="Password" type="password" />
//           <button disabled={isSubmitting} type="submit">
//             Register
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default withUrqlClient(createUrqlClient)(RegisterPage);
import TestComponent from 'components/TestComonent';

export default TestComponent;
