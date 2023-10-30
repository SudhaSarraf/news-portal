import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <ul className='py-2 border-gray-300'>
            <li className='space-x-8 text-lg bold text-white'>
                <Link href="/politics">Politics</Link>
                <Link href="/science">Science</Link>
                <Link href="/lifestyle">Lifestyle</Link>
                <Link href="/health">Health</Link>
                <Link href="/sports">Sports</Link>
                <Link href="/travel">Travel</Link>
                <Link href="/food">Food</Link>
                
            </li>
        </ul>
        {/* <div className='w-full h-[1px] bg-black mb-1' />
        <div className='w-full h-[1px] bg-black' /> */}
    </nav>
  )
}

export default Navbar