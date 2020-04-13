import React from "react";
import * as style from "./style.scss";
import { Input, Button, Icon, } from "antd";
import { Link } from "react-router-dom";
import Header from "./Header";
import Foot from "../Foot";
import SignContext from "./signInContext";

export default function SignIn() {
  const storage = window.localStorage;
  const [remPassword, setRemPassword] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(null);
  const [password, setPassword] = React.useState('');
  const {setSuccess}=React.useContext(SignContext);

  // 判断是否有账号密码缓存
  React.useEffect(() => {
    if (storage.getItem("userName") != null && (storage.getItem("remPassword") === 'true')) {
      setInputValue(storage.userName);
      setPassword(storage.password);
      setRemPassword(storage.getItem("remPassword") === 'true')
    } else {
      setInputValue(storage.userName);
    }
  }, [storage])
  // 忘记密码的提示
  const alertWord = React.useCallback(() => {
    alert("还找不回来");
  }, [])
  // 记住用户名
  const handleValue = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    storage.userName = inputValue;
  }, [inputValue, storage.userName])
  // 记住密码
  const handlePassword = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    storage.password = password;
  }, [password, storage.password])
  // 记住密码勾选
  const handleCheck = React.useCallback(() => {
    if (remPassword) {
      console.log(remPassword)
      setRemPassword((state) => !state);
      const valueTrue=!remPassword
      storage.remPassword = valueTrue;
    } else {
      console.log(remPassword)
      setRemPassword(true);
      const valueTrue = !remPassword
      storage.remPassword = valueTrue;
    }
  }, [remPassword, storage.remPassword]);

  return <div className={style.box}>
    <Header tag="登 录" />
    <div className={style.main}>
      <span className={style.title}>密码登录</span>
      <Input placeholder="电话号码" size="large" className={style.input} onChange={handleValue} value={inputValue} />
      {inputValue&&isNaN(inputValue)&&<p className={style.p}>请输入数字</p>}
      {inputValue&&(inputValue.length > 11)&&<p className={style.p}>请输入正确的电话号码</p>}
      <Input type="password" placeholder="密码" size="large" className={style.input} onChange={handlePassword} value={password} />
      {password.length < 6 && password.length > 0 && <p className={style.p}>密码长度不足</p>}
      <div className={style.word}>
        <div className={style.rememberPassword}>
          <div className={style.span} onClick={handleCheck}>{remPassword && <Icon type="check" />}</div>记住密码</div>
        <a className={style.lostPw} onClick={alertWord}>忘记密码？！</a>
      </div>
      <div className={style.button}>
        <Button type="primary" className={style.buttonOne} onClick={()=>setSuccess(true)}><Link to="/home/">登 录</Link></Button>
        <Button className={style.buttonOne}><Link to="/signOn/">注 册</Link></Button>
      </div>
    </div>
    <Foot />
  </div>
}