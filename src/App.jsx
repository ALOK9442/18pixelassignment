import "./App.css";
import Navbar from "./components/navbar/navbar";
import leatherWorker from "./assets/worker_working_on_leather.jpg";
import Quotes from "./components/quotes/quotes";
import FeaturedPicks from "./components/featuredpicks/featuredpicks";
import CraftmanShipShowcase from "./components/craftmanshipshowcase/craftmanshipshowcase";
import Footer from "./components/footer/footer";
import LeatherFamilyCarousel from "./components/leatherfamilycarousel/leatherfamilycaraousel";
import AllWomenSection from "./components/allwomensection/allwomensection";
import WomenCategory from "./components/womencategories/womencategories";
import Blogs from "./components/Blogs/blogs";

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
              fontFamily: "Centra No2 Medium",
              letterSpacing: "16%",
            }}
          >
            WE BELIEVE IN SUSTAINABILITY
          </h2>
          <p
            className="mt-4 text-sm font-normal max-w-xl"
            style={{
              letterSpacing: "-2%",
              fontFamily: "Centra No2 Light",
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
      <LeatherFamilyCarousel />
      <FeaturedPicks />
      <WomenCategory />
      <CraftmanShipShowcase />
      <AllWomenSection />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
