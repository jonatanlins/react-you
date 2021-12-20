import type { ShapeName } from "@/types";

interface ShapeDef {
  name: ShapeName;
  path: string;
}

export const shapes: ShapeDef[] = [
  {
    name: "rectangle",
    path: `
      M0.1,0
      h0.8 a0.1,0.1 0 0 1 0.1,0.1
      v0.8 a0.1,0.1 0 0 1 -0.1,0.1
      h-0.8 a0.1,0.1 0 0 1 -0.1,-0.1
      v-0.8 a0.1,0.1 0 0 1 0.1,-0.1
    `,
  },
  {
    name: "cylinder-h",
    path: `
      M0.1,0.4
      a0.4,0.4 0 1 1 0.8,0 v0.2
      a0.4,0.4 0 1 1 -0.8,0 v-0.2
    `,
  },
  {
    name: "cylinder-v",
    path: `
      M0.4,0.1
      h0.2 a0.4,0.4 0 1 1 0,0.8
      h-0.2 a0.4,0.4 0 1 1 0,-0.8
    `,
  },
  {
    name: "cylinder-d",
    path: `
      M0,0.4 a0.4,0.4 0 0 1 0.8,0 a0.4,0.4 0 0 1 -0.8,0
      M0.2,0.6 a0.4,0.4 0 0 1 0.8,0 a0.4,0.4 0 0 1 -0.8,0
      M0.665,0.1 l0.2,0.2 l-0.565,0.565 l-0.2,-0.2
    `,
  },
  {
    name: "cylinder-a",
    path: `
      M0.2,0.4 a0.4,0.4 0 0 1 0.8,0 a0.4,0.4 0 0 1 -0.8,0
      M0,0.6 a0.4,0.4 0 0 1 0.8,0 a0.4,0.4 0 0 1 -0.8,0
      M0.3,0.135 l0.565,0.565 l-0.2,0.2 l-0.565,-0.565
    `,
  },
  {
    name: "blob",
    path: `
      M0,0.25 a0.25,0.25 0 0 1 0.5,0 a0.25,0.25 0 0 1 -0.5,0
      M0,0.75 a0.25,0.25 0 0 1 0.5,0 a0.25,0.25 0 0 1 -0.5,0
      M0.5,0.25 a0.25,0.25 0 0 1 0.5,0 a0.25,0.25 0 0 1 -0.5,0
      M0.5,0.75 a0.25,0.25 0 0 1 0.5,0 a0.25,0.25 0 0 1 -0.5,0
      M0.4,0.05
      a0.25,0.25 0 0 0 0.2,0 l0.35,0.35
      a0.25,0.25 0 0 0 0,0.2 l-0.35,0.35
      a0.25,0.25 0 0 0 -0.2,0 l-0.35,-0.35
      a0.25,0.25 0 0 0 0,-0.2 l0.35,-0.35
    `,
  },
  {
    name: "flower",
    path: `
      M0,0.3 a0.3,0.3 0 0 1 0.6,0 a0.3,0.3 0 0 1 -0.6,0
      M0,0.7 a0.3,0.3 0 0 1 0.6,0 a0.3,0.3 0 0 1 -0.6,0
      M0.4,0.3 a0.3,0.3 0 0 1 0.6,0 a0.3,0.3 0 0 1 -0.6,0
      M0.4,0.7 a0.3,0.3 0 0 1 0.6,0 a0.3,0.3 0 0 1 -0.6,0
    `,
  },
  {
    name: "rhombus",
    path: `
      M0,0.5 a0.1,0.1 0 0 1 0.2,0 a0.1,0.1 0 0 1 -0.2,0
      M0.8,0.5 a0.1,0.1 0 0 1 0.2,0 a0.1,0.1 0 0 1 -0.2,0
      M0.4,0.1 a0.1,0.1 0 0 1 0.2,0 a0.1,0.1 0 0 1 -0.2,0
      M0.4,0.9 a0.1,0.1 0 0 1 0.2,0 a0.1,0.1 0 0 1 -0.2,0
      M0.58,0.04 l0.38,0.38 l0,0.16 l-0.38,0.38 l-0.16,0 l-0.38,-0.38 l0,-0.16 l0.38,-0.38
    `,
  },
  {
    name: "arrow",
    path: `
      M0.25,0.25 a0.25,0.25 0 0 1 0.5,0 a0.25,0.25 0 0 1 -0.5,0
      M0,0.75 a0.25,0.25 0 0 1 0.5,0 a0.25,0.25 0 0 1 -0.5,0
      M0.5,0.75 a0.25,0.25 0 0 1 0.5,0 a0.25,0.25 0 0 1 -0.5,0
      M0.35,0.98 l-0.32,-0.35 l0.25,-0.5 h0.44 l0.25,0.5 l-0.32,0.35
      a0.25,0.25 0 0 0 -0.3,0
    `,
  },
  {
    name: "circle",
    path: `
      M0,0.5 a0.5,0.5 0 0 1 1,0 a0.5,0.5 0 0 1 -1,0
    `,
  },
];