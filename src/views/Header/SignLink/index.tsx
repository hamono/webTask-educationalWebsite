import React from "react";
import * as style from "./style.scss";
import { Popover, Avatar } from "antd";
import { Link} from "react-router-dom";
export default function SignLink() {
  const content = (
    <div className={style.main}>
      <div className={style.item}>课程表</div>
      <div className={style.item}>我的老师</div>
      <div className={style.item}>收藏</div>
      <div className={style.item}>退出登录</div>
    </div>
  )
  return <div className={style.box}>
    <Link to="/signOn/" className={style.on} >注册</Link>
    <Link to="/signIn/" className={style.on} >登录</Link>
    <Popover content={content}>
      <Avatar size="large" icon="user" />
    </Popover>
  </div>
}