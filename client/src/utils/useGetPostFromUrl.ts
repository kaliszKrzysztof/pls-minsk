import { useRouter } from 'next/router';
import { usePostQuery } from 'generated/graphql';

export const useGetPostFromUrl = (): ReturnType<typeof usePostQuery> => {
  const router = useRouter();
  const intId = typeof router.query.id === 'string' ? parseInt(router.query.id, 10) : -1;
  return usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
};
