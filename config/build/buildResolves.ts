import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

export default function buildResolves(options: BuildOptions): ResolveOptions {
    return { 
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            "@": options.paths.src,
        }
    }
}