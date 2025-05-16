"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import MyInput from "./Input";
import { FromType } from "./types/FormType";
import { setUser, useAppDispatch } from "../store";
import { useRouter } from "next/navigation";

export default function Form() {
  const form = useForm<FromType>({
    mode: "onChange",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<FromType> = (data) => {
    dispatch(setUser(data));
    form.reset();
    router.push("/pipidaster");
  };

  const nameErr = form.formState.errors.name;
  const surnameErr = form.formState.errors.surname;
  const otchestvoErr = form.formState.errors.otchestvo;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="bg-white shadow-xl w-2/3 rounded-xl px-10 py-15
       flex flex-col justify-center gap-15"
    >
      <MyInput form={form} message=" имя" name="name" err={nameErr} />
      <MyInput form={form} message=" фамилию" name="surname" err={surnameErr} />
      <MyInput
        form={form}
        message=" отчество"
        name="otchestvo"
        err={otchestvoErr}
      />
      <button className="bg-purple-600 text-white border-2 cursor-pointer border-purple-600 p-3 rounded-lg duration-150 hover:bg-purple-700">
        Узнать
      </button>
    </form>
  );
}
