import { replaceModule } from '../src/_utils';

describe('api.basic', () => {
  test('utils: replaceModule', () => {
    const path1 = './src/shared/stores/modules/sub/test-sbc.ts';
    const path2 = './src/stores/modules/sub/test-sbc.ts';
    const path3 = './modules/sub/test.ts';
    const path4 = './sub/auth.ts';

    expect(replaceModule(path1)).toBe('sub.testSbc');
    expect(replaceModule(path2)).toBe('sub.testSbc');
    expect(replaceModule(path3)).toBe('sub.test');
    expect(replaceModule(path4)).toBe('sub.auth');
  });
});
