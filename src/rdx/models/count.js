// https://rematch.gitbooks.io/rematch/#getting-started

export default {
  state: 0,
  reducers: {
    increment: (state, payload) => state + payload
  },
  effects: dispatch => ({
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    }
  })
};
