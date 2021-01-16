import React from 'react';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { Formik, Form } from 'formik';
import InputField from 'components/InputField';
import { useCreatePostMutation } from 'generated/graphql';
import { createUrqlClient } from 'utils/createUrqlClient';
import { useIsAuthenticated } from 'hooks/useIsAuthenticated';

const CreatePost: React.FC = () => {
  const router = useRouter();
  const [, createPost] = useCreatePostMutation();

  useIsAuthenticated();

  return (
    <Formik
      initialValues={{ title: '', text: '' }}
      onSubmit={async (values) => {
        const { error } = await createPost({ data: values });
        if (!error) {
          router.push('/');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField name="title" placeholder="Title" label="Title" />
          <InputField name="text" placeholder="Text" label="Text" />
          <button disabled={isSubmitting} type="submit">
            Create Post
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
