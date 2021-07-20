import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createTask } from './redux/actions.js';
import { getCreateTaskModalVisibility } from './redux/selectors.js';

import { Input, Form, Slider, Switch, InputNumber } from "antd";

import { Controller, useForm } from "react-hook-form";

import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import DatePicker from './datepicker';


export default () => {
  const { control, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateTaskModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createTask(data));
  };

  console.log('rendered');

  const disabledDate = () => {
    return dayjs();
  }

  useEffect(() => {
    reset();
  }, [!modalVisibility])

  return (
    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 20 }} id="create-task" name="create-task" onFinish={handleSubmit(onSubmit)}>
      <Form.Item name="name" label="Наименование">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите наименование задачи" {...field} />
          )}
        />
      </Form.Item>
      {/* <Form.Item name="taskType" label="Тип задачи">
        <Controller
          name="taskType"
          control={control}
          defaultValue=""
          render={({ field }) =>
          (<AddTasksSelect
            {...field}
          />)}
        />
      </Form.Item> */}
      <Form.Item name="name" label="Отправитель">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input className="form-input" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="name" placeholder="Введите имя хоста" label="Получатель">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите имя хоста" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="name" label="Включить задачу">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Switch {...field} checked={field.value} />
          )}
        />
      </Form.Item>
      <Form.Item name="name" label="Повторяемая">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Switch {...field} checked={field.value} />
          )}
        />
      </Form.Item>
      <Form.Item name="name" label="Для unix">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Switch {...field} checked={field.value} />
          )}
        />
      </Form.Item>
      <Form.Item name="name" label="Число повторений">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Slider step={1} min={1} max={100} {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="name" label="Отложенный запуск">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <InputNumber {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="name" label="Время запуска">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <DatePicker disabledDate={disabledDate}
                        format="YYYY-MM-DD HH:mm:ss"
                        locale={locale} 
                        placeholder="Выберите дату" 
                        {...field} />
          )}
        />
      </Form.Item>
      {/* <Form.Item label="Пользователь-отправитель">
        <Controller
          name="task"
          control={control}
          defaultValue=""
          render={({ field }) =>
          (<AddTasksSelect
            {...field}
          />)}
        />
      </Form.Item> */}
    </Form>
  );
};