import React from 'react'
import Link from 'next/link'

// export const metadata = {
//     title: 'Test'
// }

const HomePage = () => {
    return (
        <div>
            <h1 className='text-3xl'>Welcome</h1>
            <Link href="/properties">Show properties</Link>
        </div>
    )
}

export default HomePage