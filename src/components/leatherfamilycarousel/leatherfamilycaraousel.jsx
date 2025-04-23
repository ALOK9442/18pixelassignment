import ProductCaraousel from "../productcaraousel/productcaraousel";
import Slider from "../slider/slider";

export default function LeatherFamilyCarousel() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f2ec] px-14">
      <div>
        <header
          className="text-3xl font-bold mb-4 text-[#3F4234E5]"
          style={{
            fontFamily: "Begum W03 Medium",
            letterSpacing: "-8%",
            lineHeight: "40px",
          }}
        >
          Leather Family
        </header>
        <div
          style={{
            fontFamily: "Centra No2 Light",
            letterSpacing: "-4%",
            lineHeight: "40px",
          }}
          className="text-xs flex gap-8 items-center mb-4"
        >
          <header className="text-[#231F20]">MID SEASON REDUCTIONS</header>
          <header className="text-[#999990]">BESTSELLERS</header>
          <header className="text-[#999990]">NEW ARRIVALS</header>
        </div>
      </div>
      <ProductCaraousel />
      <Slider />
    </div>
  );
}
