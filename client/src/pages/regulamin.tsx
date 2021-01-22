import React from 'react';
import Container from 'components/Container';
import PageHeader from 'components/PageHeader';
import { decorateWithHost, generatePath } from 'helpers/generatePath';
import { createOpenGraph } from 'helpers/openGraph';
import { NextSeo } from 'next-seo';

const Regulations: React.FC = () => {
  const selfHref = decorateWithHost(generatePath({ type: 'regulations' }));

  return (
    <>
      <NextSeo
        title="Regulamin"
        canonical={selfHref}
        openGraph={createOpenGraph({ title: 'Regulamin', url: selfHref })}
      />
      <Container component="main" className="py-12">
        <PageHeader component="h1" text="Regulamin powiatowej ligi siatkówki" />
        <p className="text-center text-lg">Strona w budowie</p>
      </Container>
    </>
  );
};

export default Regulations;
