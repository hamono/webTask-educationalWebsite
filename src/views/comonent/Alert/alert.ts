import { Modal } from "antd";

export default function Warning() {
  Modal.warning({
    title: '请先登录！'
  });
}