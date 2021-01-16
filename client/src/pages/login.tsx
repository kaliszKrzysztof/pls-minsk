import React from 'react';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { Formik, Form } from 'formik';
import InputField from 'components/InputField';
import { useLoginMutation } from 'generated/graphql';
import { toErrorMap } from 'utils/toErrorMap';
import { createUrqlClient } from 'utils/createUrqlClient';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Formik
      initialValues={{ usernameOrEmail: '', password: '' }}
      onSubmit={async (values, { setErrors }) => {
        const response = await login(values);
        if (response.data?.login.errors) {
          setErrors(toErrorMap(response.data.login.errors));
        } else if (typeof router.query.next === 'string') {
          router.push(router.query.next);
        } else {
          router.push('/');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField name="usernameOrEmail" placeholder="Username or email" label="Username or email" />
          <InputField name="password" placeholder="Password" label="Password" type="password" />
          <button disabled={isSubmitting} type="submit">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default withUrqlClient(createUrqlClient)(LoginPage);
