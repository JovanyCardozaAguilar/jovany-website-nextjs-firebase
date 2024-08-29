import React from 'react'

const page = () => {
    return (
        <div className='p-4'>
            <div className='text-xl text-center'>
                Projects
            </div>
            <div className='mt-4 text-center'>
                <a href="https://jovanycardozaaguilar.itch.io/maize-madness">
                    Maize Madness
                </a>
            </div>
            <div className='mt-4 flex justify-center'>
                <img src='corn-model.png' alt='Image cover for maize madness game' className='w-64 h-auto'></img>
            </div>
            <div className='mt-4 text-center'>
                A clicker game made in Unity
            </div>
            <div className='mt-4 text-center'>
                <a 
                    href="https://jovanycardozaaguilar.itch.io/maize-madness"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    View Game
                </a>
            </div>
        </div>
    )
}

export default page