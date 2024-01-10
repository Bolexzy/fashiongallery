import React from "react";
import styles from "./Logos.module.css";
const Logos = () => {
  return (
    <div className="w-screen md:px-36 lg:px-72 xl:px-[31rem] items-center justify-center flex row h-[62px] py-[1.125rem] bg-white mb-10">
      <div className="w-full">
        <div className={`${styles.logos_slider}`}>
          <div className={`${styles.logos_slider_container}`}>
            <img src="/images/adidas.svg" />
            <img src="/images/chanel.svg" />
            <img src="/images/gucci.svg" />
            <img src="/images/puma.svg" />
            <img src="/images/vuitton.svg" />
          </div>

          <div className={`${styles.logos_slider_container} ml-[3rem]`}>
            <img src="/images/adidas.svg" />
            <img src="/images/chanel.svg" />
            <img src="/images/gucci.svg" />
            <img src="/images/puma.svg" />
            <img src="/images/vuitton.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
