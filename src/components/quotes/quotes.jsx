import ImageModel1 from "../../assets/Frame1.png";
import ImageModel2 from "../../assets/Frame2.png";
import sciencebasedlogo from "../../assets/science_based_logo.png";
import ecovadis from "../../assets/ecovadis.png";
import panda from "../../assets/panda.png";
import standard from "../../assets/standard.png";
import unitednations from "../../assets/united_nations.png";

export default function Quotes() {
  return (
    <div className="bg-[#f5f2ec] py-16 px-6 lg:px-20">
      <div className="mx-auto flex gap-16 items-center max-h-[730px]">
        <div className="w-2/3 flex flex-col gap-8 pt-8 px-8">
          <p
            className="text-2xl md:text-3xl indent-[60px] text-[#3F4234E5]"
            style={{ fontFamily: "Begum W03 Light", letterSpacing: "-4%", lineHeight: "40px" }}
          >
            “If you believe, as I do, that style is eternal, then you’ll go your
            own way in life, be original, have fun and not follow others. I
            think these are all quantities that people who wear Osprey London
            would recognise in themselves”
          </p>
          <div className="flex flex-wrap gap-x-16 items-center w-full">
            <img
              src={sciencebasedlogo}
              alt="Science Based Targets"
              className="h-10 object-contain"
            />
            <img
              src={standard}
              alt="Future Net Zero Standard"
              className="h-10 object-contain"
            />
            <img src={panda} alt="WWF Logo" className="h-10 object-contain" />
            <img
              src={unitednations}
              alt="UN Global Compact"
              className="h-10 object-contain"
            />
            <img
              src={ecovadis}
              alt="EcoVadis"
              className="h-10 object-contain"
            />
          </div>
        </div>

        <div className="relative">
          <img
            src={ImageModel1}
            alt="Fashion model"
            className="relative w-52 z-10 shadow-lg rounded mb-8"
          />
          <img
            src={ImageModel2}
            alt="Design sketches"
            className=" absolute top-[40%] left-[70%] w-48 z-10 shadow-md rounded"
          />
        </div>
      </div>
    </div>
  );
}
