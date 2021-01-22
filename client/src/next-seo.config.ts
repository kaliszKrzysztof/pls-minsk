export const DEFAULT_DESCRIPTION = 'PLS Mińsk Mazowiecki - Strona Powiatowej Ligi Siatkówki w Mińsku Mazowieckim';

export default {
  titleTemplate: '%s - PLS Mińsk Maz',
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    site_name: 'PLS',
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/pls_img.jpg',
        width: 400,
        height: 400,
        alt: 'PLS Mińsk Maz',
      },
    ],
  },
};
