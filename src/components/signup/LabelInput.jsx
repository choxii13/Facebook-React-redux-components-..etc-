import { useFormContext } from "react-hook-form";

export default function LabelInput({ id, label, name, ...props }) {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <div className={`label-input ${errors[name] && "active"}`}>
      <label htmlFor={id}>{label} </label>
      <input
        className="active"
        id={id}
        {...props}
        {...register(name, { required: "please input value" })}
      />
    </div>
  );
}
