import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createTask } from "./redux/actions.js";
import { getCreateTaskModalVisibility } from "./redux/selectors.js";

import { Input, Form, Slider, Switch, DatePicker, TimePicker } from "antd";

import { Controller, useForm } from "react-hook-form";

import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs from "dayjs";
import "./createTaskModal.scss";

import AddUserSelect from "./addUserSelect.jsx";
import AddHostSelect from "./addHostSelect.jsx";
import AddTaskTypeSelect from "./addTaskTypeSelect.jsx";

export default () => {
  const { control, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateTaskModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createTask(data));
  };

  console.log("rendered");

  const disabledDate = (current) => {
    return current && current < dayjs();
  };

  useEffect(() => {
    reset();
  }, [!modalVisibility]);

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      id="create-task"
      name="create-task"
      onFinish={handleSubmit(onSubmit)}
    >
      <Form.Item name="name" label="Наименование">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input placeholder="Введите наименование задачи" {...field} />
          )}
        />
      </Form.Item>
      <Form.Item name="taskType" label="Тип задачи">
        <Controller
          name="taskType"
          control={control}
          render={({ field }) => <AddTaskTypeSelect {...field} />}
        />
      </Form.Item>
      <Form.Item label="Указание хостов">
        <Input.Group compact>
          <Form.Item noStyle>
            <Controller
              name="sender"
              control={control}
              render={({ field }) => (
                <AddHostSelect
                  style={{ width: "50%" }}
                  placeholder="Выберите отправителя"
                  {...field}
                />
              )}
            />
          </Form.Item>
          <Form.Item noStyle>
            <Controller
              name="receiver"
              control={control}
              render={({ field }) => (
                <AddHostSelect
                  style={{ width: "50%" }}
                  placeholder="Выберите получателя"
                  {...field}
                />
              )}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="Активный пользователь">
        <Controller
          name="userId"
          control={control}
          render={({ field }) => (
            <AddUserSelect
              placeholder="Выберите активного пользователя"
              {...field}
            />
          )}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 7 }} className="nested-form-item">
        <div className="form-group">
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
        </div>
      </Form.Item>

      <Form.Item name="repeats" label="Число выполнения">
        <Controller
          name="repeats"
          control={control}
          render={({ field }) => (
            <Slider
              marks={{ 1: "1", 100: "100" }}
              step={1}
              min={1}
              max={100}
              {...field}
            />
          )}
        />
      </Form.Item>
      <Form.Item label="Задание времени">
        <Input.Group compact>
          <Form.Item name="delay" noStyle>
            <Controller
              name="delay"
              control={control}
              render={({ field }) => (
                <TimePicker
                  {...field}
                  style={{ width: "50%" }}
                  placeholder="Выберите время до старта"
                />
              )}
            />
          </Form.Item>
          <Form.Item name="startTime" noStyle>
            <Controller
              name="startTime"
              control={control}
              render={({ field }) => (
                <DatePicker
                  disabledDate={disabledDate}
                  format="YYYY-MM-DD HH:mm:ss"
                  locale={locale}
                  placeholder="Выберите дату запуска"
                  showTime={true}
                  style={{ width: "50%" }}
                  {...field}
                />
              )}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="Описание">
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Input.TextArea
              rows={5}
              placeholder="Введите описание..."
              {...field}
            />
          )}
        />
      </Form.Item>
    </Form>
  );
};
