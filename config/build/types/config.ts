export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
  isAnalyze: boolean;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
  analyze: boolean;
}
