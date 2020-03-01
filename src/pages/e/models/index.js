import { getData } from '../services';
export default {
  namespace: 'testData',
  state: {},
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getData({ payload }, { call, put }) {
      const res = yield call(getData, payload);
      const { list = [], total = 0 } = res;
      yield put({
        type: 'setState',
        payload: {
          edata: {
            list: list,
            total: total,
          },
        },
      });
      return res;
    },
  },
};
