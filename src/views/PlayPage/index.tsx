import React from "react";
import * as style from './style.scss';
// import { Video } from 'video-player'
import Header from "../Header";

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
    </div>
      <video src='http://www.hamomo.top/videos/小女孩.mp4'  />
  </div>
}