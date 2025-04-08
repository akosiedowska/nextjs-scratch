import React from 'react'
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes'
import HomeProperties from '@/components/HomeProperties'

// export const metadata = {
//     title: 'Test'
// }

const HomePage = () => {
    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    )
}

export default HomePage