import React from 'react'
import Image from 'next/image'

const page = () => {

  return (
<div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <Image className="w-24 h-24 rounded-full mx-auto" src="/kk.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Tailwind CSS is the only framework that I have seen scale
        on large teams. It is easy to customize, adapts to any design,
        and the build size is tiny.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure></div>

  )
}

export default page