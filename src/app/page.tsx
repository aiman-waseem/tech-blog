import BlogSlug from "./blog/[slug]/page";
import BlogListing from "./components/BlogListing";
import Navbar from "./components/Navbar";
import { client } from "./lib/SanityClient";



export default async function Home() {
  // const blogData = await getBlogdata();
  // console.log(blogData)
  return (
    <main className=" min-h-screen   ">
      
      {/* <Navbar/> */}
      <BlogListing/>
    </main>
  );
}
