import Image from './Image'
import Link from './Link'

export type CardProps = {
  title: string
  description: string
  imgSrc: string
  href: string
  className?: string
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, href, className }) => (
  <div className="md w-full py-4">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border border-slate-300 p-2 transition-all duration-150  hover:scale-105 dark:border-slate-800`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="h-[200px] w-full rounded-md object-cover object-center"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Leer más &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
