import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { createTask } from './redux/actions.js';
import { getCreateTaskModalVisibility } from './redux/selectors.js';

import { Input, Form, Slider, Switch, InputNumber, DatePicker, Row, Col } from "antd";

import { Controller, useForm } from "react-hook-form";

import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';

export default () => {
  const { control, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateTaskModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createTask(data));
  };

  console.log('rendered');

  const disabledDate = (current) => {
    return current && current < dayjs();
  }

  useEffect(() => {
    reset();
  }, [!modalVisibility])

  return (
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} id="create-task" name="create-task" onFinish={handleSubmit(onSubmit)}>
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
      <Form.Item name="sender" label="Отправитель">
        <Controller
          name="sender"
          control={control}
          render={({ field }) => (
            <Input className="form-input" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="receiver" placeholder="Введите имя хоста" label="Получатель">
        <Controller
          name="receiver"
          control={control}
          render={({ field }) => (
            <Input className="form-input" placeholder="Введите имя хоста" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="isActive" label="Включить задачу">
        <Controller
          name="isActive"
          control={control}
          render={({ field }) => (
            <Switch {...field} checked={field.value} />
          )}
        />
      </Form.Item>
      <Form.Item name="isRepeatable" label="Повторяемая">
        <Controller
          name="isRepeatable"
          control={control}
          render={({ field }) => (
            <Switch {...field} checked={field.value} />
          )}
        />
      </Form.Item>
      <Form.Item name="isUnix" label="Для unix">
        <Controller
          name="isUnix"
          control={control}
          render={({ field }) => (
            <Switch {...field} checked={field.value} />
          )}
        />
      </Form.Item>
      <Form.Item name="repeats" label="Число повторений">
        <Controller
          name="repeats"
          control={control}
          render={({ field }) => (
            <Slider step={1} min={1} max={100} {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="delay" label="Отложенный запуск">
        <Controller
          name="delay"
          control={control}
          render={({ field }) => (
            <InputNumber {...field} className="form-input" />
          )}
        />
      </Form.Item>
      <Form.Item name="startTime" label="Время запуска">
        <Controller
          name="startTime"
          control={control}
          render={({ field }) => (
            <DatePicker disabledDate={disabledDate}
              format="YYYY-MM-DD HH:mm:ss"
              locale={locale}
              placeholder="Выберите дату"
              showTime={true}
              className="form-input"
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