import { FieldError, UseFormReturn } from "react-hook-form";
import { FromType } from "./types/FormType";

type InputType = {
  err: FieldError | undefined;
  form: UseFormReturn<FromType, any, FromType>;
  message: string;
  name: "name" | "surname" | "otchestvo";
};

export default function MyInput(props: InputType) {
  return (
    <div className="flex flex-col">
      {props.err && <p className="text-rose-500">{props.err?.message}</p>}
      <input
        className="border-2 border-purple-300 focus:outline-purple-600 hover:border-purple-400
        text-black rounded-lg p-3 duration-150"
        type="text"
        placeholder={`Введите${props.message}`}
        {...props.form.register(props.name, {
          required: "Это поле обязательно",
          minLength: {
            value: 2,
            message: "Введите" + props.message,
          },
        })}
      />
    </div>
  );
}
