import { Button } from "../ui/button";

export default function WhoAreWe() {
  return (
    <section className="max-w-7xl mx-auto font-normal text-gray-900 mt-48 min-h-screen">
      <h1 className="text-2xl md:text-4xl text-center">Who are we?</h1>
      <div className="max-w-[58vw] mx-auto relative">
        <h3 className="text-[4vw] text-center z-40">
          A creative collective building brands and products, for those seeking
          art and innovation. We are making people and brands stand out online.
        </h3>
        <div className="w-full flex items-center justify-center mt-8">
          <Button variant="outline" className="w-fit text-base">
            Get to know us better
          </Button>
        </div>
        <img
          src="https://uploads-ssl.webflow.com/64144000a24d13596a775e66/644d2da9fb83a789fc7562d9_who-1.webp"
          alt=""
          class="img3 z-[-10] w-[20vw] absolute top-[-33%] bottom-auto left-auto right-[-8%] max-w-full inline-block"
        />
        <img
          src="https://uploads-ssl.webflow.com/64144000a24d13596a775e66/644d2da9a527d51a500701eb_who-2.webp"
          alt=""
          class="absolute z-[-10] w-[20vw] top-[20%] bottom-auto left-[-23%] right-auto max-w-full inline-block"
        />
        <img
          src="https://uploads-ssl.webflow.com/64144000a24d13596a775e66/644d2da9a0c4b1751e1cec3a_who-3.webp"
          alt=""
          class="z-[-10] absolute w-[18vw] top-auto bottom-[-26%] left-auto right-[-5%] max-w-full inline-block"
        />
      </div>
    </section>
  );
}
