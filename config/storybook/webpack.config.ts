import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }): Configuration => {
  const srcPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push(srcPath);
  config.resolve.alias = {
    '@': srcPath,
  };

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildCssLoader(true));

  return config;
};
