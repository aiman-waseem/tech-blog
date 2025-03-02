"use server"
import React from 'react'
import { client } from '../lib/SanityClient';


export interface BlogCard {
    
    blogTitle: string,
    portrait:any
    blog_slug:string,
    
}

export interface fullBlog {
    blogTitle: string,
    portrait:any
    blog_slug:string,
    content:any

}

//To fetch data connect sanity client with sanity backend (npm install @sanity/client)
export async function getBlogdata (){
    const query =` *[_type == 'blogs'] | order(_createdAt asc) {
      blogTitle, 
      "portrait": portrait.asset->url,
        "blog_slug":slug.current
    }`
    try {
      const data = await client.fetch(query);
      console.log('Fetched blog data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching blog data:', error);
      return [];
    }
  }
  

  export async function getBlogDetails (slug:string){
    const query = `*[_type == 'blogs' && slug.current == '${slug}' ]  {
        blogTitle,  portrait, "blog_slug":slug.current, content
      }[0]`
      const data = await client.fetch(query)
      return data;
  }
