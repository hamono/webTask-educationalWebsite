import React from "react";
import * as style from './style.scss'
import Header from "../comonent/Header";
import img404 from 'src/images/404.png';
import { Link } from "react-router-dom";
import Foot from "../Foot";

export default function NotFound(){
  return <div className={style.box}>
    <Header tag="404" />
    <div className={style.main} >
      <img src={img404} alt="" width='500px' height='400px' />
      <Link to='/' className={style.link}><h1>返回首页</h1></Link>
    </div>
    <Foot />
  </div>
}