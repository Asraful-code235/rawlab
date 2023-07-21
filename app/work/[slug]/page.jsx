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
          about,
          aboutDesc,
          aboutPhotos,
          categories[] -> {
            title,
            slug {
              current
            }
          },
          excerpt,
          theChallenge,
          thechallengeDesc,
          theChallengeImages,
          publishedAt,
          TheSolution,
          TheSolutionDesc,
          theSolutionImages,
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
            <div className="flex flex-col items-center justify-center absolute top-[40%] whitespace-nowrap  left-1/2 right-1/2">
              <h1 className="text-white text-[10vw]  ">{data?.title}</h1>
              <span className="flex items-center gap-4">
                {data?.categories?.map((category, key) => (
                  <button
                    className="bg-gray-900 z-10 bg-opacity-80 hover:cursor-pointer text-white rounded-full px-4 py-2"
                    key={key}
                  >
                    {category.title}
                  </button>
                ))}
              </span>
            </div>
          </div>
          <div className="">
            <section className="py-[10rem] space-y-9 px-4 md:max-w-[60vw] mx-auto text-center font-normal tracking-[-0.025rem] leading-[1.083]">
              <h2 className=" text-[2rem] sm:text-[3rem]  ">
                About the project
              </h2>
              <p className="text-5xl md:text-7xl font-semibold">
                {data?.about}
              </p>
              <p className="text-2xl md:text-4xl">{data?.aboutDesc}</p>
            </section>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {" "}
              {data?.aboutPhotos?.map((data, key) => (
                <div key={key} className="rounded-md">
                  <img
                    src={urlForImage(data?.asset).url()}
                    alt="about__image"
                    className="aspect-square w-full object-cover object-center rounded-t-md"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <section className="py-[10rem] space-y-9 px-4 md:max-w-[60vw] mx-auto text-center font-normal tracking-[-0.025rem] leading-[1.083]">
              <h2 className="text-[2rem] sm:text-[3rem]">The Solution</h2>
              <p className="text-5xl md:text-7xl font-semibold">
                {data?.TheSolution}
              </p>
              <p className="text-2xl md:text-4xl">{data?.thechallengeDesc}</p>
            </section>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {" "}
              {data?.theChallengeImages?.map((data, key) => (
                <div key={key} className="rounded-md">
                  <img
                    src={urlForImage(data?.asset).url()}
                    alt="about__image"
                    className="aspect-square w-full object-cover object-center rounded-t-md"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <section className="py-[10rem] space-y-9 px-4 md:max-w-[60vw] mx-auto text-center font-normal tracking-[-0.025rem] leading-[1.083]">
              <h2 className="text-[2rem] sm:text-[3rem] ">The challenge</h2>
              <p className="text-5xl md:text-7xl font-semibold ">
                {data?.theChallenge}
              </p>
              <p className="text-2xl md:text-4xl">{data?.TheSolutionDesc}</p>
            </section>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {" "}
              {data?.theSolutionImages?.map((data, key) => (
                <div key={key} className="rounded-md">
                  <img
                    src={urlForImage(data?.asset).url()}
                    alt="about__image"
                    className="aspect-square w-full object-cover object-center rounded-t-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Show a placeholder or loading state while data is being fetched
        <div>Loading...</div>
      )}
    </section>
  );
}
