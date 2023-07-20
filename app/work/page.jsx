"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const categoriesWithHref = {
  "All Projects": "/work",
  Branding: "/work?category=branding",
  "Web design": "/work?category=web-design",
  "Product design": "/work?category=product-design",
  "Social network": "/work?category=social-network",
  Packaging: "/work?category=packaging",
};

export default function WorkPage(params) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();
  const path = usePathname();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    router.push(categoriesWithHref[newCategory]);
  };

  const {
    data: itemData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["/me/work", selectedCategory], // Include selectedCategory in the queryKey
    queryFn: async ({ queryKey }) => {
      const [, selectedCategory] = queryKey; // Destructure the queryKey to get the selectedCategory
      let query = `
        *[_type == "post"] | order(publishedAt desc) {
        title,
        slug,
        mainImage {
          alt,
          asset
        },
        categories[] -> {
            title,
            slug {
              current
            }
          },
        excerpt,
        publishedAt,
        author->{_ref, name},
      }`;

      const data = await client.fetch(query);
      return data;
    },
  });

  useEffect(() => {
    if (itemData) {
      if (selectedCategory === "All Projects") {
        // If "All Projects" is selected, show all posts
        setFilteredPosts(itemData);
      } else {
        // Otherwise, filter the posts based on the selected category
        const filteredPosts = itemData.filter((post) => {
          if (post.categories && post.categories.length > 0) {
            return post.categories.find(
              (category) =>
                category.slug.current === params?.searchParams?.category
            );
          }
          return false;
        });
        setFilteredPosts(filteredPosts);
      }
    }
  }, [itemData, selectedCategory]);

  if (isLoading) return "Loading...";

  return (
    <>
      <section className="pt-[2vw] pb-[4rem] relative overflow-hidden backdrop:border-gray-900">
        {windowWidth < 1000 ? (
          <div className="w-full flex items-center justify-center mt-4">
            <label htmlFor="categorySelect" className="sr-only">
              Select Category
            </label>
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="text-[1.6vw] px-4 py-3 border-2 cursor-pointer border-gray-900 font-medium rounded-full w-full max-w-[48vw]"
            >
              {Object.keys(categoriesWithHref).map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="items-center justify-center gap-2 hidden md:flex">
            {Object.keys(categoriesWithHref).map((label) => (
              <div
                key={label}
                className={`px-4 py-2 border-2 cursor-pointer border-gray-900 font-medium rounded-full ${
                  selectedCategory === label
                    ? "bg-black text-white"
                    : "hover:bg-gray-900 hover:text-white"
                }`}
                onClick={() => {
                  setSelectedCategory(label);
                  router.push(categoriesWithHref[label]);
                }}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        {filteredPosts?.map((post, key) => (
          <Link
            href={`/work/${post.slug.current}`}
            key={key}
            className="flex flex-col gap-2"
          >
            <div className=" rounded-md relative  hover:bg-opacity-75 hover:transition-all hover:duration-500">
              <div className="flex items-center gap-2 absolute top-3 left-3">
                {post.categories && (
                  <Button>{post?.categories[0]?.title}</Button>
                )}
                {post.categories && (
                  <Button>{post?.categories[1]?.title}</Button>
                )}
              </div>
              <div className=" cursor-pointer">
                <img
                  src={urlForImage(post?.mainImage?.asset)}
                  className="w-full rounded-md aspect-[16/10] object-center object-cover"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-[3vw] line-clamp-1 whitespace-nowrap text-center font-medium">
              {post.title}
            </h2>
          </Link>
        ))}
      </section>
    </>
  );
}
