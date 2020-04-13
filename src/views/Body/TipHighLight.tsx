import React from "react";
import * as style from "./style.scss";
import { Link } from "react-router-dom";
import ColorContext from "./colorContext";

const styles = {
  color: "rgb(256, 152, 96)",
  borderColor: "transparent transparent rgb(256, 152, 96) transparent"
}
export default function TipHighLight(porps: { tag: number, value: string, link: string }) {
  const { color, setColor } = React.useContext(ColorContext)
  return <>{
    color === porps.tag ?
      <Link to={porps.link} style={styles} className={style.item} onClick={() => setColor(porps.tag)}>{porps.value}</Link>
      :
      <Link to={porps.link} className={style.item} onClick={() => setColor(porps.tag)}>{porps.value}</Link>
  }
  </>
}