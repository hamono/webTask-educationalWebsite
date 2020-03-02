import React from "react";
import * as style from "./style.scss";
import { Input } from 'antd';

export default function SearchInput() {
  const { Search } = Input;
  return <div className={style.box}>
    <Search placeholder="搜索课程" onSearch={value => console.log(value)} enterButton className={style.main} size="large" />
  </div>
}