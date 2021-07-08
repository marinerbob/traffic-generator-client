import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createHost } from './redux/actions.js';
import { getModalVisibility, testSelectorForSelect } from './redux/selectors.js';

import { Input } from "antd";

import { Controller, useForm } from "react-hook-form";

import ConnectedSelect from 'components/connectedSelect';



export default () => {
  const { control, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createHost(data));
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
      <Controller
        name="users"
        control={control}
        render={({ field }) => 
          (<ConnectedSelect 
              placeholder="Выберите пользователей"
              dataSelector={testSelectorForSelect}
              propKey="id"
              propText="name"
              {...field}
          />)}
        />
    </form>
  );
};
