import { isProd } from './common';

describe('isProd', () => {
  it(`인자가 'production'이면 반환 값은 'true'이다.`, () => {
    const env = 'production';

    const result = isProd(env);

    expect(result).toBe(true);
  });

  it(`인자가 'production'이 아니면 반환 값은 'false'이다.`, () => {
    const env = 'development';

    const result = isProd(env);

    expect(result).toBe(false);
  });
});
