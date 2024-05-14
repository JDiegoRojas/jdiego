import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'LabAGRO',
    description: `API RESTful y bot de Telegram para el laboratorio de Ingeniería Agroindustrial de la Universidad Nacional de Trujillo. Hecho con django-rest-framework.`,
    imgSrc: '/static/images/labagro.jpg',
    url: 'https://github.com/JDiegoRojas/API-Lab-UNTAGRO',
    repo: 'jdiegorojas/API-Lab-UNTAGRO',
    builtWith: ['django', 'python', 'APIRest', 'TelegramBot'],
  },
  {
    type: 'work',
    title: 'APP DAE',
    description:
      'Aplicación que diseña y analiza experimentos utilizando el paquete Shiny creado en RStudio.',
    imgSrc: '/static/images/appdae.jpg',
    url: 'https://jdiegorf.shinyapps.io/DAE-AGRO/',
    builtWith: ['R', 'Shiny', 'HTML', 'Shinydashboard'],
  },
  {
    type: 'work',
    title: 'Chatlab - UNT VJ',
    description:
      'Chatbot para el laboratorio de Ingenieria agroindustrial con información en tiempo real usando SDK de Vercel y API de OpenAI.',
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
      'Sistema que permite acceder de manera asíncrona a los archivos judiciales en Perú mediante suscripciones.',
    imgSrc: '/static/images/apicej.png',
    url: 'https://consultacej.vercel.app/',
    builtWith: ['Azure', 'Selenium', 'Nextjs', 'TypeScript', 'MongoDB'],
  },
  {
    type: 'self',
    title: 'Detección de ETAs en tiempo real usando visión computacional e IA',
    description: 'Proyecto de portafolio en colaboración con George Peraldo.',
    imgSrc: '',
    url: '',
    builtWith: ['Python', 'Redes neuronales'],
    repo: ' ',
  },
]
