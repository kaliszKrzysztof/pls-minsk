import React from 'react';
import { useMeQuery } from 'generated/graphql';
import { useRouter } from 'next/router';

export const useIsAuthenticated = (): void => {
  const [{ data, fetching }] = useMeQuery();
  const router = useRouter();
  React.useEffect(() => {
    if (!fetching && !data?.me) {
      router.replace(`/login?next=${router.pathname}`);
    }
  }, [data, fetching]);
};
