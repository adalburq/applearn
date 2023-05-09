import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

// formik

export default function Form10() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log("dados do formulario:", data);
  console.log("erro...:", errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" placeholder="First name" {...register("FirstName", {required: true, minLength: 5, maxLength: 11})} />
      {errors.FirstName && <p>Preencha seu primeiro nome!</p>}

      <input type="text" placeholder="Last name" {...register("LastName", {required: true, maxLength: 100})} />
      {errors.LastName && <p>Preencha seu sobrenome!</p>}

      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.Email && <p>Preencha um e-mail válido!</p>}

      <input type="tel" placeholder="Mobile number" {...register("MobileNumber", {required: true, minLength: 6, maxLength: 12})} />
      {errors.MobileNumber && <p>Preencha um telefone válido com DDD!</p>}

      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <div>
        <label>Developer</label>
        <input {...register("Developer", { required: true })} type="radio" value="Yes" />
        <input {...register("Developer", { required: true })} type="radio" value="No" />
      </div>
      {errors.Developer && <p>Informe se você é um desenvolvedor!</p>}

      <input type="submit" />
    </form>
  );
}