import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createUser } from './redux/actions.js';
import { getCreateUserModalVisibility } from './redux/selectors.js';

import { Input, Form, Row, Col, Slider, Switch, InputNumber, DatePicker } from "antd";

import { Controller, useForm } from "react-hook-form";

import AddDepSelect from './addDepSelect';
import AddOrgSelect from './addOrgSelect';
import AddTitleSelect from './addTitleSelect';


export default () => {
  const { control, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateUserModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createUser(data));
  };

  useEffect(() => {
    reset();
  }, [!modalVisibility])

  return (
    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 20 }} id="create-user" name="create-user" onFinish={handleSubmit(onSubmit)}>
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
      <Form.Item name="title" label="Должность">
        <Controller
          name="title"
          control={control}
          render={({ field }) =>
          (<AddTitleSelect
            {...field}
          />)}
        />
      </Form.Item>
      <Form.Item name="organization" label="Подразделение">
        <Controller
          name="organization"
          control={control}
          render={({ field }) =>
          (<AddOrgSelect
            {...field}
          />)}
        />
      </Form.Item>
      <Form.Item name="department" label="Отдел">
        <Controller
          name="department"
          control={control}
          render={({ field }) =>
          (<AddDepSelect
            {...field}
          />)}
        />
      </Form.Item>
    </Form>
  );
};
