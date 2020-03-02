import React from "react";
import * as style from "./style.scss";
import Home from "./Home";
import Page from "./Page";
import SearchInput from "./Search";
import SignLink from "./SignLink";


export default function Header() {
  return <div className={style.box}>
    <Home />
    <Page />
    <SearchInput />
    <SignLink />
  </div>
}