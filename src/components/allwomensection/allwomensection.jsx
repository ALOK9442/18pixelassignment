import WomenImage from "../../assets/girl_walking_with_purse.png";
import ProductCaraousel from "../productcaraousel/productcaraousel";
import Slider from "../slider/slider";

export default function AllWomenSection() {
  return (
    <div className="flex min-h-screen bg-[#f5f2ec] p-14 justify-center">
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={WomenImage}
          alt="Woman Holding Purse"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start px-8">
        <div>
          <header
            className="text-[#3F4234E5] text-3xl"
            style={{
              fontFamily: "Begum W03 Medium",
              letterSpacing: "-8%",
              lineHeight: "40px",
            }}
          >
            ALL WOMEN
          </header>
          <section
            className="text-sm"
            style={{
              fontFamily: "Centra No2 Light",
              letterSpacing: "-4%",
              lineHeight: "40px",
            }}
          >
            Introducing the Townhouse Atelier
          </section>
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
        <ProductCaraousel />
        <Slider />
      </div>
    </div>
  );
}
