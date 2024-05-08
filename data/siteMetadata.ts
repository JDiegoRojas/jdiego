export let siteMetadata = {
  siteUrl: 'https://www.leohuynh.dev',
  siteRepo: 'https://github.com/JDiegoRojas/jdiegopage',
  siteLogo: '/static/images/tu_foto.jpg',
  image: '/static/images/tu_foto.jpg',
  socialBanner: '/static/images/tu_foto.jpg',
  email: 'jdiegorojas01@gmail.com',
  github: 'https://github.com/JDiegoRojas',
  x: 'https://twitter.com/JDiegoRF',
  facebook: 'https://www.facebook.com/jdiego.styleee',
  youtube: 'https://www.youtube.com/channel/UCgG1hmkAyzc5Lyw_aODAN0g',
  linkedin: 'https://www.linkedin.com/in/jdiegorojas01/',
  locale: 'en-US',
  analyticsURL: 'https://analytics.leohuynh.dev/share/jkwRskv0/leohuynh.dev',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: '2df62ae5-7f13-455b-8e54-c15b96ff2b8b',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'JDiego',
    linkedin: 'JDiego',
    x: 'JDiego',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
