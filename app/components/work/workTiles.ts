export type WorkTile = {
  title: string;
  description: string;
  link: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Built for scale and performance`,
    title: `real-world solutions.`,
    link: 'https://estadia.io/',
    image: {
      src: '/static/images/project/Untitled.png',
      width: 900,
      height: 900,
    },
  },
  {
    description: `Here are some projects`,
    title: `we've built.`,
    link: 'https://cca.blocktrends.com.br/',
    image: {
      src: '/static/images/project/cca.png',
      width: 900,
      height: 900,
    },
  },
  {
    description: `See our work`,
    title: `in action.`,
    link: 'https://www.blocktrends.app/',
    image: {
      src: '/static/images/project/btapp.png',
      width: 900,
      height: 900,
    },
  },
  {
    description: `Check out our`,
    title: `latest projects.`,
    link: 'https://mesascout.com.br/',
    image: {
      src: '/static/images/project/mesa-scout-home.jpg',
      width: 900,
      height: 900,
    },
  },
];
