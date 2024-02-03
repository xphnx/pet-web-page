import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import { BuildOptions } from './types/config';

export default function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }), 
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}