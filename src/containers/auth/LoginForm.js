import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changeField, initializeForm, login } from 'modules/auth.js'
import AuthForm from 'components/auth/AuthForm'
import { check } from 'modules/user'

const LoginForm = ({ history }) => {
  const dispatch = useDispatch()
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }))
  //인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    )
  }

  const onSubmit = e => {
    e.preventDefault()
    const { email, password } = form
    dispatch(login({ email, password }))
  }

  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch])

  useEffect(() => {
    if (authError) {
      console.log('오류발생')
      console.log(authError)
      return
    }
    if (auth) {
      console.log('로그인성공')
      dispatch(check())
    }
  }, [auth, authError, dispatch])

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [history, user])

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

export default withRouter(LoginForm)
