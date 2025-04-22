import personIcon from "../../assets/icons/person.png";
import favorite from "../../assets/icons/favorite.png";
import shoppingCart from "../../assets/icons/local_mall.png";
import searchIcon from "../../assets/icons/manage_search.png";
import logo from "../../assets/dbramantelogo.png";

export default function Navbar() {
  const menuBarItem = [
    "SALE",
    "NEW",
    "BAGS",
    "ACCESSORIES",
    "CASHMERE",
    "GIFTS",
  ];

  console.log(personIcon, favorite, shoppingCart, logo);

  return (
    <div className="w-[100dvw] flex h-fit justify-between px-6 py-2 bg-transparent backdrop-blur-[10px] text-white">
      <div className="w-fit flex gap-6 items-center">
        {menuBarItem.map((item, index) => (
          <div
            key={index}
            className="text-sm font-normal"
            style={{
              letterSpacing: "14%",
            }}
          >
            {item}
          </div>
        ))}
        <img src={searchIcon} alt="search" className="" />
      </div>
      <div className="flex flex-col w-fit items-center gap-0 m-0 p-0">
        <img
          src={logo}
          alt="logo"
          className="w-40 h-6"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <p
          style={{
            fontFamily: "Work Sans, sans-serif",
            letterSpacing: "16%",
            fontStyle: "normal",
            fontSize: "10px",
          }}
        >
          DENMARK
        </p>
      </div>
      <div className="flex gap-6 items-center">
        <button
          className="text-sm font-normal"
          style={{
            letterSpacing: "14%",
          }}
        >
          ABOUT US
        </button>
        <button
          className="text-sm font-normal"
          style={{
            letterSpacing: "14%",
          }}
        >
          IN/₹
        </button>
        <img src={personIcon} alt="person" className="h-6 w-6" />
        <img src={favorite} alt="favorite" className="h-6 w-6" />
        <img src={shoppingCart} alt="shoppingCart" className="h-6 w-6" />
      </div>
    </div>
  );
}
