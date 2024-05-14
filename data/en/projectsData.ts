import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'LabAGRO',
    description: `RESTful API and Telegram bot for the Agroindustrial Engineering laboratory of the National University of Trujillo. Made with django-rest-framework.`,
    imgSrc: '/static/images/labagro.jpg',
    url: 'https://github.com/JDiegoRojas/API-Lab-UNTAGRO',
    repo: 'jdiegorojas/API-Lab-UNTAGRO',
    builtWith: ['django', 'python', 'APIRest', 'TelegramBot'],
  },
  {
    type: 'work',
    title: 'APP DAE',
    description:
      'Application that designs and analyzes experiments using the Shiny package created in RStudio.',
    imgSrc: '/static/images/appdae.jpg',
    url: 'https://jdiegorf.shinyapps.io/DAE-AGRO/',
    builtWith: ['R', 'Shiny', 'HTML', 'Shinydashboard'],
  },
  {
    type: 'work',
    title: 'Chatlab - UNT VJ',
    description:
      'Chatbot for the agroindustrial engineering laboratory with real-time information using Vercel SDK and OpenAI API.',
    imgSrc: '/static/images/chatlab.jpg',
    url: 'https://chatlab1.vercel.app/',
    builtWith: ['Nextjs', 'OpenAI', 'Tailwind', 'SDK Vercel'],
  },

  {
    type: 'work',
    title: 'Blog personal',
    imgSrc: '/static/images/pagejdiego.jpg',
    repo: '',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
  {
    type: 'self',
    title: 'Consultas CEJ',
    description:
      'System that allows asynchronous access to judicial files in Peru through subscriptions.',
    imgSrc: '/static/images/apicej.png',
    url: 'https://consultacej.vercel.app/',
    builtWith: ['Azure', 'Selenium', 'Nextjs', 'TypeScript', 'MongoDB'],
  },
  {
    type: 'self',
    title: 'Detection of ETs in real time using computer vision and AI',
    description: 'Portfolio project in collaboration with George Peraldo.',
    imgSrc: '',
    url: '',
    builtWith: ['Python', 'Neural networks'],
    repo: ' ',
  },
]
