import React from 'react'

// Assets
import { CheckCircleIcon } from '@heroicons/react/outline'

const features = [
    {
        title: "Support 24/7",
        description: "Pellentesque mollis, metus nec fringilla aliquam"
    },
    {
        title: "Easy to use",
        description: "Sed mauris ex, imperdiet sit amet nisl ac, ultrices.",
    },
    {
        title: "Simulation",
        description: "Aenean lectus ex, placerat id tellus in eros."
    },
    {
        title: "Frequent updates",
        description: "Aenean lectus ex, placerat id tellus in eros."
    },
    {
        title: "Recommendation",
        description: "Aenean lectus ex, placerat id tellus in eros."
    },
    {
        title: "Real time chatting",
        description: "Aenean lectus ex, placerat id tellus in eros."
    }
]

export default function Features() {

    const featuresList = features.map(feature => (
        <div className="mb-12">
            <div className="flex">
                <div className="shrink-0 mt-1">
                    <CheckCircleIcon className="w-6 h-6 text-tangBlue"/>
                </div>
                <div className="grow ml-4">
                <p className="text-2xl font-bold mb-1">{feature.title}</p>
                <p className="text-lg">{feature.description}</p>
                </div>
            </div>
            </div>
    ))

  return (
    <div classNameName='h-screen text-white flex flex-col items-center justify-center'>
        <section className="text-white">
        <div className="flex justify-center">
            <div className="text-center max-w-[700px]">
            <h2 className="md:text-5xl text-3xl font-bold mb-6">Why is it so great?</h2>
            <p className="md:text-2xl text-xl mt-12 mb-28">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis malesuada.
                Aenean gravida magna orci, non efficitur est porta id. Donec magna diam.
            </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12 mx-32">
           {featuresList}
        </div>
        </section>
    </div>
  )
}