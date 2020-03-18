import React from "react";
import * as style from "./style.scss";
import { Carousel } from "antd";

export default function Up() {
  return <div className={style.box}>
    <Carousel autoplay dotPosition="bottom" dots={true} className={style.main}>
      <div className={style.item}>
        <h3>这里会有一些东西</h3>
      </div>
      <div className={style.item}>
        <h3>这里会有一些东西</h3>
      </div>
      <div className={style.item}>
        <h3>这里会有一些东西</h3>
      </div>
      <div className={style.item}>
        <h3>这里会有一些东西</h3>
      </div>
    </Carousel>
  </div>
}