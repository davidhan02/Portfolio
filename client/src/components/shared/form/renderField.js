import React from 'react';
import Input from './Input';
import Label from './Label';
import Error from './Error';
import RadioGroup from './RadioGroup';
import InputWrapper from './InputWrapper';
import SelectWrapper from './SelectWrapper';

const VariableField = field => {
  switch (field.type) {
    case 'radiogroup':
      return (
        <InputWrapper>
          <RadioGroup field={field} />
        </InputWrapper>
      );

    case 'select':
      return (
        <InputWrapper>
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            <Error>{field.meta.error}</Error>
          )}
          <SelectWrapper>
            <Input {...field.input} as="select" type="select">
              {field.children}
            </Input>
          </SelectWrapper>
        </InputWrapper>
      );

    case 'textarea':
      return (
        <InputWrapper>
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            <Error>{field.meta.error}</Error>
          )}
          <Input
            {...field.input}
            as="textarea"
            rows="6"
            error={field.meta.touched && !!field.meta.error}
            placeholder={field.label}
          />
        </InputWrapper>
      );

    default:
      return (
        <InputWrapper>
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            <Error>{field.meta.error}</Error>
          )}
          <Input
            {...field.input}
            error={field.meta.touched && !!field.meta.error}
            type={field.type}
            placeholder={field.label}
            autoComplete="off"
          />
        </InputWrapper>
      );
  }
};

const renderField = field => {
  return <VariableField {...field} />;
};

export default renderField;
