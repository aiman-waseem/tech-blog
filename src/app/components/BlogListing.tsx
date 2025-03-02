import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/SanityClient";
import { BlogCard, getBlogdata } from "../data/getBlogData";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const BlogListing = async () => {
  const data: BlogCard[] = await getBlogdata();

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
      {data.map((post, indx) => (
        <Card
          key={indx}
          className=" relative h-full max-w-[350px] shadow-lg mx-auto light:border-0 rounded-xl border-0 dark:border-gray-700  "
        >
          <CardHeader>
            <Image
             width={350}
             height={100}
              src={urlFor(post.portrait).url()}
              alt={post.blogTitle}
              className="  rounded"
            />
            <CardTitle className="py-2 line-clamp-3">
              {post.blogTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
           
           <div className="absolute bottom-1 right-0 left-0 flex justify-center py-2 ">
       
             <Button className="w-3/4 mx-auto">
                <Link href={`/blog/${post.blog_slug}`}>Read More</Link>
              </Button>
        
            </div>
            
           
          </CardContent>
          
        </Card>
      ))}
    </div>
  );
};

export default BlogListing;
