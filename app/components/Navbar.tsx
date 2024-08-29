import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-900 h-20 w-full border-b-2 flex items-center justify-center p-2'>
            <ul className='flex'>
                <li className='p-4 cursor-pointer'>
                    <Link href = '/'>Home</Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link href = '/projects'>Projects</Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link href = '/publications'>Publications</Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link href = '/resume'>Resume</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar