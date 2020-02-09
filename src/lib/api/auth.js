import client from './client'

// const token = localStorage.getItem('token')

// const _token = {
//     headers: {'Authorization' : `Bearer ${token}`}
// }
//login  -> signin
export const login = ({
        email,
        password
    }) =>
    client.post('/api/auth/sign-in', {
        email,
        password
    })

//register  -> signup
export const register = ({
        name,
        email,
        password
    }) =>
    client.post('/api/auth/sign-up', {
        name,
        email,
        password
    })

//로그인 상태 확인 -> me
export const check = () => client.get('/api/auth/me')

//로그아웃
export const logout = () => client.post('/api/auth/logout')