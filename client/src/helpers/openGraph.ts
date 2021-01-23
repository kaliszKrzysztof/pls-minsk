// eslint-disable-next-line import/no-unresolved
import { OpenGraph } from 'next-seo/lib/types';
import SEO, { DEFAULT_DESCRIPTION } from '../next-seo.config';

interface OpenGraphParams {
  title: string;
  description?: string;
  url: string;
}

export const decorateTitle = (title: string): string => `${title} - PLS Mińsk Maz`;

export const createOpenGraph = ({ title, url, description = DEFAULT_DESCRIPTION }: OpenGraphParams): OpenGraph => ({
  ...SEO.openGraph,
  url,
  title: decorateTitle(title),
  description,
});
