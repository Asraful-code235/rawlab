import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className=" flex  overflow-hidden relative pt-[3.5vw] pb-[8vw] items-center justify-between flex-col text-center ">
      <div className=" text-center flex flex-col ">
        <div className=" block">
          <div className="absolute top-[12%] bottom-auto left-auto  block">
            <span className="text-[1vw] will-change-transform transform-gpu font-normal right-0 float-right -mr-24">
              46.0396&deg;N, 14.05275&deg;W
            </span>
            <img
              src="https://uploads-ssl.webflow.com/64144000a24d13596a775e66/644cf02084764ef0d9fe64e9_home-1.webp"
              loading="eager"
              data-w-id="94812366-95aa-997f-2c94-a6da834b99d3"
              alt=""
              class="img1 z-40 w-[17vw] absolute top-[73%] bottom-auto left-[-28%] right-auto"
            />
            <h1 className="z-20 relative text-[10vw] font-normal leading-[1.04] tracking-[-0.025em]">
              Building
            </h1>
          </div>
        </div>
        <div className="block ">
          <div className="mt-[20%] inline-block relative left-[30%]">
            <h1 className="z-20 relative text-[10vw] font-normal leading-[1.04] tracking-[-0.025em]">
              experiences
            </h1>
          </div>
        </div>
        <div className="block">
          <div className="inline-block relative left-[-30%]">
            <h1 className="z-20 relative text-[10vw] font-normal leading-[1.04] tracking-[-0.025em]">
              worldwide.
            </h1>
            <img
              src="https://uploads-ssl.webflow.com/64144000a24d13596a775e66/644cf02089b045f44775f1ec_home-2.webp"
              loading="eager"
              data-w-id="3d8cec3b-ac82-638a-a498-dcd2a7b9e531"
              alt=""
              class="img2 absolute top-[-30%] left-[96.5%] right-auto w-[21vw] bottom-auto max-w-full inline-block "
            />
            <div className="absolute top-auto bottom-[-25%] left-[-6%] right-auto">
              <div
                className="opacity-100 font-normal text-[1vw] text-gray-600"
                data-w-id="be6c3b9b-efcc-52be-09ae-5d5336343728"
              >
                Nice to meet you
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
