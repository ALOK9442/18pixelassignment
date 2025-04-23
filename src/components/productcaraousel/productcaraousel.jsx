import blackbackpack from "../../assets/black_bag.png";
import brownbackpack from "../../assets/brown_bag.png";
import brownpurse from "../../assets/brown_purse.png";
import handbag from "../../assets/leather_handbag.png";
import leatherpurse from "../../assets/black_leather_purse.png";
import modelWithBagImage from "../../assets/modal_walking_with_bag.png";
import miniBagIcon from "../../assets/leather_bag.png";
import hearticon from "../../assets/icons/favorite.png";

export default function ProductCaraousel() {
  const leatherFamilyItems = [
    {
      image: handbag,
      name: "Mosaic Nano",
      originalPrice: "₹44,600",
      discountedPrice: "₹35,700",
    },
    {
      image: brownpurse,
      name: "Mosaic Nano",
      originalPrice: "₹44,600",
      discountedPrice: "₹35,700",
    },
    {
      image: brownbackpack,
      name: "Mosaic Nano",
      originalPrice: "₹44,600",
      discountedPrice: "₹35,700",
    },
    {
      image: blackbackpack,
      name: "Mosaic Nano",
      originalPrice: "₹44,600",
      discountedPrice: "₹35,700",
    },
    {
      image: leatherpurse,
      name: "Mosaic Nano",
      originalPrice: "₹44,600",
      discountedPrice: "₹35,700",
    },
  ];
  return (
    <div
      className="flex overflow-x-auto w-full gap-0.5"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {leatherFamilyItems.map((item, index) => (
        <div key={index} className="flex flex-col group">
          <div className="relative w-80 flex-shrink-0 bg-[#E9E5E0] overflow-hidden p-8">
            <img src={item.image} alt={item.name} className=" object-cover" />

            <img
              src={modelWithBagImage}
              alt="Model With Bag"
              className="absolute inset-0 w-full object-cover opacity-0 group-hover:opacity-100 "
            />
            <img
              src={hearticon}
              alt="Favorite"
              className="absolute top-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity filter invert"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center px-4">
              <h2
                className="text-xs"
                style={{
                  fontFamily: "Centra No2 Light",
                  letterSpacing: "-4%",
                }}
              >
                {item.name}
              </h2>
              <div
                className="flex justify-center items-center gap-1 text-xs"
                style={{
                  fontFamily: "Centra No2 Medium",
                  letterSpacing: "-4%",
                }}
              >
                <span className="line-through text-gray-500">
                  {item.originalPrice}
                </span>
                <span className="text-red-600 font-medium">
                  {item.discountedPrice}
                </span>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 flex justify-between items-center">
              <button
                className={`group relative mt-4 flex items-center gap-1 text-sm font-medium text-[#231F20]`}
                style={{
                  fontFamily: "Centra No2 Light",
                  letterSpacing: "-4%",
                }}
              >
                ADD TO BAG
                <span className="block w-8 h-px bg-[#231F20] origin-right"></span>
              </button>
              <div className="flex items-center gap-1 border-none bg-[#ffff] rounded-sm p-1">
                <div className="flex gap-1 border-none bg-[#E7E4DF] rounded-sm p-1">
                  <img src={miniBagIcon} alt="Mini Bag" className="w-8 h-10" />
                  <img src={miniBagIcon} alt="Mini Bag" className="w-8 h-10" />
                  <img src={miniBagIcon} alt="Mini Bag" className="w-8 h-10" />
                </div>
                <button className=" text-[#73756B] text-xl font-bold w-6 h-6 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
