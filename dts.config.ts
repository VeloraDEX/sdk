import replace from '@rollup/plugin-replace';
import { config as loadEnv } from 'dotenv';
import type { DtsConfig } from 'dts-cli/dist/types';

loadEnv();

const code = process.env.BASE_BUILDER_CODE || '';
if (code && (code.length > 255 || !/^[\x21-\x2b\x2d-\x7e]+$/.test(code))) {
  throw new Error(
    'BASE_BUILDER_CODE must be 1-255 printable ASCII bytes without commas'
  );
}
const suffix = code
  ? `0x${Buffer.from(code, 'ascii').toString('hex')}${code.length
      .toString(16)
      .padStart(2, '0')}0080218021802180218021802180218021`
  : '';

const config: DtsConfig = {
  rollup(config) {
    return {
      ...config,
      plugins: [
        replace({
          'process.env.BASE_BUILDER_CODE_SUFFIX': JSON.stringify(suffix),
          preventAssignment: true,
        }),
        ...(Array.isArray(config.plugins) ? config.plugins : []),
      ],
    };
  },
};

export default config;
