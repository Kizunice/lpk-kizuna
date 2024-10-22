import React from "react";
import { getPostBySlug } from "@/sanity/sanity-utils";
import { urlForImage } from "@/sanity/lib/image";
import RenderBodyContent from "@/components/ui/RenderBodyContent";
import Image from "next/image";

const SingleBlogPage = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;

  return (
    <article className="lg:max-w-[70rem] mx-auto py-[2rem] lg:py-[6rem] px-8">
      <div className="flex flex-col lg:w-[65%] mx-auto mb-6">
        <h1 className="text-2xl lg:text-4xl text-center font-semibold mb-4">{post.title}</h1>
        <p className="text-center pb-1">
          <span className="font-medium">Published: </span>
          {new Date(post.publishedAt).toDateString()}
          <span className="font-medium pl-2">by </span>
          {post.author.name}
        </p>

      </div>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg mb-4">
        {imageProps && (
          <Image
            priority
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover rounded-md"
          />
        )}
      </div>

      <article className="prose lg:prose-xl lg:max-w-[50rem] justify-center align-center mx-auto">
          <RenderBodyContent post={post} />
      </article>
    </article>
  );
};

export default SingleBlogPage;