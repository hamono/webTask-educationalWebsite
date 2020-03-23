import React from "react";
import * as style from "./style.scss";
import { Carousel } from "antd";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

export default function Up() {
  return <div className={style.box}>
    <Carousel autoplay dotPosition="bottom" dots={true} className={style.main}>
      <div className={style.item}>
        <img src={img1} width="100%" height="350px" />
      </div>
      <div className={style.item}>
        <img src={img2} width="100%" height="350px" />
      </div>
      <div className={style.item}>
        <img src={img3} width="100%" height="350px" />
      </div>
    </Carousel>
  </div>
}