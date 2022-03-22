import React from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  LinkButton,
  Input,
  Submit,
} from "./styles/form.styles";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.LinkButton = function FormLink({ children, ...restProps }) {
  return <LinkButton {...restProps}>{children}</LinkButton>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

export default Form;
