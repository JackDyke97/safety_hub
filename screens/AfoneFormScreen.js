import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../navigation/AuthStack";

export default function AfoneFormScreen() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}
