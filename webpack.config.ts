import path from 'path';
import { Configuration } from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  };

  const port = env.port || 3000;
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const config: Configuration = buildWebpackConfig({
    mode,
    port,
    paths,
    isDev,
  });

  return config;
};
