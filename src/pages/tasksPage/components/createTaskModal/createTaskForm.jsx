import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createTask } from "./redux/actions.js";
import { getCreateTaskModalVisibility } from "./redux/selectors.js";

import { Input, Form, Slider, Switch, DatePicker, TimePicker } from "antd";

import { useForm } from "react-hook-form";

import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs from "dayjs";
import "./createTaskModal.scss";

import AddUserSelect from "./addUserSelect.jsx";
import AddHostSelect from "./addHostSelect.jsx";
import AddTaskTypeSelect from "./addTaskTypeSelect.jsx";

import BindToForm from 'components/bindToFormComponent/BindToForm';

import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema.js';

export default () => {
  const { control, reset, handleSubmit,
  formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
  const dispatch = useDispatch();

  const modalVisibility = useSelector(getCreateTaskModalVisibility);

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(createTask(data));
  };

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
      <BindToForm name="name" label="Наименование" control={control}
      error={errors.name}
      render={(props) => (
        <Input {...props} placeholder="Введите наименование задачи" />
      )} />
        
      <BindToForm name="taskType" label="Тип задачи" control={control} 
      error={errors.taskType}
      render={(props) => (
        <AddTaskTypeSelect {...props} />
      )} />
        
      <Form.Item label="Указание хостов">
        <Input.Group compact>
          <BindToForm name="sender" control={control} itemProps={{ noStyle: true }}
            error={errors.sender}
            render={(props) => (
              <AddHostSelect
              {...props}
              style={{ width: "50%" }}
              placeholder="Выберите отправителя"
            />
            )}
          />
          <BindToForm name="receiver" control={control} itemProps={{ noStyle: true }}
          error={errors.receiver}
          render={(props) => (
            <AddHostSelect
              {...props}
              style={{ width: "50%" }}
              placeholder="Выберите получателя"
            />
          )} />
        </Input.Group>
      </Form.Item>
      <BindToForm name="userId" label="Активный пользователь" control={control}
        error={errors.userId}
        render={(props) => (
          <AddUserSelect
          {...props}
          placeholder="Выберите активного пользователя"
        />
        )} />
      <Form.Item wrapperCol={{ offset: 7 }} className="nested-form-item">
        <div className="form-group">
          <BindToForm name="isActive" label="Включить задачу" 
            control={control}
            error={errors.isActive}
            render={(props) => (
              <Switch {...props} checked={props.value} defaultChecked={false} />
            )}
          />
          <BindToForm name="isRepeatable" label="Повторяемая" 
            control={control}
            error={errors.isRepeatable}
            render={(props) => (
              <Switch {...props} checked={props.value} defaultChecked={false} />
            )}
          />
          <BindToForm name="isUnix" label="Для Unix" 
            control={control}
            error={errors.isUnix}
            render={(props) => (
              <Switch {...props} checked={props.value} defaultChecked={false} />
            )}
          />
        </div>
      </Form.Item>

      <BindToForm name="repeats" label="Число выполнений" 
      control={control}
      error={errors.repeats}
      render={(props) => (
        <Slider
        marks={{ 1: "1", 100: "100" }}
        step={1}
        min={1}
        max={100}
        {...props}
      />
      )} />
      <Form.Item label="Задание времени">
        <Input.Group compact>
          <BindToForm name="delay" control={control}
            itemProps={{ noStyle: true }} 
            error={errors.delay}
            render={(props) => (
              <TimePicker
              {...props}
              style={{ width: "50%" }}
              placeholder="Выберите время до старта"
            />
            )}
          />
          <BindToForm name="startTime" control={control} 
            itemProps={{ noStyle: true }}
            error={errors.startTime}
            render={(props) => (
              <DatePicker
              disabledDate={disabledDate}
              format="YYYY-MM-DD HH:mm:ss"
              locale={locale}
              placeholder="Выберите дату запуска"
              showTime={true}
              style={{ width: "50%" }}
              {...props}
            />
            )}
          />
        </Input.Group>
      </Form.Item>
      <BindToForm name="params" label="Передаваемые параметры" control={control} 
        error={errors.params}
        render={(props) => (
          <Input.TextArea
          rows={5}
          placeholder="Ввод параметров допускается по модели: <название_параметра>=<значение_параметра> через символ переноса строки"
          {...props}
        />
        )}
      />
      <BindToForm name="description" label="Описание" control={control}
        error={errors.description}
        render={(props) => (
          <Input.TextArea
          rows={5}
          placeholder="Введите описание..."
          {...props}
        />
        )}
      />
    </Form>
  );
};
