import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/components/ui/BlogItem";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <section className="lg:max-w-[80rem] mx-auto py-[4rem] lg:py-[6rem]" id="program" >
      <div className="flex flex-col justify-center items-center px-8 mb-[4rem]">
          <div className="text-center lg:px-12 lg:max-w-3xl lg:mt-[-4em] md:mt-[-2em] mb-8">
              <h1 className="text-primary font-semibold my-6 w-full leading-snug !text-4xl lg:max-w-4xl lg:!text-7xl">
                  <span className="text-secondary">Blog</span> Kizuna
              </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
              {posts?.length > 0 ? (
                posts.map((post, i) => <BlogItem key={i} blog={post} />)
              ) : (
                <p>No posts found</p>
              )}
          </div>
      </div>
    </section>
  );
}