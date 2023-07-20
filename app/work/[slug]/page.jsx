"use client";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function WorkDetailsPage() {
  const router = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["me/work/detailsPage", router.slug],
    queryFn: async () => {
      let query = `
        *[_type == "post" && slug.current == $slug] {
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

      const data = await client.fetch(query, { slug: router.slug });
      return data[0];
    },
    keepPreviousData: true,
  });
  console.log(data);

  return (
    <section className="relative">
      {data?.mainImage?.asset ? ( // Check if data?.mainImage?.asset is available
        <div className=" z-[-10] -mt-40 ">
          <div className="relative -z-10">
            <Image
              src={urlForImage(data?.mainImage.asset).url()}
              alt={data?.mainImage.alt}
              width={800}
              height={600}
              className="w-full aspect-video object-cover object-center "
            />
            <div className="flex flex-col items-center justify-center absolute top-[40%] left-[35%]">
              <h1 className="text-white text-[10vw]  ">{data?.title}</h1>
              <span className="flex items-center gap-4">
                {data?.categories?.map((category, key) => (
                  <button
                    className="bg-gray-900 bg-opacity-80 hover:cursor-pointer text-white rounded-full px-4 py-2"
                    key={key}
                  >
                    {category.title}
                  </button>
                ))}
              </span>
            </div>
          </div>
          <div className="mb-96"></div>
        </div>
      ) : (
        // Show a placeholder or loading state while data is being fetched
        <div>Loading...</div>
      )}
    </section>
  );
}
