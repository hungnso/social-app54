import React from "react";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import request from "../../Api/request";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
}).required();

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async data => {
    try {
      const res = await request({
        method: 'POST',
        url: '/auth/login',
        data: data
      })
      const token = res.data.token
      localStorage.setItem('token', token);
      alert(res.message)

    } catch (error) {
      alert('Đăng nhập thất bại!')
    }
  }

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" >
      <div className='col-6'>
        <img src={require('../../img/anh.png')} className="w-75"/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="col-md-4 col-6">
        <h2 className="text-center">Login</h2>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="inputEmail"
            {...register('email', { required: true })} />
          {errors.email && <div className="invalid-feedback">{errors.email?.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="inputPassword"
            {...register('password', { minLength: 6, required: true })} />
          {errors.password && <div className="invalid-feedback">{errors.password?.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <div>
          <span>Don't have an account ?</span> <Link className="btn-link" to='/register'>Register</Link>
        </div>
      </form>
    </div>
  );
}