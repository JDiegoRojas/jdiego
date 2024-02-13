import Card from '@/components/Card'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import projectsData from '@/data/projectsData'
import resourcesData from '@/data/resourcesData'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 3
const lastProject = projectsData[projectsData.length - 1]
//const lastResource = resourcesData[resourcesData.length - 1]

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hola soy JDiego
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="flex flex-col font-semibold md:grid md:grid-cols-12 md:space-x-5">
          <div className="col-span-8 flex flex-col">
            <h3>Ultimos post</h3>
            <ul>
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { slug, date, title, summary, tags } = post
                return (
                  <li key={slug} className="py-5">
                    <article>
                      <div className="space-y-2 rounded-md border border-slate-300 p-2 transition-all duration-150  hover:scale-105 dark:border-slate-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <div className="space-y-5  xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/blog/${slug}`}
                                  className="text-gray-900 dark:text-gray-100"
                                >
                                  {title}
                                </Link>
                              </h2>
                              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                              </dd>
                              <div className="flex flex-wrap">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </div>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                              {summary}
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label={`Read more: "${title}"`}
                            >
                              Leer más &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {posts.length > MAX_DISPLAY && (
              <div className="flex justify-start text-base font-medium leading-6">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="All posts"
                >
                  Ver Todos &rarr;
                </Link>
              </div>
            )}
          </div>
          <div className="col-span-4 flex flex-col">
            <div className="flex flex-col">
              <h3>Proyectos</h3>
              <Card
                key={lastProject.title}
                title={lastProject.title}
                description={lastProject.description}
                //imgSrc={lastProject.imgSrc}
                href={lastProject.href}
              />
            </div>
            {/* {lastResource && (<div className="flex flex-col">
              <h3>Recursos</h3>
              <Card
                key={lastResource.title}
                title={lastResource.title}
                description={lastResource.description}
                imgSrc={lastResource.imgSrc}
                href={lastResource.href}
              />
            </div>)} */}
            
          </div>
        </div>
      </div>
    </>
  )
}
