import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toggleCreateUserModal } from './redux/actions.js';
import { getCreateUserModalVisibility, getUserAddingStatus } from './redux/selectors.js';
import consts from './redux/constants.js';

import { Modal, Button } from "antd";
import CreateUserForm from "./createUserForm";

export default () => {
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateUserModalVisibility);
  const userAddingStatus = useSelector(getUserAddingStatus);

  const isAddingLoading = userAddingStatus === consts.CREATE_USER_INIT;

  const toggleModal = () => {
    dispatch(toggleCreateUserModal);
  };

  return (
    <>
      <Button type="primary" onClick={toggleModal}>
        Добавить пользователя
      </Button>
      <Modal
        title="Окно добавления пользователя"
        visible={modalVisibility}
        onCancel={toggleModal}
        width={700}
        footer={[
          <Button key="create" form="create-user" type="primary" htmlType="submit" loading={isAddingLoading}>
            Добавить пользователя
          </Button>
        ]}
      >
        <CreateUserForm />
      </Modal>
    </>
  );
};
