import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  confirmPassword,
  emailValidation,
  passwordValidation,
} from "../../utils/validation";

export default function Input({ id, onFocus, ...props }) {
  const { register, control, formState } = useFormContext();
  const { _formValues } = control;
  const { errors } = formState;
  const userData = useSelector((state) => state.userData.userData);
  function onChange() {}
  return (
    <input
      className={errors[id] && "active"}
      onChange={onChange}
      onFocus={() => onFocus(id)}
      {...register(id, {
        validate: {
          Name: (fieldvalue) => {
            if (id === "firstname" || id === "lastname") {
              return fieldvalue !== "" || `What's your ${id}?`;
            }
          },
          Email: (fieldvalue) => {
            if (id === "mobile-email") {
              return emailValidation(fieldvalue, userData);
            }
          },
          Password: (fieldvalue) => {
            if (id === "password") {
              return passwordValidation(fieldvalue);
            }
          },
          ConfirmPassword: (fieldvalue) => {
            if (id === "confirm-password") {
              return confirmPassword(fieldvalue, _formValues.password);
            }
          },
        },
      })}
      {...props}
    />
  );
}
