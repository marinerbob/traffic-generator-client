import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createHost } from './redux/actions.js';
import { getModalVisibility } from './redux/selectors.js';
import consts from './redux/constants.js';

import { Input, Button } from "antd";

import { Controller, useForm } from "react-hook-form";



export default () => {
  const { control, reset, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    dispatch(createHost(data));
  };

  useEffect(() => {
    reset();
  }, [!modalVisibility])

  return (
    <form id="create-host" name="create-host" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input className="form-input" placeholder="Введите имя хоста" {...field} />
        )}
      />
      <Controller
        name="ip"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input className="form-input" placeholder="Введите ip хоста" {...field} />
        )}
        
      />
    </form>
  );
};
