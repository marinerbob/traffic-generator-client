import React, { useState } from "react";

import { Modal, Button } from "antd";

import CreateHostForm from "./createHostForm";

import "./createHostModal.scss";

export default () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Добавить хост
      </Button>
      <Modal
        title="Окно добавления хоста"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[]}
      >
        <CreateHostForm />
      </Modal>
    </>
  );
};
