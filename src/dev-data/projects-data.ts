import momentsImage from './images/moments.png';
import todoImage from './images/todo.png';
import vidtubeImage from './images/vidtube.png';
import storefrontImage from './images/storefront.png';
import imageapiImage from './images/imageapi.png';
import flyawaybackendImage from './images/flywawaybackend.png';
import porfolioImage from './images/portfolio.png';

export const projects = [
  {
    id: 'moments-project',
    title: 'Moments',
    type: 'frontend',
    description:
      'Moments is a social media web app for sharing your moments with other people and expressing your opinions or be used as a private gallery.',
    live: true,
    liveUrl: 'https://moments-delta.vercel.app/',
    public: true,
    codeUrl: 'https://github.com/mactav1sh/moments',
    image: momentsImage,
    stack: ['js', 'react', 'firebase', 'tailwind'],
  },
  {
    id: 'todo-project',
    type: 'frontend',
    title: 'To-do list',
    description:
      'To-do app connected to a fake RESTful API where you can add, edit, delete tasks.',
    live: true,
    liveUrl: 'https://todo-list-iota-five.vercel.app/',
    public: true,
    codeUrl: 'https://github.com/mactav1sh/todo-react/tree/master',
    image: todoImage,
    stack: ['js', 'react', 'styledComps'],
  },
  {
    id: 'vidtube-project',
    type: 'frontend',
    title: 'Vidtube',
    description: 'Website for searching and playing videos, using youtube API',
    live: true,
    liveUrl: 'https://vidtubemact.netlify.app/',
    public: true,
    codeUrl: 'https://github.com/mactav1sh/vidtube',
    image: vidtubeImage,
    stack: ['js', 'react', 'tailwind', 'api'],
  },
  {
    id: 'porfolio-project',
    type: 'frontend',
    title: 'my portfolio',
    description: 'Website for showcasing my projects',
    live: true,
    liveUrl: '/',
    public: false,
    codeUrl: '/',
    image: porfolioImage,
    stack: ['ts', 'react', 'tailwind'],
  },
  {
    id: 'storefront-project',
    type: 'backend',
    title: 'storefront API',
    description:
      "Storefront API is a RESTFul API with PostgreSQL Database, created for Udacity's JS Full Stack Nanodegree",
    live: false,
    liveUrl: '',
    public: true,
    codeUrl: 'https://github.com/mactav1sh/storefront-backend',
    image: storefrontImage,
    stack: ['ts', 'nodejs', 'postgres', 'jwt', 'jasmine'],
  },
  {
    id: 'image-processing-project',
    type: 'backend',
    title: 'Image Processing API',
    description:
      "Image Processing API is an API for scaling images and can be used as a library to serve pre-scaled images, created for Udacity's JS Full Stack Nanodegree",
    live: false,
    liveUrl: '',
    public: true,
    codeUrl: 'https://github.com/mactav1sh/Image-Processing-API',
    image: imageapiImage,
    stack: ['ts', 'nodejs', 'postgres', 'jasmine'],
  },

  {
    id: 'flyaway-backend',
    type: 'backend',
    title: 'flyaway API',
    description:
      'Flyaway API is an API for a Travels Booking website complete with encryption using bcrypt and authentication using JWTs sent in cookies',
    live: false,
    liveUrl: '',
    public: true,
    codeUrl: 'https://github.com/mactav1sh/flyaway-backend',
    image: flyawaybackendImage,
    stack: ['ts', 'nodejs', 'mongodb', 'jwt'],
  },
];

// {
//   id: '',
//   type: 'frontend',
//   title: '',
//   description: '',
//   live: true,
//   liveUrl: '',
//   public: true,
//   codeUrl: '',
//   image: '',
//   stack: ['js', 'react', 'firebase', 'tailwind'],
// },
