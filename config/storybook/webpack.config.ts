import path from 'path';
import { Configuration } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }): Configuration => {
  const srcPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push(srcPath);
  config.resolve.alias = {
    '@': srcPath,
  };

  config.module.rules.push(buildCssLoader(true));

  return config;
};
