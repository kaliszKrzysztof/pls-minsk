type GeneratePathParams =
  | {
      type: 'team';
      slug?: string;
    }
  | {
      type: 'table';
    }
  | {
      type: 'match';
    }
  | {
      type: 'news';
    }
  | {
      type: 'regulations';
    }
  | {
      type: 'home';
    };

export const generatePath = (params: GeneratePathParams): string => {
  switch (params.type) {
    case 'team': {
      if (params.slug) {
        return `/druzyna/${params.slug}`;
      }
      return '/druzyny';
    }
    case 'match': {
      return '/mecze';
    }
    case 'table': {
      return '/tabela';
    }
    case 'regulations': {
      return '/regulamin';
    }
    case 'news':
    case 'home':
    default: {
      return '/';
    }
  }
};
