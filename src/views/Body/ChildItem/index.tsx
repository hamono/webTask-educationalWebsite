import React from "react";
import * as style from "./style.scss";

export default function ChildItem(props: { item: string, list: string[] ,tag:boolean}) {
  return <div className={style.box}>
    <h1>{props.item}</h1>
    <div className={style.main}>
      <div className={style.img}></div>
      <ul className={style.ul}>
        {props.list.map((v: {}, i: number) => <li key={i} className={style.li}><div className={style.div}/>{v}</li>)}
      </ul>
    </div>
  </div>
}