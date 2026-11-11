import * as React from 'react';
import * as THREE from 'three';

declare module '@react-three/fiber' {
  export type RenderProps<TCanvas = any> = {
    gl?: any;
    size?: any;
    shadows?: any;
    legacy?: boolean;
    linear?: boolean;
    flat?: boolean;
    orthographic?: boolean;
    frameloop?: 'always' | 'demand' | 'never';
    performance?: any;
    dpr?: any;
    raycaster?: any;
    scene?: THREE.Scene;
    camera?: any;
    events?: any;
    onCreated?: (state: any) => void;
    onPointerMissed?: (event: MouseEvent) => void;
  };

  export interface CanvasProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, RenderProps {
    children?: React.ReactNode;
    fallback?: React.ReactNode;
  }

  export const Canvas: React.ForwardRefExoticComponent<CanvasProps & React.RefAttributes<HTMLCanvasElement>>;
  
  export function extend(objects: any): void;
  
  export function useFrame(callback: (state: any, delta: number, xrFrame?: any) => void, renderPriority?: number): null;
  
  export function useThree<T = any>(selector?: (state: any) => T): T;
}

// Support JSX elements for React Three Fiber (ThreeJS intrinsic elements)
declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        mesh: any;
        planeGeometry: any;
        ambientLight: any;
        pointLight: any;
        directionalLight: any;
      }
    }
  }
}
