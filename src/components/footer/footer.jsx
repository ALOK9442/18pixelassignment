import NatureBackground from "../../assets/nature.jpg";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import twitterIcon from "../../assets/icons/twitter.png";
import pinterestIcon from "../../assets/icons/pinterest.png";

export default function Footer() {
  const Options = [
    "Contact Us",
    "One to one appointment",
    "Order Tracking",
    "Delivery",
    "Returns",
    "FAQ",
    "Product Care",
  ];
  const onlineshoppingOptions = [...Options, "Authenticity"];
  const ExploreOptions = [
    "Contact Us",
    "One to one appointment",
    "Order Tracking",
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${NatureBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="px-4 flex h-screen pb-14 text-white"
    >
      <div className="min-h-2/5 mt-auto bg-[#2C3318] w-full px-4 pt-8 pb-4 gap-8 flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p
              className="text-2xl font-medium"
              style={{
                fontFamily: "Begum W03 Medium",
                letterSpacing: "-8%",
                lineHeight: "30px",
              }}
            >
              Our Online Shopping
            </p>
            <div className="flex flex-col gap-2 mt-2 w-full">
              {onlineshoppingOptions.map((option, index) => (
                <button
                  key={index}
                  className="text-xs text-left"
                  style={{
                    fontFamily: "Centra No2 Light",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-2xl font-medium"
              style={{
                fontFamily: "Begum W03 Medium",
                letterSpacing: "-8%",
                lineHeight: "30px",
              }}
            >
              dbramante1928
            </p>
            <div className="flex flex-col gap-2 mt-2">
              {Options.map((option, index) => (
                <button
                  key={index}
                  className="text-xs text-left"
                  style={{
                    fontFamily: "Centra No2 Light",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-2xl font-medium"
              style={{
                fontFamily: "Begum W03 Medium",
                letterSpacing: "-8%",
                lineHeight: "30px",
              }}
            >
              Explore
            </p>
            <div className="flex flex-col gap-2 mt-2">
              {ExploreOptions.map((option, index) => (
                <button
                  key={index}
                  className="text-xs text-left"
                  style={{
                    fontFamily: "Centra No2 Light",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div>
              <p
                className="text-2xl font-medium"
                style={{
                  fontFamily: "Begum W03 Medium",
                  letterSpacing: "-8%",
                  lineHeight: "30px",
                }}
              >
                Newsletter
              </p>
              <p
                className=" text-xs max-w-md mt-1"
                style={{
                  fontFamily: "Centra No2 Light",
                }}
              >
                Subscribe to our newsletter & enjoy an exclusive 10% off your
                first full-price order.
              </p>
              <div className="flex w-[445px] h-9 border-b border-white items-center justify-between px-0 gap-3 mt-2">
                <input
                  style={{
                    fontFamily: "Centra No2 Light",
                  }}
                  type="email"
                  placeholder="ENTER YOUR EMAIL HERE*"
                  className="text-white placeholder-white text-[12px] font-light uppercase w-[147px] h-4 bg-transparent outline-none"
                />
                <button
                  className="text-white text-[12px] font-light uppercase w-[60px] h-4"
                  style={{
                    fontFamily: "Centra No2 Light",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <img src={facebookIcon} alt="Facebook" className=" " />
              <img src={instagramIcon} alt="Instagram" className=" " />
              <img src={twitterIcon} alt="Twitter" className=" " />
              <img src={pinterestIcon} alt="Pinterest" className=" " />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between text-xs text-[#D9D9D9]">
          <div
            style={{
              fontFamily: "Centra No2 Light",
            }}
          >
            Copyright @{new Date().getFullYear()} DBRAMANTE1928. All Rights
            Reserved.
          </div>
          <div
            style={{
              fontFamily: "Centra No2 Light",
            }}
          >
            Copyright @{new Date().getFullYear()} DBRAMANTE1928. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
