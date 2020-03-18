import React from "react";
import * as style from "./style.scss";
import { Link } from "react-router-dom";
import img from "./img1.png";

export default function Upcontent() {
  return <div className={style.box}>
    <Link to="" ><img src={img} width="250px" height="150px" /></Link>
    <div className={style.dir}>
      <Link to="" ><h3 className={style.h3}>大神老师，在线指导</h3></Link>
      <div className={style.line1}>
        <span className={style.speed}>进度：1/40</span>
        <div className={style.edu}>哈默默教育</div>
        <span className={style.tru}>认证</span>
      </div>
      <div className={style.line1}>
        <span className={style.free}>免费</span>
        <span className={style.num}>9999人报名</span>
      </div>
    </div>
  </div>
}