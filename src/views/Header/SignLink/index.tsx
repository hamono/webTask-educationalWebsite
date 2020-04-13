import React from "react";
import * as style from "./style.scss";
import { Popover, Avatar } from "antd";
import { Link } from "react-router-dom";
import SignContext from "src/views/SigniIn/signInContext";

export default function SignLink() {
  const { success,setSuccess } = React.useContext(SignContext)
  const contentTrue = (
    <div className={style.main}>
      <Link to=""><div className={style.item}>课程表</div></Link>
      <Link to=""><div className={style.item}>我的老师</div></Link>
      <Link to=""><div className={style.item}>收藏</div></Link>
      <Link to="" onClick={()=>setSuccess(false)}><div className={style.item}>退出登录</div></Link>
    </div>
  )
  const contentFalse = (
    <Link to="/signIn/"><div className={style.item}>登录</div></Link>
  )
  if (success) {
    return <div className={style.box}>
      <Link to="" className={style.on}>哈默默</Link>
      <Popover content={contentTrue}>
        <Avatar size="large" icon="user" />
      </Popover>
    </div>
  }
  else {
    return <div className={style.box}>
      <Link to="/signOn/" className={style.on} >注册</Link>
      <Link to="/signIn/" className={style.on} >登录</Link>
      <Popover content={contentFalse}>
        <Avatar size="large" icon="user" />
      </Popover>
    </div>
  }
}