import React from "react";
import * as style from "./style.scss";
import Compent from "./Compent";

export default function Center() {
  return <div className={style.box}>
    <div className={style.top}>传送门</div>
    <div className={style.line}>
      <Compent tag="帮助中心" />
      <Compent tag="倾诉申诉" />
      <Compent tag="老师介绍" />
    </div>
    <div className={style.line}>
      <Compent tag="高级弹幕" />
      <Compent tag="活动中心" />
      <Compent tag="导航" />
    </div>
    <div className={style.line}>
      <Compent tag="活动专题页" />
      <Compent tag="用户反馈论坛" />
      <Compent tag="联系我们" />
    </div>

  </div>
}