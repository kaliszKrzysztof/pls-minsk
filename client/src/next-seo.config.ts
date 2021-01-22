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
        url: 'https://pls-minsk.vercel.app/pls_img.jpg',
        width: 1271,
        height: 941,
        alt: 'PLS Mińsk Maz',
      },
    ],
  },
};
