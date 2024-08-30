import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-900 h-20 w-full border-b-2 flex items-center justify-center p-2'>
            <ul className='flex'>
                <li className='p-4 cursor-pointer'>
                    <Link href = '/' className='text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    Home
                    </Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link href = '/projects' className='text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    Projects
                    </Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link href = '/publications' className='text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    Publications
                    </Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link href = '/resume' className='text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    Resume
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar