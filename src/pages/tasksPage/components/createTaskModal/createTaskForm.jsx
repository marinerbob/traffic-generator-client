import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createTask } from './redux/actions.js';
import { getCreateTaskModalVisibility } from './redux/selectors.js';

import { Input, Form, Row, Col, Slider, Switch, InputNumber, DatePicker } from "antd";

import { Controller, useForm } from "react-hook-form";



export default () => {
  const { control, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateTaskModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createTask(data));
  };

  useEffect(() => {
    reset();
  }, [!modalVisibility])

  return (
    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 20 }} id="create-task" name="create-task" onFinish={handleSubmit(onSubmit)}>
      <Form.Item name="name" label="Имя">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите имя пользователя" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="surname" label="Фамилия">
        <Controller
          name="surname"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите фамилию пользователя" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="patroname" label="Отчество">
        <Controller
          name="patroname"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите отчество пользователя" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="login" label="Логин">
        <Controller
          name="login"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите логин пользователя" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="password" label="Пароль">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password className="form-input" placeholder="Введите пароль пользователя" {...field} />
          )}
        />
      </Form.Item>
    </Form>
  );
};

{/* <Form.Item name="name" label="Наименование">
<Controller
  name="name"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <Input className="form-input" placeholder="Введите наименование задачи" {...field} />
  )}
/>
</Form.Item>
<Form.Item name="taskType" label="Тип задачи">
<Controller
  name="taskType"
  control={control}
  defaultValue=""
  render={({ field }) =>
  (<AddTasksSelect
    {...field}
  />)}
/>
</Form.Item>
<Row gutter={8}>
<Col span={12}>
  <Form.Item name="name" label="Отправитель">
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Input className="form-input" {...field} />
      )}
    />
  </Form.Item>
</Col>
<Col span={12}>
  <Form.Item name="name" placeholder="Введите имя хоста" label="Получатель">
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Input className="form-input" placeholder="Введите имя хоста" {...field} />
      )}
    />
  </Form.Item>
</Col>
</Row>
<Row gutter={8}>
<Col span={8}>
  <Form.Item name="name" label="Включить задачу">
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Switch {...field} />
      )}
    />
  </Form.Item>
</Col>
<Col span={8}>
  <Form.Item name="name" label="Повторяемая">
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Switch {...field} />
      )}
    />
  </Form.Item>
</Col>
<Col span={8}>
  <Form.Item name="name" label="Для unix">
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Switch {...field} />
      )}
    />
  </Form.Item>
</Col>
</Row>
<Row>
<Col span={24}>
  <Form.Item name="name" label="Число повторений">
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Slider step={1} min={1} max={100} {...field} />
      )}
    />
  </Form.Item>
</Col>
</Row>
<Row>
<Col span={12}>
  <Form.Item name="name" label="Отложенный запуск">
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <InputNumber {...field} />
      )}
    />
  </Form.Item>
</Col>
<Col span={12}>
  <Form.Item name="name" label="Время запуска">
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <DatePicker placeholder="Выберите дату" {...field} />
      )}
    />
  </Form.Item>
</Col>
</Row>
<Form.Item label="Пользователь-отправитель">
<Controller
  name="task"
  control={control}
  defaultValue=""
  render={({ field }) =>
  (<AddTasksSelect
    {...field}
  />)}
/>
</Form.Item> */}