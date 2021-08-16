import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createUser } from './redux/actions.js';
import { getCreateUserModalVisibility } from './redux/selectors.js';

import { Input, Form } from "antd";

import { useForm } from "react-hook-form";

import AddDepSelect from './addDepSelect';
import AddOrgSelect from './addOrgSelect';
import AddTitleSelect from './addTitleSelect';

import BindToForm from 'components/bindToFormComponent/BindToForm';

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
      <BindToForm name="login" label="Логин" control={control} error={errors.login}
        render={(props) => (
          <Input {...props} placeholder="Введите логин пользователя" />
        )}
      />

      <BindToForm name="password" label="Пароль" control={control} error={errors.password}
        render={(props) => (
          <Input.Password {...props} placeholder="Введите пароль пользователя" />
        )}
      />
      <BindToForm name="name" label="Имя" control={control} error={errors.name} 
      render={(props) => (
        <Input {...props} placeholder="Введите имя пользователя" />
      )} />
      <BindToForm name="surname" label="Фамилия" control={control} error={errors.surname} 
      render={(props) => (
        <Input {...props} placeholder="Введите фамилию пользователя" />
      )} />
      <BindToForm name="patroname" label="Отчество" control={control} error={errors.patroname}
      render={(props) => (
        <Input {...props} placeholder="Введите отчество пользователя" />
      )} />
      <BindToForm name="title" label="Должность" control={control} error={errors.title}
      render={(props) => (
        <AddTitleSelect {...props} />
      )} />
      <BindToForm name="organization" label="Подразделение" control={control} error={errors.organization}
      render={(props) => (
        <AddOrgSelect {...props} />
      )} />
        
      <BindToForm name="department" label="Отдел" control={control} error={errors.department}
      render={(props) => (
        <AddDepSelect {...props} />
      )} />
    </Form>
  );
};
