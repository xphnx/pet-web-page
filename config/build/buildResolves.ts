import { ResolveOptions } from 'webpack';

export default function buildResolves(): ResolveOptions {
    return { extensions: ['.tsx', '.ts', '.js'] }
}