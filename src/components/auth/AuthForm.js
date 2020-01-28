import React from 'react'
import styled from 'styled-components'
import Button from 'components/common/Button'
import { Link } from 'react-router-dom'

// 회원가입, 로그인 폼을 보여줌

const AuthFormWrapper = styled.div``

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    border-bottom: 1px solid #555;
  }
  & + & {
    margin-top: 1rem;
  }
`

const AuthFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #333;
    text-decoration: underline;
    &:hover {
      color: #555;
    }
  }
`
const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem;
`

const textMap = {
  login: '로그인',
  register: '회원가입',
}

const AuthForm = ({ type }) => {
  const text = textMap[type]
  return (
    <AuthFormWrapper>
      <form>
      {type === 'register' && (
          <StyledInput
            name="name"
            placeholder="이름"
            type="text"
          />
        )}
        <StyledInput autoComplete="email" name="email" placeholder="이메일" />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <ButtonWidthMarginTop cyan fullWidth>
          {text}
        </ButtonWidthMarginTop>
        <AuthFooter>
          {type === 'login' ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </AuthFooter>
      </form>
    </AuthFormWrapper>
  )
}

export default AuthForm
