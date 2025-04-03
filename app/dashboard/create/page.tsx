import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const CreateBlogPage = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-medium'>Your Blog Articles</h2>
        <Link href='/dashboard/create' className={cn(buttonVariants())}>
          Create Post
        </Link>
      </div>
    </div>
  )
}

export default CreateBlogPage
