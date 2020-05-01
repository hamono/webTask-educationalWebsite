import * as React from 'react';
import { Icon } from 'antd';
import * as style from "./style.scss";

export default function LoadingSubpack() {
  return (
    <div className={style.loadingSubpack}>
      <Icon type="compass" style={{ fontSize: 45 }} theme="twoTone" spin={true} />
      <div className={style.title}>
        Hamomo School
      </div>
      <div className={style.subtitle}>
        首次加载较慢，请耐心等待
      </div>
    </div >
  )
}