import React from "react";
import * as style from "./style.scss";
import Header from "../SigniIn/Header";
import { Input, Select, Button } from "antd";
import { Link, Redirect } from "react-router-dom";
import Foot from "../Foot";
import usePost from "../useFetch/usePost";

const InputGroup = Input.Group;
const { Option } = Select;

export default function SignOn() {
  const [usernames, setUsername] = React.useState('');
  const [passwords, setPassword] = React.useState('');
  const [phoneNumbers, serPhoneNumber] = React.useState(null)
  const handleUsername = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }, []);
  const handlePassword = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, []);
  const handlephoneNumber = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    serPhoneNumber(e.target.value);
  }, []);

  const { data, revalidate } = usePost({
    path: 'user/logOn',
    request: { username: usernames, password: passwords, phoneNumber:phoneNumbers }
  });
  if (data?.success) {
    return <Redirect to='/signIn/' />
  }
  return <div className={style.box}>
    <Header tag="注 册" />
    <div className={style.main}>
      <Input placeholder="昵称" size="large" className={style.input} value={usernames} onChange={handleUsername} />
      <Input type='password' placeholder="密码 ( 6~16个字符组成，区分大小写 ) " size="large" className={style.input} value={passwords} onChange={handlePassword} />
      {passwords.length < 6 && passwords.length > 0 && <p className={style.p}>密码长度不足</p>}
      <InputGroup compact className={style.input} size="large" >
        <Select defaultValue="中国大陆">
          <Option value="中国大陆">中国大陆</Option>
          <Option value="中国香港">中国香港</Option>
          <Option value="中国台湾">中国台湾</Option>
        </Select>
        <Input style={{ width: '78%' }} placeholder="常用手机号码" onChange={handlephoneNumber} value={phoneNumbers} />
      </InputGroup>
      {isNaN(phoneNumbers) && <p className={style.p}>请输入数字</p>}
      {phoneNumbers && (phoneNumbers.length > 11) && <p className={style.p}>请输入正确的电话号码</p>}
      <div className={style.description} >我们没有需要遵守的协议。</div>
      <Button style={{ width: '100%', marginTop: 10, height: 40 }} onClick={revalidate}>注册</Button>
      <div className={style.link} ><Link to="/signIn/" className={style.link} >已有账号？直接登录</Link></div>
    </div>
    <Foot />
  </div>
}