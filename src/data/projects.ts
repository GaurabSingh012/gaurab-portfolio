export type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image?: string;
  visual?: 'manuscript';
};

export const projects: Project[] = [
  {
    number: '01',
    title: 'CalibraKidney',
    type: 'AI · Computer Vision · Mobile',
    description:
      'An AI-assisted kidney health screening platform that interprets urinalysis strips through a calibrated computer-vision pipeline and EfficientNet-B2 classification.',
    technologies: ['React Native', 'Expo', 'FastAPI', 'EfficientNet-B2', 'AWS'],
    github: 'https://github.com/GaurabSingh012/CalibraKidney',
    live: 'https://expo.dev/accounts/rabgaukus/projects/calibrakidney-mobile/builds/aefac875-46aa-43e4-ad7e-dc25b791317e',
    image: '/CalibraKidney.png',
  },
  {
    number: '02',
    title: 'VisionAI',
    type: 'GenAI · Full Stack',
    description:
      'A full-stack AI image generation platform built around FLUX inference, cloud media delivery, and a community gallery for generated visuals.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'FLUX'],
    github: 'https://github.com/GaurabSingh012/AI_Image_Gen',
    image: '/Vision_AI.png',
  },
  {
    number: '03',
    title: 'Manuscript Digitizer',
    type: 'Computer Vision · NLP',
    description:
      'A Nepali manuscript digitization and restoration project focused on making historical handwritten material easier to process, preserve, and read.',
    technologies: ['Python', 'Computer Vision', 'NLP', 'Deep Learning'],
    github: 'https://github.com/GaurabSingh012/Manuscript_Digitizer',
    visual: 'manuscript',
  },
  {
    number: '04',
    title: 'Ask-AI',
    type: 'NLP · Browser ML',
    description:
      'A privacy-focused document question-answering application that runs MobileBERT inference directly in the browser with TensorFlow.js.',
    technologies: ['React', 'TypeScript', 'TensorFlow.js', 'MobileBERT', 'Vite'],
    github: 'https://github.com/GaurabSingh012/Ask-AI',
    live: 'https://gaurabsingh012.github.io/Ask-AI/',
    image: '/Ask-AI.png',
  },
];
