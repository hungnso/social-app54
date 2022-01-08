import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Form, Button } from 'react-bootstrap';
import request from '../../Api/request'

export default function ProfileItemEdit({
  title,
  rule,
  content,
  type = 'text',
  handleSubmitData
}) {
  const [status, setStatus] = React.useState('hiden')

  const EditPassword = () => {
    const [message, setMessage] = React.useState('')
    // const [successMessage, setSuccessMessage] = React.useState('')
    const schema = yup.object({
      currentPassword: yup.string().min(6).required(),
      newPassword: yup.string().min(6).required(),
      cfPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Confirm passwords must match')
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = async (data) => {
      try {
        const res = await request({
          url: '/auth/update/password',
          method: 'PUT',
          data
        })
        if(res.data){
          setMessage('Password change successfully!')
        }
      } catch (error) {
        console.log('render')
        setMessage('Password change failed')
      }
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2 mb-2">It's a good idea to use a strong password that you're not using elsewhere</div>
        <div className="d-flex mb-3">
          <label htmlFor="inputCurrentPassword" className="form-label col-3">Current</label>
          <div>
            <input
              type="password"
              className={`form-control ${errors.currentPassword ? 'is-invalid' : ''}`}
              id="inputCurrentPassword"
              {...register('currentPassword', { required: true })} />
            {errors.currentPassword && <div className="invalid-feedback">{errors.currentPassword?.message}</div>}
          </div>
        </div>
        <div className="d-flex mb-3">
          <label htmlFor="inputNewPassword" className="form-label col-3">New</label>
          <div>
            <input
              type="password"
              className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
              id="inputNewPassword"
              {...register('newPassword', { required: true })} />
            {errors.newPassword && <div className="invalid-feedback">{errors.newPassword?.message}</div>}
          </div>
        </div>
        <div className="d-flex mb-3">
          <label htmlFor="inputCfPassword" className="form-label col-3">Confirm</label>
          <div>
            <input
              type="password"
              className={`form-control ${errors.cfPassword ? 'is-invalid' : ''}`}
              id="inputCfPassword"
              {...register('cfPassword', { required: true })} />
            {errors.cfPassword && <div className="invalid-feedback">{errors.cfPassword?.message}</div>}
          </div>
        </div>
        <div className={message==='Password change successfully!'? 'text-success mb-2':"text-danger mb-2"}>{message}</div>
        {/* <div className="text-success mb-2">{successMessage}</div> */}
        <div>
          <button className="btn btn-primary">Save Changes</button>
          <span
            className="btn btn-light"
            onClick={() => setStatus('hiden')}
          >Cancel</span>
        </div>
      </form>
    )
  }

  const EditOther = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      handleSubmitData(data)
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type={type}
            className={`form-control ${errors[rule] ? 'is-invalid' : ''}`}
            defaultValue={content}
            {...register(rule, { required: true })}
          />
          {errors[rule]?.type === 'required' && <div className="invalid-feedback">field invalid</div>}
        </div>
        <div>
          <button className="btn btn-primary" size='sm'>Save Changes</button>
          <span
            className="btn btn-light"
            onClick={() => setStatus('hiden')}
          >Cancel</span>
        </div>
      </form>
    )
  }

  const EditGender = () => {
    const [gender, setGender] = React.useState('male')
    const handleSubmit = () => {
      const data = { gender }
      handleSubmitData(data)
    }
    return (
      <div>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setGender(e.target.value)}
          size="sm"
          defaultValue={gender}
        >
          <option value="male"  >Male</option>
          <option value="female" >Female</option>
          <option value="orther">Orther</option>
        </Form.Select>
        <div>
          <Button
            variant="primary"
            size='sm'
            onClick={handleSubmit}
          >Save Changes</Button>
          <Button
            variant="light"
            size='sm'
            onClick={() => setStatus('hiden')}
          >Cancel</Button>
        </div>
      </div>
    )
  }


  const renderItem = () => {
    if (status === 'hiden') {
      return (
        <>
          <span className='flex-grow-1 text-secondary'><b>{content || ' Change password'}</b></span>
          <span
            className="btn text-primary"
            onClick={() => setStatus('show')}
          >   
            Edit
          </span>
        </>
      )
    }
    if (status === 'show') {
      return (
        title === 'PassWord' ? <EditPassword /> :
          title === 'Gender' ? <EditGender /> :
            <EditOther />
      )
    }
  }

  return (
    <div className={status === 'show' ? 'd-flex px-3 py-2 container bg-white' : 'd-flex align-items-center px-3 py-2 container border-bottom'}>
      <div className='col-3'><b>{title}</b></div>
      <div className='col-9 d-flex align-items-center'>
        {renderItem()}
      </div>
    </div>
  )
}