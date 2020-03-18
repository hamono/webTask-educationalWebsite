import React from "react";
import * as style from "./style.scss";
import { Link, Switch, Route } from "react-router-dom";
import ChildItem from "./ChildItem";
import data from "./data";
import Item from "./Item";

export default function Body() {
  return <div className={style.box}>
    <div className={style.place}>
      <Link to="/first/" className={style.item}>小学生编程</Link>
      <Link to="/second/" className={style.item}>中学生进阶编程</Link>
      <Link to="/third/" className={style.item}>大学生编程</Link>
      <Link to="/fourth/" className={style.item}>软件架构之路</Link>
      <Link to="/fifth/" className={style.item}>全栈始于脚下</Link>
      <Link to="/sixth/" className={style.item}>产品经理是怎样练成的</Link>
    </div>
    <Switch>
      <Route path='/first/' render={() => (<ChildItem item={data.items} list={data.listFirst} tag={false} />)} />
      <Route path='/second/' render={() => (<ChildItem item={data.items} list={data.listSecond} tag={false} />)} />
      <Route path='/third/' render={() => (<ChildItem item={data.items} list={data.listThird} tag={true} />)} />
      <Route path='/fourth/' render={() => (<ChildItem item={data.items} list={data.listFourth} tag={false} />)} />
      <Route path='/fifth/' render={() => (<ChildItem item={data.items} list={data.listFifth} tag={false} />)} />
      <Route path='/sixth/' render={() => (<ChildItem item={data.items} list={data.listSixed} tag={false} />)} />
      <Route render={() => (<ChildItem item={data.items} list={data.listSixed} tag={false} />)} />
    </Switch>
    <Item tag="精选热门课程" />
  </div>
}