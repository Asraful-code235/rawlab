"use client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default function HowWeDoIt() {
  const {
    data: itemData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["/howwedoit"],
    queryFn: async () => {
      const query = `
        *[_type == "post"] | order(publishedAt desc) {
          title,
          slug,
          mainImage {
            alt,
            asset
          },
          excerpt,
          publishedAt,
          author->{_ref, name},
        }
      `;
      const data = await client.fetch(query);
      return data;
    },
  });

  // console.log(itemData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="max-w-screen-2xl mx-auto text-gray-900 min-h-screen mt-14 px-4 ">
      <h1 className="text-4xl text-center font-semibold mb-6">How We do it?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemData?.slice(0, 3).map((item, key) => (
          <div key={key} className="flex flex-col gap-2">
            <div className="bg-gray-300 rounded-md relative aspect-square hover:bg-opacity-75 hover:transition-all hover:duration-500">
              <div className="flex items-center gap-2 absolute top-3 left-3">
                <Button>Branding</Button>
                <Button>Web design</Button>
              </div>
              <div className="h-[70vh] cursor-pointer">
                <img
                  src={urlForImage(item?.mainImage?.asset)}
                  className="w-full h-full rounded-md aspect-square object-center object-cover"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-[3vw] line-clamp-1 whitespace-nowrap font-medium">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <Button variant="outline" className="w-fit">
          View all Projects
        </Button>
      </div>
    </section>
  );
}
