import { useFormContext } from "react-hook-form";

export default function Select({ identifier, id, ...props }) {
  const { register, formState, getFieldState } = useFormContext();
  const { errors } = formState;
  const { isDirty } = getFieldState(id, formState);

  return (
    <select
      className={`${errors[id] && !isDirty && "active"}`}
      {...props}
      {...register(id, {
        validate: {
          Date: () => {
            if (id) {
              return isDirty || "input a value";
            }
          },
        },
      })}
    >
      {identifier.map((identify) => (
        <option value={identify} key={identify}>
          {identify}
        </option>
      ))}
    </select>
  );
}
