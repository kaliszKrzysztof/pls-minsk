import { decorateWithHost, generatePath } from './generatePath';

describe('generatePath helper', () => {
  describe('decorateWithHost function', () => {
    it('should add host to path', () => {
      const path = '/testPath';
      expect(decorateWithHost(path)).toEqual(`${process.env.NEXT_PUBLIC_HOST}${path}`);
    });
  });

  describe('generatePath function', () => {
    it('should generate correct path', () => {
      expect(generatePath({ type: 'team' })).toEqual('/druzyny');
      expect(generatePath({ type: 'team', slug: 'test' })).toEqual('/druzyna/test');
      expect(generatePath({ type: 'match' })).toEqual('/mecze');
      expect(generatePath({ type: 'table' })).toEqual('/tabela');
      expect(generatePath({ type: 'regulations' })).toEqual('/regulamin');
      expect(generatePath({ type: 'news' })).toEqual('/');
      expect(generatePath({ type: 'home' })).toEqual('/');
    });
  });
});
