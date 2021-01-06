import xkcdThumbnail from '../../images/xkcdTnLowRes.webp';

export const ProjectsItems = [
  {
    className: 'project-item-reverse',
    imgURL: 'Image av visaliserings app',
    stackList: ['C#', 'Blazor', 'html', 'css'],
    title: 'Sorting Algorithm Visualizer',
    shortDescription: 'Short App visualising different sorting algorithms',
    longDescription: 'Long Web App visualising different sorting algorithms',
    githubLink: 'https://github.com/AndyCarlsson/blazor-sorting-visualization',
  },
  {
    className: 'project-item',
    imgURL: { xkcdThumbnail },
    stackList: ['C#', 'Blazor', 'html', 'css'],
    title: 'xkcd comic app',
    shortDescription: 'Short An mobile app that lets you view and save your favorite xkcd commics',
    longDescription: 'Long An mobile app that lets you view and save your favorite xkcd commics',
    githubLink: 'https://github.com/AndyCarlsson/xkcd-comic-xamarinforms',
  },
  {
    className: 'project-item-reverse',
    imgURL: 'Startpage',
    stackList: ['C#', 'Blazor', 'html', 'css'],
    title: 'Startpage',
    shortDescription: 'Browser startpage',
    longDescription: 'Browser startpage',
    githubLink: 'https://github.com/AndyCarlsson/startpage',
  },
];
