import Card from '@/components/Card'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Proyectos' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Proyectos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Proyectos personales o algunas tareas
          </p>
        </div>
        <div className="container px-4 py-12">
          <div className="-m-4 mx-auto flex flex-wrap justify-start gap-5">
            {projectsData.map((d, index) => (
              <div className="w-full md:max-w-[314px]" key={index}>
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description.slice(0, 114) + '...'}
                  //imgSrc={d.imgSrc}
                  href={d.href}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
