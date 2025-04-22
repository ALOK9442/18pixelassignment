import "./App.css";
import Navbar from "./components/navbar/navbar";
import leatherWorker from "./assets/worker_working_on_leather.jpg";
import Quotes from "./components/quotes/quotes";
import FeaturedPicks from "./components/footer/featuredpicks";

function App() {

  return (
    <div className="bg-[#efece7]">
      <div
        className="h-screen w-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${leatherWorker})`,
        }}
      >
        <Navbar />
        <div className="absolute bottom-10 left-10 text-white ">
          <h2
            className="text-xl md:text-4xl font-medium"
            style={{
              fontFamily: "Work Sans, sans-serif",
              letterSpacing: "16%",
            }}
          >
            WE BELIEVE IN SUSTAINABILITY
          </h2>
          <p
            className="mt-4 text-sm font-normal max-w-xl"
            style={{
              letterSpacing: "-2%",
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              lineHeight: "100%",
              fontStyle: "normal",
            }}
          >
            Crafted from responsibly sourced leather, our products combine
            timeless quality with a deep respect for the planet. We’re committed
            to eco-conscious practices every step of the way.
          </p>
        </div>
      </div>
      <Quotes />
      <FeaturedPicks />
    </div>
  );
}

export default App;
