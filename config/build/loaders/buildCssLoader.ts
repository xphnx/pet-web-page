import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export const buildCssLoader = (isDev: boolean): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
});
