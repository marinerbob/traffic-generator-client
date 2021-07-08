import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { toggleCreateHostModal } from './redux/actions.js';
import { getModalVisibility, getHostAddingStatus } from './redux/selectors.js';
import consts from './redux/constants.js';

import { Modal, Button } from "antd";
import CreateHostForm from "./createHostForm";

export default () => {
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getModalVisibility);
  const hostAddingStatus = useSelector(getHostAddingStatus);

  const isAddingLoading = hostAddingStatus === consts.CREATE_HOST_INIT;

  const toggleModal = () => {
    dispatch(toggleCreateHostModal());
  };

  return (
    <>
      <Button type="primary" onClick={toggleModal}>
        Добавить хост
      </Button>
      <Modal
        title="Окно добавления хоста"
        visible={modalVisibility}
        onCancel={toggleModal}
        footer={[
          <Button key="create" form="create-host" type="primary" htmlType="submit" loading={isAddingLoading}>
            Добавить хост
          </Button>
        ]}
      >
        <CreateHostForm />
      </Modal>
    </>
  );
};
