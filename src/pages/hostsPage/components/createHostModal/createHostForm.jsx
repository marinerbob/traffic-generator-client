import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createHost } from "./redux/actions.js";
import { getCreateHostModalVisibility } from "./redux/selectors.js";

import { Input, Form } from "antd";

import { useForm } from "react-hook-form";

import AddUsersSelect from "./addUserSelect";

import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema.js";

import BindToForm from "components/bindToFormComponent";

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

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createHost(data));
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
      <BindToForm name="name" label="Имя" error={errors.name} control={control}>
        <Input placeholder="Введите имя хоста" />
      </BindToForm>
      <BindToForm name="ip" label="IP-адрес" error={errors.ip} control={control}>
        <Input placeholder="Введите ip хоста" />
      </BindToForm>
      <BindToForm name="users" label="Пользователи" error={errors.users} control={control}>
        <AddUsersSelect />
      </BindToForm>
    </Form>
  );
};
