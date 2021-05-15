import React from "react";

import { Input, Button } from "antd";

import { Controller, useForm } from "react-hook-form";

export default () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form id="create-host" name="create-host" onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit">
        Добавить хост
      </button>
    </form>
  );
};
