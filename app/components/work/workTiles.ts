export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here's a project
`,
    title: `we've built.`,
    image: {
      src: '/static/images/mesa-scout.png',
      width: 900,
      height: 900,
    },
  },
];
