import React from "react";

import { Input } from "antd";

import { Controller, useForm } from "react-hook-form";

export default () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form name="create-host" onFinish={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input className="form-input" placeholder="Введите имя хоста" />
        )}
      />
      <Controller
        name="ip"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input className="form-input" placeholder="Введите ip хоста" />
        )}
      />
    </form>
  );
};
