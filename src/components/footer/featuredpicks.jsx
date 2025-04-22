import Featuredpick1 from "../../assets/person_with_bag.jpg";
import Featuredpick2 from "../../assets/lady_with_bag.jpg";

export default function FeaturedPicks() {
  return (
    <div className="flex overflow-hidden">
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
          <p className="max-w-xs text-xs mt-2">
            Lorem ipsum dolor sit amet consectetur. Etiam magna viverra
            ultricies pellentesque diam vestibulum neque faucibus. Suspendisse
            consequat tincidunt amet condimentum sed leo sollicitudin vitae eu.
            Rutrum neque morbi eu ullamcorper lorem.
          </p>
          <button className="group relative mt-4 flex items-center gap-2 text-white text-sm font-medium">
            Discover More
            <span className="block w-6 h-px bg-white transition-all duration-500 group-hover:w-0 origin-right"></span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
          </button>
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
          <p className="max-w-xs text-xs mt-2">
            Lorem ipsum dolor sit amet consectetur. Etiam magna viverra
            ultricies pellentesque diam vestibulum neque faucibus. Suspendisse
            consequat tincidunt amet condimentum sed leo sollicitudin vitae eu.
            Rutrum neque morbi eu ullamcorper lorem.
          </p>
          <button className="group relative mt-4 flex items-center gap-2 text-white text-sm font-medium">
            Discover More
            <span className="block w-6 h-px bg-white transition-all duration-500 group-hover:w-0 origin-right"></span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
