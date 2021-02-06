import phone_xkcd_start from '../../../assets/images/phone_xkcd_start.webp';
import phone_xkcd_fav from '../../../assets/images/phone_xkcd_fav.webp';
import imac_sorting_algorithm from '../../../assets/images/imac_sorting_algorithm.webp';
import imac_startpage from '../../../assets/images/imac_startpage.webp';
import sorting_algo_vid from '../../../assets/videos/sorting_algo_vid.mp4';
import startpage_vid from '../../../assets/videos/startpage_vid.mp4';
import xkcd_vid from '../../../assets/videos/xkcd_vid.webm';

const ProjectData = [
  {
    id: 1,
    title: 'Sorting Algorithm Visualizer',
    shortDescription:
      'Web app created with Blazor that is visualising different sorting algorithms.',
    longDescription: 'Long Web App visualising different sorting algorithms',
    images: [imac_sorting_algorithm],
    imgAlt: 'Algorith Visualization',
    video: sorting_algo_vid,
    stackList: ['Blazor', 'C#', 'html', 'css'],
    githubLink: 'https://github.com/AndyCarlsson/blazor-sorting-visualization',
    direction: 'row',
    bgColor: '#EAE7DC',
  },
  {
    id: 2,
    title: 'xkcd comic app',
    shortDescription:
      'Mobile app made with Xamarin forms that fetches random xkcd-comics and lets you save your favorites.',
    longDescription: 'Long An mobile app that lets you view and save your favorite xkcd commics',
    images: [phone_xkcd_start, phone_xkcd_fav],
    imgAlt: 'xkcd comic',
    video: xkcd_vid,
    stackList: ['Xamarin Forms', 'C#', 'xaml'],
    githubLink: 'https://github.com/AndyCarlsson/xkcd-comic-xamarinforms',
    direction: 'row-reverse',
    bgColor: '#dbd9d3',
  },
  {
    id: 3,
    title: 'Startpage',
    shortDescription:
      'This is a starpage for the web customized with my personally most visited websites and information at hand.',
    longDescription: 'Browser startpage',
    images: [imac_startpage],
    imgAlt: 'Startpage',
    video: startpage_vid,
    stackList: ['html', 'css', 'js'],
    githubLink: 'https://github.com/AndyCarlsson/startpage',
    direction: 'row',
    bgColor: '#EAE7DC',
  },
];

export default ProjectData;
