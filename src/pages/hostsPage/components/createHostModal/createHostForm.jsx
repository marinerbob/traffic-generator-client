import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createHost } from './redux/actions.js';
import { getCreateHostModalVisibility } from './redux/selectors.js';

import { Input, Form, Row, Col, Slider, Switch, InputNumber, DatePicker } from "antd";

import { Controller, useForm } from "react-hook-form";

import AddUsersSelect from './addUserSelect';



export default () => {
  const { control, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateHostModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createHost(data));
  };

  useEffect(() => {
    reset();
  }, [!modalVisibility])

  return (
    <Form id="create-host" name="create-host" onFinish={handleSubmit(onSubmit)}>
      <Form.Item name="name" label="Наименование виртуальной машины">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите имя хоста" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="ip" label="IP-адрес вируальной машины">
        <Controller
          name="ip"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите ip хоста" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="users" label="Подключаемые пользователи">
        <Controller
          name="users"
          control={control}
          render={({ field }) =>
          (<AddUsersSelect
            {...field}
          />)}
        />
      </Form.Item>
    </Form>
  );
};
