import { Button } from "../ui/button";

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}
      <section className="bg-white max-w-7xl mx-auto min-h-screen mt-[-40rem] sm:mt-[-20rem] lg:mt-20">
        <h1 className="text-gray-900 text-2xl font-semibold text-center">
          Our work has been seen in
        </h1>
        <div className="container flex justify-center items-center mt-10 mb-16 sm:mb-0">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="flex relative items-center sm:pt-[6vw] flex-col justify-between mb-8 lg:mb-0">
          <div className="flex items-center ">
            <div class=" text-[3vw] sm:text-[10vw] font-normal">Let&apos;s</div>
            <img
              src="https://uploads-ssl.webflow.com/64144000a24d13596a775e66/644d0f831d573694e8589d93_img-say-hi.png"
              loading="lazy"
              width="240"
              height="160"
              alt=""
              class=" w-[6rem] sm:w-[15rem] object-cover max-w-full inline-block"
            />
            <div class=" text-[3vw] sm:text-[10vw] font-normal">work</div>
          </div>
          <div class="text-[3vw] sm:text-[10vw] font-normal">together</div>
          <div class="absolute  top-[20%] bottom-auto right-[90%]">Say hi</div>
          <div class="absolute text-[2vw] top-[70%] sm:top-[50%] bottom-auto right-[10%] sm:right-[0vmax]">
            Come by for a coffee
          </div>
          <div class="absolute bottom-[-10%] left-[5%]">Drop us a line</div>
          <div className="w-full flex items-center justify-center mt-8">
            <Button variant="outline" className="w-fit">
              Get in touch
            </Button>
          </div>
        </section>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-10" />
      </a>
    </>
  );
};
