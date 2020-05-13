import React from "react";
import * as style from "./style.scss";
import Home from "src/views/Header/Home";
import Page from "src/views/Header/Page";
import SearchInput from "src/views/Header/Search";

export default function Header(props:{tag:string;}){
  return <div className={style.box}>
    <div className={style.top}>
      <Home />
      <Page />
      <SearchInput />
    </div>
    <div className={style.tip}>
      <hr className={style.hr}/><span className={style.context}>{props.tag}</span><hr className={style.hr}/>
    </div>
  </div>
}