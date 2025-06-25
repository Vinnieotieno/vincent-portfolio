import { JSX as JSXNamespace } from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      ambientLight: any;
      pointLight: any;
      mesh: any;
      sphereGeometry: any;
      meshDistortMaterial: any;
    }
  }
}
export {}; 