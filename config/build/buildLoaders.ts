import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
    const svgLoader = {
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          "sass-loader",
        ],
      }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
      test: /\.(png|jpe?g|gif|woff|woff2)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    };

    return [ fileLoader, svgLoader, tsLoader, cssLoader ];
}