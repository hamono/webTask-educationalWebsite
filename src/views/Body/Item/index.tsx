import React from "react";
import * as style from "./style.scss";
import Upcontent from "./Upcontent";

export default function Item(props: { tag: string }) {
  return <div className={style.box}>
    <div className={style.titel}>
      <h1>{props.tag}</h1><br/>
      <hr className={style.hr}/>
    </div>
    <div className={style.one}>
      <Upcontent />
      <Upcontent />
      <Upcontent />
      <Upcontent />
    </div>
    <div className={style.one}>
      <Upcontent />
      <Upcontent />
      <Upcontent />
      <Upcontent />
    </div>
  </div>
}