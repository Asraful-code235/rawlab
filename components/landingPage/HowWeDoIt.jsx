import { Button } from "../ui/button";

export default function HowWeDoIt() {
  return (
    <section className="max-w-screen-2xl mx-auto text-gray-900 min-h-screen mt-14 ">
      <h1 className="text-4xl text-center font-semibold mb-6">How We do it?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["Late Night Tales", "The Edist", "Rise"].map((item, key) => (
          <div key={key} className="flex flex-col gap-2">
            <div className="bg-gray-300 rounded-md p-4 relative aspect-square hover:bg-opacity-75 hover:transition-all hover:duration-500">
              <div className="flex items-center gap-2 absolute top-3 left-3">
                <Button>Branding</Button>
                <Button>Web design</Button>
              </div>
              <div className="h-[70vh] cursor-pointer"></div>
            </div>
            <h2 className="text-[3vw] line-clamp-2 font-medium">{item}</h2>
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
