import React, { useState } from 'react'
import { getBlogDetails, fullBlog } from '../../data/getBlogData'
import {PortableText} from '@portabletext/react'
import { urlFor } from '@/app/lib/SanityClient'
import Image from 'next/image'




// field type content is an array of objects so we will use portable text library to sanitize it.
 const BlogSlug =  async({params}: {params:{slug:string}}) => {

    const blogDetails:fullBlog = await getBlogDetails(params.slug)

   
  return (
    <div className='max-w-3xl  mx-auto  '>
   
<div className='flex justify-center'>
<Image  className='rounded-lg mt-8 max-w-3xl ' width={400} height={300}  alt='blog_Image'  src={urlFor(blogDetails.portrait).url()} />
  
  </div>    
      
      <h2 className='block font-bold tracking-tight mt-11 text-3xl'>{blogDetails.blogTitle} </h2>
      <div className='mt-16 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary'>
        <PortableText value={blogDetails.content} />
      </div>
    </div>
  )
}

export default BlogSlug;