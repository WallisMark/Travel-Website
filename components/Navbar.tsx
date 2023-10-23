import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container  padding-container relative z-30 py-5'>
        <Link
        href='/'
        className='flex gap-2'
        > 
            <Image
            alt='this is the icon of the app'
            src='/Icon.png'
            width={30}
            height={30}
            />
            <h1 className='mt-1'>SuperTravels</h1>
        </Link>

        <ul className='hidden h-full gap-6 lg:flex'>
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key}
                className='regular-16 text-gray-50 flexCenter pb-1.5 hover:font-bold'
                >
                    {link.label}
                </Link>
            ))}
        </ul>
        <Image
            alt='this is the icon of the app'
            src='/menu.svg'
            width={30}
            height={30}
            className=' inline-block lg:hidden cursor-pointer '
            />
        <div className='hidden lg:flex'>
             <Button
             type = 'button'
             title = 'Login'
             icon = '/user.svg'
             variant = 'btn_dark_green'
             />
        </div>
    </nav>
  )
}

export default Navbar
