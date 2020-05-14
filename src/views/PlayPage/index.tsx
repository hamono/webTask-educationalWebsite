import React from "react";
import * as style from './style.scss';
import Header from "../Header";
import Video from "./Video";

export default function PlayPage(){
  return <div className={style.box}>
    <Header />
    <div className={style.title}>
      <h1 className={style.tip}>
        Hamomo
      </h1>
      <div className={style.dir}>
        技术 &gt; 分享
      </div>
      <div className={style.dir}>
        9999次播放 · 9999弹幕
      </div>
      <Video src='' size={1100} />
    </div>
  </div>
}