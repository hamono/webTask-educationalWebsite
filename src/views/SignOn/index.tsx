import React from "react";
import * as style from "./style.scss";
import Header from "../SigniIn/Header";
import { Input, Select, Button } from "antd";
import { Link } from "react-router-dom";
import Foot from "../Foot";

const InputGroup = Input.Group;
const { Option } = Select;

export default function SignOn() {
  const [password, setPassword] = React.useState('');
  const [phoneNumber, serPhoneNumber] = React.useState(null)
  const handlePassword = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)

  }, []);
  const handlephoneNumber = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    serPhoneNumber(e.target.value);
  }, []);

  // 电话号码格式判断

  return <div className={style.box}>
    <Header tag="注 册" />
    <div className={style.main}>
      <Input placeholder="昵称" size="large" className={style.input} />
      <Input type='password' placeholder="密码 ( 6~16个字符组成，区分大小写 ) " size="large" className={style.input} onChange={handlePassword} />
      {password.length < 6 && password.length > 0 && <p className={style.p}>密码长度不足</p>}
      <InputGroup compact className={style.input} size="large" >
        <Select defaultValue="中国大陆">
          <Option value="中国大陆">中国大陆</Option>
          <Option value="中国香港">中国香港</Option>
          <Option value="中国台湾">中国台湾</Option>
        </Select>
        <Input style={{ width: '78%' }} placeholder="常用手机号码" onChange={handlephoneNumber} value={phoneNumber} />
      </InputGroup>
      {isNaN(phoneNumber)&&<p className={style.p}>请输入数字</p>}
      {phoneNumber&&(phoneNumber.length > 11)&&<p className={style.p}>请输入正确的电话号码</p>}
      <div className={style.description} >我们没有需要遵守的协议。</div>
      <Button style={{ width: '100%', marginTop: 10, height: 40 }}>注册</Button>
      <div className={style.link} ><Link to="/signIn/" className={style.link} >已有账号？直接登录</Link></div>
    </div>
    <Foot />
  </div>
}