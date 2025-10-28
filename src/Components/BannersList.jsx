import React from "react";
import Button from "../UI/Button";
import IPhoneImage from "../assets/Images/Iphone-Image.png";
import AirpodsImage from "../assets/Images/Apple-Airpods-Max.png";
import Banner from "../UI/Banner";
export default function BannersList() {
  return (
    <section className="flex flex-wrap">
      <Banner
        style={"text-white bg-[#211c24]"}
        isHead
        title={"IPhone 14 Pro"}
        specialTitle={"Pro.Beyond."}
        description={"Created to change everything to better. For everyone"}
        imageLink={IPhoneImage}
        imageAlt={"Iphone 14 Pro Image"}
      ></Banner>

      <Banner
        style={"text-black"}
        title={"Apple AirPods Max"}
        description={"Computational audio. Listen, it's powerful"}
        imageLink={AirpodsImage}
        imageAlt={"AirpodsImage"}
      ></Banner>
      <div className="w-full h-60">qwfqwf</div>
      <div className="w-full h-60">qwfqwf</div>
      <div className="w-full h-60">qwfqwf</div>
    </section>
  );
}
