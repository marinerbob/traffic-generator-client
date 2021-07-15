import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toggleCreateTaskModal } from './redux/actions.js';
import { getCreateTaskModalVisibility, getTaskAddingStatus } from './redux/selectors.js';
import consts from './redux/constants.js';

import { Modal, Button } from "antd";
import CreateTaskForm from "./createTaskForm";

export default () => {
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateTaskModalVisibility);
  const taskAddingStatus = useSelector(getTaskAddingStatus);

  const isAddingLoading = taskAddingStatus === consts.CREATE_TASK_INIT;

  const toggleModal = () => {
    dispatch(toggleCreateTaskModal);
  };

  return (
    <>
      <Button type="primary" onClick={toggleModal}>
        Добавить задачу
      </Button>
      <Modal
        title="Окно добавления задачи"
        visible={modalVisibility}
        onCancel={toggleModal}
        width={700}
        footer={[
          <Button key="create" form="create-task" type="primary" htmlType="submit" loading={isAddingLoading}>
            Добавить задачу
          </Button>
        ]}
      >
        <CreateTaskForm />
      </Modal>
    </>
  );
};
