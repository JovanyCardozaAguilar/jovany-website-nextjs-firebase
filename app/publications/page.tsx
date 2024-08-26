import React from 'react'

const Page = () => {
    return (
        <div className='p-4'>
            <div className='text-xl text-center'>
                Published Papers
            </div>
            <div className='mt-4 text-center'>
                <a href="https://www.springerprofessional.de/en/a-holistic-approach-for-single-cell-data-trajectory-inference-us/27323138">
                    A Holistic Approach for Single-Cell Data Trajectory Inference Using Chromosome Physical Location and Ensemble Random Walk
                </a>
            </div>
            <div className='mt-4 text-center'>
                Publisher: Springer Nature Switzerland
            </div>
            <div className='mt-4 text-center'>
                Publication Date: July 8, 2024
            </div>
            <div className='mt-4 text-center'>
                <a 
                    href="https://www.springerprofessional.de/en/a-holistic-approach-for-single-cell-data-trajectory-inference-us/27323138"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Show Publication
                </a>
            </div>
        </div>
    )
}

export default Page
