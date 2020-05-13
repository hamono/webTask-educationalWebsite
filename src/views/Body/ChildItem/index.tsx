import React from "react";
import * as style from "./style.scss";
import { Link } from "react-router-dom";
// import SignContext from "src/views/SigniIn/signInContext";
// import Warning from "src/views/comonent/Alert/alert";

export default function ChildItem(props: {
  item: string,
  list: string[],
  tag: string
}) {
  // const { success } = React.useContext(SignContext);
  // const link = success ? '/playPage/' : '';
  // const [signIn, setSignIn] = React.useState(true);
  // const handleClick = React.useCallback(() => {
  //   setSignIn(false)
  // }, [])
  return <div className={style.box}>
    <h1>{props.item}</h1>
    <div className={style.main}>
      <div className={style.img}>
        <Link to='' ><div className={style.button}>进入直播</div></Link>
        {/* {!success && !signIn && Warning()} */}
        <div className={style.logo}>{props.tag}</div>
      </div>
      <ul className={style.ul}>
        {props.list.map((v: {}, i: number) =>
          <Link to="" key={i} >
            <li className={style.li}>
              <div className={style.div} />{v}
            </li>
          </Link>)}
      </ul>
    </div>
  </div>
}