'use client'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { cn } from '@/lib/utils'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

const Navbar = () => {
  const { getUser } = useKindeBrowserClient()
  const user = getUser()
  return (
    <nav className='py-5 flex items-center justify-between'>
      <div className='flex items-center gap-6'>
        <Link href={'/'}>
          <h1 className='text-3xl font-semibold'>
            Blog<span className='text-blue-500'>Finder</span>
          </h1>
        </Link>

        <div className='hidden sm:flex items-center gap-6'>
          <Link
            href={'/'}
            className='text-sm font-medium hover:text-blue-500 transition-colors'
          >
            Home
          </Link>
          <Link
            href={'/dashboard'}
            className='text-sm font-medium hover:text-blue-500 transition-colors'
          >
            Dashboard
          </Link>
        </div>
      </div>

      {user ? (
        <div className='flex items-center gap-4'>
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: 'secondary' })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className='flex items-center gap-4'>
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'hover:bg-blue-500 hover:text-white transition-colors'
            )}
          >
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
