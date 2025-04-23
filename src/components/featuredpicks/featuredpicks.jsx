import Featuredpick1 from "../../assets/person_with_bag.jpg";
import Featuredpick2 from "../../assets/lady_with_bag.jpg";
import Button from "../button/button";

export default function FeaturedPicks() {
  return (
    <div className="flex overflow-hidden py-14">
      <div className="w-1/2 h-full relative">
        <img
          src={Featuredpick1}
          alt="Trending Backpacks"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <h2
            className="text-4xl"
            style={{
              fontFamily: "Begum W03 Light",
              letterSpacing: "-8%",
              lineHeight: "48px",
            }}
          >
            Trending Backpacks
          </h2>
          <p
            className="max-w-xs text-xs mt-2"
            style={{
              fontFamily: "Centra No2 Light",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Etiam magna viverra
            ultricies pellentesque diam vestibulum neque faucibus. Suspendisse
            consequat tincidunt amet condimentum sed leo sollicitudin vitae eu.
            Rutrum neque morbi eu ullamcorper lorem.
          </p>
          <Button text={"Discover More"} className="text-white" />
        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <img
          src={Featuredpick2}
          alt="Handbags"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <h2
            className="text-4xl"
            style={{
              fontFamily: "Begum W03 Light",
              letterSpacing: "-8%",
              lineHeight: "48px",
              fontWeight: 500,
            }}
          >
            Handbags
          </h2>
          <p
            className="max-w-xs text-xs mt-2"
            style={{
              fontFamily: "Centra No2 Light",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Etiam magna viverra
            ultricies pellentesque diam vestibulum neque faucibus. Suspendisse
            consequat tincidunt amet condimentum sed leo sollicitudin vitae eu.
            Rutrum neque morbi eu ullamcorper lorem.
          </p>
          <Button text={"Discover More"} className="text-white" />
        </div>
      </div>
    </div>
  );
}
