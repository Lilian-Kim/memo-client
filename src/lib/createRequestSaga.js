import { call, put } from 'redux-saga/effects'
import { startLoading, finishLoading } from 'modules/loading'


export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`
    return [type, SUCCESS, FAILURE]
}
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return function*(action) {
    yield put(startLoading(type))
    try {
      const response = yield call(request, action.payload)//리퀘스트 함수, 리퀘스트에 action.payload 
      yield put({
        type: SUCCESS,//액션 타입
        payload: response.data,
        meta: response,
        // token: response.data.data.token
      }) // success 액션 발생 dispatch
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      })
    }
    yield put(finishLoading(type))
  }
}
