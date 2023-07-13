import Image from "next/image";
import { Button } from "../ui/button";

export default function WorkSection() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="flex items-center justify-center">
        <Button variant="outlined" className="text-center">
          View our Work
        </Button>
      </div>
      <div className="grid relative grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="md:sticky md:top-20 md:h-screen">
          <Image
            src={"/rock.png"}
            alt=""
            width={500}
            height={600}
            className="aspect-auto w-full bg-cover bg-center"
          />
        </div>
        <div className="text-gray-900 font-normal p-4">
          <h3 className="text-base md:text-xl text-center ">What We do?</h3>
          <div className="flex flex-col gap-16">
            <section className="flex flex-col gap-4">
              <h2 className="text-[9.5vw] font-semibold  text-center">
                Design
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  "Brand Design",
                  "Product design",
                  "Web design",
                  "Interior design",
                  "Set design",
                ].map((item, key) => (
                  <div
                    key={key}
                    className="px-4 py-1.5 bg-gray-900 rounded-md text-white text-sm w-fit"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-center">
                We design the entire thing. Just sit back, relax and get ready
                for lift-off. Full digital experiences, clear messaging, and
                plain common sense.
              </p>
              <div className="w-full flex items-center justify-center">
                <Button variant="outline" className="w-fit ">
                  let&apos;s design
                </Button>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-[9.5vw] font-semibold  text-center">Build</h2>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  "No-code automation's",
                  "E-commerce implementation",
                  "Web development",
                  "Web 3.0",
                  "Experimental & creative development",
                ].map((item, key) => (
                  <div
                    key={key}
                    className="px-4 py-1.5 bg-gray-900 rounded-md text-white text-sm w-fit"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-center">
                We bridge the gap between marketing and design. We disrupt
                common communication and create strong bonds with your
                customers.
              </p>
              <div className="w-full flex items-center justify-center">
                <Button variant="outline" className="w-fit ">
                  let&apos;s build
                </Button>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-[9.5vw] font-semibold  text-center">Grow</h2>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  "Performance marketing",
                  "Social media management",
                  "Influencer marketing",
                  "PR",
                  "Guerilla marketing",
                ].map((item, key) => (
                  <div
                    key={key}
                    className="px-4 py-1.5 bg-gray-900 rounded-md text-white text-sm w-fit"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-center">
                We use the latest tools and techniques in no-code to develop
                highly functional products on all devices. Your idea. Your
                business. Your future.
              </p>
              <div className="w-full flex items-center justify-center">
                <Button variant="outline" className="w-fit ">
                  let&apos;s grow
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
