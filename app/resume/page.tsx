import React from 'react'

const page = () => {
    return (
        <div className='p-4 p-4 md:p-6 lg:p-8'>
            <div className='mt-4 flex justify-center'>
                <iframe className="pdf w-full max-w-4xl h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px]" 
                    src= "Res-2024.pdf"
                    >
                </iframe>
            </div>
        </div>
        
    )
}

export default page