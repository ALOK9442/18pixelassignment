import HeroWorker from "../../assets/worker_working.png";
import Shop from "../../assets/bag_shop.png";
import Button from "../button/button";

export default function CraftmanShipShowcase() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex"
      style={{
        backgroundImage: `url(${HeroWorker})`,
      }}
    >
      <div className="w-1/2 h-full flex flex-col justify-end text-white p-4">
        <div className="max-w-md mb-2">
          <h1
            className="text-3xl font-medium mb-4"
            style={{
              fontFamily: "Begum W03 Medium",
              letterSpacing: "-8%",
              lineHeight: "40px",
            }}
          >
            Handmade in Denmark
          </h1>
          <p
            className="text-xs text-gray-300"
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

      <div className="absolute bottom-8 right-8 text-white text-xs text-right">
        <Button text={"Discover More"} className="text-white" />
        <img
          src={Shop}
          alt="Store Interior"
          className="w-auto h-44 rounded shadow-lg mt-2"
        />
      </div>
    </div>
  );
}
