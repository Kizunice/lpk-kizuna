import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import clientConfig from "./config/client-config";
import {
  postQuery,
  postQueryBySlug,
  postQueryByTag,
  postQueryByAuthor,
  postQueryByCategory,
} from "./sanity-query";

export const client = createClient(clientConfig);

export async function sanityFetch({
  query,
  qParams,
  tags,
}) {
  return client.fetch(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
} 

export function imageBuilder(source) {
  return ImageUrlBuilder(clientConfig).image(source);
}

export const getPosts = async () => {
  const data = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
  return data;
};

export const getPostBySlug = async (slug) => {
  const data = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });

  return data;
};

export const getPostsByTag = async (tag) => {
  const data = await sanityFetch({
    query: postQueryByTag,
    qParams: { slug: tag },
    tags: ["post", "author", "category"],
  });

  return data;
};

export const getPostsByAuthor = async (slug) => {
  const data = await sanityFetch({
    query: postQueryByAuthor,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });

  return data;
};

export const getPostsByCategory = async (category) => {
  const data = await sanityFetch({
    query: postQueryByCategory,
    qParams: { category },
    tags: ["post", "author", "category"],
  });

  return data;
};

export const getAuthorBySlug = async (slug) => {
  const data = await sanityFetch({
    query: `*[_type == "author" && slug.current == $slug][0]`,
    qParams: { slug },
    tags: ["author"],
  });

  return data;
};