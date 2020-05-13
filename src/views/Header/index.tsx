import React from "react";
import * as style from "./style.scss";
import Home from "./Home";
import Page from "./Page";
import SearchInput from "./Search";
import SignLink from "./SignLink";
import { Alert } from "antd";
import IsSignIn from '../SigniIn/isSignIn'


export default function Header() {
  const { isSignIn ,setIsSignIn} = React.useContext(IsSignIn);
  React.useEffect(()=>{
    setTimeout(()=>{
          setIsSignIn(false);
    },2000)
  },[setIsSignIn])
  return <div className={style.box}>
    {isSignIn && <Alert className={style.alert} message='登录成功，欢迎您！' type="success" showIcon />}
    <div className={style.main}>
      <Home />
      <Page />
      <SearchInput />
      <SignLink />
    </div>
  </div>
}