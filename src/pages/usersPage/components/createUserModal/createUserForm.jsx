import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createUser } from './redux/actions.js';
import { getCreateUserModalVisibility } from './redux/selectors.js';

import { Input, Form, Row, Col, Slider, Switch, InputNumber, DatePicker } from "antd";

import { Controller, useForm } from "react-hook-form";

import AddDepSelect from './addDepSelect';
import AddOrgSelect from './addOrgSelect';
import AddTitleSelect from './addTitleSelect';

import BindToForm from 'components/bindToFormComponent';
import validationSchema from './validationSchema.js';
import { yupResolver } from "@hookform/resolvers/yup";

export default () => {
  const { control, reset, handleSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
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
      <BindToForm name="login" label="Логин" control={control} error={errors.login}>
        <Input placeholder="Введите логин пользователя" />
      </BindToForm>
      <BindToForm name="password" label="Пароль" control={control} error={errors.password}>
        <Input.Password placeholder="Введите пароль пользователя" />
      </BindToForm>
      <BindToForm name="name" label="Имя" control={control} error={errors.name}>
        <Input placeholder="Введите имя пользователя" />
      </BindToForm>
      <BindToForm name="surname" label="Фамилия" control={control} error={errors.surname}>
        <Input placeholder="Введите фамилию пользователя" />
      </BindToForm>
      <BindToForm name="patroname" label="Отчество" control={control} error={errors.patroname}>
        <Input placeholder="Введите отчество пользователя" />
      </BindToForm>
      <BindToForm name="title" label="Должность" control={control} error={errors.title}>
        <AddTitleSelect />
      </BindToForm>
      <BindToForm name="organization" label="Подразделение" control={control} error={errors.organization}>
        <AddOrgSelect />
      </BindToForm>
      <BindToForm name="department" label="Отдел" control={control} error={errors.department}>
        <AddDepSelect />
      </BindToForm>
    </Form>
  );
};
