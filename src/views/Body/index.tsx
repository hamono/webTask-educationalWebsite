import React from "react";
import * as style from "./style.scss";
import { Switch, Route } from "react-router-dom";
import ChildItem from "./ChildItem";
import data from "./data";
import Item from "./Item";
import TipHighLight from "./TipHighLight";
import ColorContext from "./colorContext";

export default function Body() {
  const [color, setColor] = React.useState(1);

  return <div className={style.box}>
    <ColorContext.Provider value={{color,setColor}}>
      <div className={style.place}>
        <TipHighLight tag={1} value="小学生编程" link="/first/" />
        <TipHighLight tag={2} value="中学生进阶编程" link="/second/" />
        <TipHighLight tag={3} value="大学生编程" link="/third/" />
        <TipHighLight tag={4} value="软件架构之路" link="/fourth/" />
        <TipHighLight tag={5} value="全栈始于脚下" link="/fifth/" />
        <TipHighLight tag={6} value="产品经理是怎样练成的" link="/sixth/" />
      </div>
    </ColorContext.Provider>
    <Switch>
      <Route path='/first/' render={() => (<ChildItem item={data.items} list={data.listFirst} tag="小学生编程" />)} />
      <Route path='/second/' render={() => (<ChildItem item={data.items} list={data.listSecond} tag="中学生进阶编程" />)} />
      <Route path='/third/' render={() => (<ChildItem item={data.items} list={data.listThird} tag="大学生编程" />)} />
      <Route path='/fourth/' render={() => (<ChildItem item={data.items} list={data.listFourth} tag="软件架构之路" />)} />
      <Route path='/fifth/' render={() => (<ChildItem item={data.items} list={data.listFifth} tag="全栈始于脚下" />)} />
      <Route path='/sixth/' render={() => (<ChildItem item={data.items} list={data.listSixed} tag="产品经理是怎样练成的" />)} />
      <Route render={() => (<ChildItem item={data.items} list={data.listFirst} tag="小学生编程" />)} />
    </Switch>
    <Item tag="精选热门课程" />
  </div>
}