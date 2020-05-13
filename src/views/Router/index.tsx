import React from "react";
import Header from "../Header";
import Up from "../Up";
import Body from "../Body";
import Foot from "../Foot";
import SignOn from "../SignOn";
import SignIn from "../SigniIn";
import NotFound from "../NotFound";

export function all() {
  return <div>
    <Header />
    <Up />
    <Body />
    <Foot />
  </div>
}

export function signIn() {
  return <div>
    <SignIn />
  </div>
}

export function signOn() {
  return <div>
    <SignOn />
  </div>
}

export function notFound() {
  return <div>
    <NotFound />
  </div>
}
