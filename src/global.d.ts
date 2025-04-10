export { };

declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

declare namespace Intl {
  class Segmenter {
    constructor(locale: string, options?: { granularity: "grapheme" | "word" | "sentence" });
    segment(input: string): Iterable<{ segment: string; index: number; input: string; isWordLike?: boolean }>;
  }
}
