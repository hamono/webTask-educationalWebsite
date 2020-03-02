import React from "react";
import * as style from "./style.scss";
import img from "./img.png";
import { Popover } from 'antd';

export default function Page() {
  const content = (
    <div className={style.hover}>
      <div className={style.item}>小学生编程</div>
      <div className={style.item}>中学生进阶编程</div>
      <div className={style.item}>大学生编程·入门篇</div>
      <div className={style.item}>大学生编程·进阶篇</div>
      <div className={style.item}>大学生编程·企业篇</div>
      <div className={style.item}>软件架构之路</div>
      <div className={style.item}>全栈始于脚下</div>
      <div className={style.item}>产品经理是怎样练成的</div>
    </div>
  )
  return <div className={style.box}>
    <Popover content={content}>
      <img src={img} alt="这是图片" width="40px" height="40px" />
      <span className={style.span}>分类</span>
    </Popover>

  </div>
}