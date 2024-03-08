import { useState } from "react";
import getInput from "../../utils/getInput";
import { useFormContext } from "react-hook-form";
import ErrorTip from "../UI/ErrorTip";
import Input from "./Input";

export default function FormContent() {
  const { formState } = useFormContext();
  const { errors } = formState;
  const [select, setSelect] = useState();
  function onFocus(identifier) {
    setSelect(identifier);
  }

  return (
    <div className="form-content">
      <div className="form-content-row">
        <Input
          {...getInput("text", "First Name", "firstname")}
          onFocus={onFocus}
        />
        <Input
          {...getInput("text", "Last Name", "lastname")}
          onFocus={onFocus}
        />
      </div>
      <Input {...getInput("text", "Email", "mobile-email")} onFocus={onFocus} />
      <Input
        {...getInput("password", "Password", "password")}
        onFocus={onFocus}
      />
      <Input
        {...getInput("password", "Confirm-password", "confirm-password")}
        onFocus={onFocus}
      />
      {errors[select] && (
        <ErrorTip className={select} content={errors[select].message} />
      )}
    </div>
  );
}
