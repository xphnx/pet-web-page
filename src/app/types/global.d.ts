declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

  declare module "*.png";
  declare module "*.jpg";
  declare module "*.jpeg";
  declare module "*.gif";
  declare module "*.woff";
  declare module "*.woff2";
  declare module "*.svg" {
    import * as React from "react";
  
    const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string }
    >;
  
    export default ReactComponent;
  }