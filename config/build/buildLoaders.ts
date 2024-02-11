import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export default function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  const cssLoader = buildCssLoader(isDev);

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js, jsx, tsx, ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader];
}
