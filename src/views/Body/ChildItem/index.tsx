import React from "react";
import * as style from "./style.scss";
import { Link } from "react-router-dom";

export default function ChildItem(props: {
  item: string,
  list: string[],
  tag: string
}) {
  return <div className={style.box}>
    <h1>{props.item}</h1>
    <div className={style.main}>
      <div className={style.img}>
        <Link to=""><div className={style.button}>进入直播</div></Link>
        <div className={style.logo}>{props.tag}</div>
      </div>
      <ul className={style.ul}>
        {props.list.map((v: {}, i: number) =>
          <Link to="" key={i}>
            <li className={style.li}>
              <div className={style.div} />{v}
            </li>
          </Link>)}
      </ul>
    </div>
  </div>
}