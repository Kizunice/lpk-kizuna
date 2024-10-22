import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { urlForImage } from "@/sanity/image";

const dateFormatter = new Intl.DateTimeFormat('id', { day: 'numeric', month: 'long', weekday: "long", year: "numeric" });

const BlogItem = ({blog}) => {
    const imageProps = blog.mainImage
    ? urlForImage(blog.mainImage)
    : null;
    const date = new Date(blog.publishedAt)
    return (
        <Link href={`/id/blog/${blog.slug.current}`} className='block p-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-8'>
        
        <article>
            {imageProps && (
            <Image
                priority
                src={imageProps.src}
                alt={blog.mainImage.alt || "Thumbnail"}
                loading="eager"
                fill
                sizes="100vw"
                className="object-cover rounded-md"
            />
            )}
            <h3 className="mb-auto pb-4 text-xl font-bold tracking-tight text-gray-700">{blog.title}</h3>
            {/* <p className='b-0 font-normal text-sm text-gray-600'>{new Date(blog.publishedAt).toDateString()}</p> */}
            <p className="b-0 font-normal text-sm text-gray-600 pb-1">
                {dateFormatter.format(date)}
            </p>
        </article>
        
        </Link>
    )
}

export default BlogItem