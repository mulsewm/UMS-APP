import Image from "next/image";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightkblue">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              <span className="text-black">Harmony in Learning</span>
              <br />
              <span className="text-kellygreen">
                Uniting Curiosity and Knowledge
              </span>
            </h1>
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </h3>

            <div className="flex items-center justify-between pt-10 lg:pt-4">
              <div className="flex gap-2">
                <button className="text-white px-4 py-2 rounded bg-kellygreen">
                  Explore
                </button>
                <button className="text-black px-4 py-2 rounded">
                  Watch Video
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-span-6 flex justify-center"
            style={{ borderRadius: "10px", border: "1px dotted gray" }}
          >
            <Image
              src="/assets/banner/bannerHeroImage.png"
              alt="Hero Image"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
