import { DEFAULT_DESCRIPTION } from '../next-seo.config';
import { createOpenGraph, decorateTitle } from './openGraph';

const seoTitle = 'Test';
const seoUrl = 'http://www.test.pl';
const seoDescription = 'Test';

describe('openGraph helper', () => {
  describe('decorateTitle function', () => {
    expect(decorateTitle(seoTitle)).toEqual(`${seoTitle} - PLS Mińsk Maz`);
  });

  describe('createOpenGraph function', () => {
    it('should use default description if not provided', () => {
      const og = createOpenGraph({ title: seoTitle, url: seoUrl });
      expect(og.title).toEqual(decorateTitle(seoTitle));
      expect(og.url).toEqual(seoUrl);
      expect(og.description).toEqual(DEFAULT_DESCRIPTION);
    });

    it('should use description', () => {
      const og = createOpenGraph({ title: seoTitle, url: seoUrl, description: seoDescription });
      expect(og.title).toEqual(decorateTitle(seoTitle));
      expect(og.url).toEqual(seoUrl);
      expect(og.description).toEqual(seoDescription);
    });
  });
});
