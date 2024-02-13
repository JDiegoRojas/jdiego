import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="my-1 mr-3 rounded-lg bg-primary-200 p-1 text-xs font-medium uppercase text-primary-700 hover:text-primary-900 dark:bg-primary-900 dark:text-primary-200 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
