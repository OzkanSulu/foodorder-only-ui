import Image from "next/image";
import MenuPage from "./menu/page";
import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import Offers from "@/components/Offers";




export default function Home() {
  return (
    <div className="">
      <Slider />
      <Featured />
      <Offers />
    </div>
  );
}
