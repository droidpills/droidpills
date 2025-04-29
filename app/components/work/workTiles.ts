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
    description: `Here are some projects`,
    title: `we've built.`,
    link: 'https://mesascout.com.br/',
    image: {
      src: '/static/images/mesa-scout.png',
      width: 900,
      height: 900,
    },
  },
   {
     description: `See our work`,
     title: `in action.`,
     link: 'http://etalent.com.br/',
     image: {
       src: '/static/images/project/etalent.jpg',
       width: 900,
       height: 900,
     },
   },
   {
    description: `Check out our`,
    title: `latest projects.`,
    link: 'https://impecavel.com.br/',
    image: {
      src: '/static/images/project/impecavel.jpg',
      width: 900,
      height: 900,
    },
  },
];
