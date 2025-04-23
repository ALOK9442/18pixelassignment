import scienceBasedBlogImage from "../../assets/science_based.png";
import summitReportImage from "../../assets/summit.png";
import summitBuildingImage from "../../assets/summit_building.png";
import factCheckImage from "../../assets/facts_check.png";
import Slider from "../slider/slider";

export default function Blogs() {
  const blogItems = [
    {
      image: factCheckImage,
      title: "Facts, not fiction",
      date: "MARCH 24, 2025",
    },
    {
      image: summitBuildingImage,
      title: "Facts, not fiction",
      date: "MARCH 24, 2025",
    },
    {
      image: summitReportImage,
      title: "Facts, not fiction",
      date: "MARCH 24, 2025",
    },
    {
      image: scienceBasedBlogImage,
      title: "Facts, not fiction",
      date: "MARCH 24, 2025",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen px-4 py-14">
      <div>
        <header
          className="text-[#3F4234E5] text-3xl"
          style={{
            fontFamily: "Begum W03 Medium",
            letterSpacing: "-8%",
            lineHeight: "40px",
          }}
        >
          BLOGS
        </header>
        <div
          style={{
            fontFamily: "Centra No2 Light",
            letterSpacing: "-4%",
          }}
          className="flex gap-8 items-center mb-4 text-xs"
        >
          <header className="text-[#231F20]">MID SEASON REDUCTIONS</header>
          <header className="text-[#999990]">BESTSELLERS</header>
          <header className="text-[#999990]">NEW ARRIVALS</header>
        </div>
      </div>
      <div
        className="flex overflow-x-auto gap-10 scrollbar-hide w-full py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {blogItems.map((item, index) => (
          <div key={index} className="flex flex-col flex-shrink-0 w-92">
            <div className="w-full h-60 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="text-xs mt-4"
              style={{
                fontFamily: "Centra No2 Light",
                letterSpacing: "-4%",
              }}
            >
              {item.title}
            </p>
            <p
              className="text-xs mt-2"
              style={{
                fontFamily: "Centra No2 Light",
                letterSpacing: "-4%",
              }}
            >
              {item.date}
            </p>
          </div>
        ))}
      </div>

      <Slider />
    </div>
  );
}
