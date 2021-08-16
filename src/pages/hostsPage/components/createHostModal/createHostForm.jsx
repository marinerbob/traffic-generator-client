import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createHost } from "./redux/actions.js";
import { getCreateHostModalVisibility, getFormError } from "./redux/selectors.js";

import { Input, Form, Alert } from "antd";

import { useForm } from "react-hook-form";

import AddUsersSelect from "./addUserSelect";

import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema.js";

import BindToForm from 'components/bindToFormComponent/BindToForm';

export default () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateHostModalVisibility);
  const serverError = useSelector(getFormError);

  const onSubmit = (data) => {
    console.log(data);

    dispatch(createHost(data));
  };

  useEffect(() => {
    reset();
  }, [!modalVisibility]);

  return (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 20 }}
      id="create-host"
      name="create-host"
      onFinish={handleSubmit(onSubmit)}
    >
      { serverError && (<Alert className="form-item" type="error" message={serverError} />) }
      <BindToForm name="name" 
      label="Имя" 
      error={errors.name} 
      control={control}
      render={(props) => (
        <Input placeholder="Введите имя хоста" {...props} />
      )}
      />
      <BindToForm name="ipaddr" 
      label="IP-адрес" 
      error={errors.ipaddr} 
      control={control} 
      render={(props) => (
        <Input placeholder="Введите ip хоста" {...props} />
      )} />
      <BindToForm name="availableUsers" 
      label="Пользователи" 
      error={errors.availableUsers} 
      control={control}
      render={(props) => (
        <AddUsersSelect {...props} />
      )} />
    </Form>
  );
};
