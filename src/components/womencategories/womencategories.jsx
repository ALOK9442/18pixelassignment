import sliderImage1 from "../../assets/women_category_caraousel_image1.png";
import sliderImage2 from "../../assets/women_category_caraousel_image2.png";
import sliderImage3 from "../../assets/women_category_caraousel_image3.png";
import sliderImage4 from "../../assets/women_category_caraousel_image4.png";
import sliderImage5 from "../../assets/women_category_caraousel_image5.png";
import sliderImage6 from "../../assets/women_category_caraousel_image6.png";
import minibagIcon from "../../assets/leather_bag.png";
import Button from "../button/button";
import Slider from "../slider/slider";

export default function WomenCategory() {
  const images = [
    { src: sliderImage1, name: "Mosaic Nano", alt: "Cherry Brown Purse" },
    { src: sliderImage2, name: "Mosaic Nano", alt: "Black Leather Purse" },
    { src: sliderImage3, name: "Mosaic Nano", alt: "Brown Purse" },
    { src: sliderImage4, name: "Mosaic Nano", alt: "Blue Purse" },
    { src: sliderImage5, name: "Mosaic Nano", alt: "Cherry Purse" },
    { src: sliderImage6, name: "Mosaic Nano", alt: "White Brown Purse" },
  ];

  return (
    <div className="bg-[#E9E5E0] p-14">
      <div className="flex flex-col w-fit mb-8 ">
        <header
          className="text-[#3F4234E5] text-3xl "
          style={{
            fontFamily: "Begum W03 Medium",
            letterSpacing: "-8%",
            lineHeight: "40px",
          }}
        >
          Categories in Women
        </header>
        <div className="w-fit">
          <Button
            text={"DISCOVER MORE"}
            className="text-[#3F4234E5]"
            color="#231F20"
          />
        </div>
      </div>

      <div
        className="flex overflow-x-auto gap-0.5 w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex flex-col flex-shrink-0 w-80">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />

            <p
              className="text-xs mt-4"
              style={{
                fontFamily: "Centra No2 Light",
                letterSpacing: "-4%",
              }}
            >
              {image.name}
            </p>

            <div className="mt-6">
              <img
                src={minibagIcon}
                alt="Minibag Icon"
                className="w-10 h-16"
              />
            </div>
          </div>
        ))}
      </div>

      <Slider />
    </div>
  );
}
