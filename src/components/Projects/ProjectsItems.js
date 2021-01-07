import xkcdThumbnail from '../../images/xkcdTnLowRes.webp';

export const ProjectsItems = [
  {
    id: 1,
    direction: 'row',
    imgURL: './images/stockphotoTest.jpg',
    imgAlt: 'Image av visaliserings app',
    stackList: ['C#', 'Blazor', 'html', 'css'],
    title: 'Sorting Algorithm Visualizer',
    shortDescription: 'Short App visualising different sorting algorithms',
    longDescription: 'Long Web App visualising different sorting algorithms',
    githubLink: 'https://github.com/AndyCarlsson/blazor-sorting-visualization',
  },
  {
    id: 2,
    direction: 'row-reverse',
    imgURL: { xkcdThumbnail },
    imgAlt: 'xkcd comic thumbnail',
    stackList: ['C#', 'Blazor', 'html', 'css'],
    title: 'xkcd comic app',
    shortDescription: 'Short An mobile app that lets you view and save your favorite xkcd commics',
    longDescription: 'Long An mobile app that lets you view and save your favorite xkcd commics',
    githubLink: 'https://github.com/AndyCarlsson/xkcd-comic-xamarinforms',
  },
  {
    id: 3,
    direction: 'row',
    imgURL: 'Startpage',
    imgAlt: 'Startpage thumbnail',
    stackList: ['C#', 'Blazor', 'html', 'css'],
    title: 'Startpage',
    shortDescription: 'Browser startpage',
    longDescription: 'Browser startpage',
    githubLink: 'https://github.com/AndyCarlsson/startpage',
  },
];
