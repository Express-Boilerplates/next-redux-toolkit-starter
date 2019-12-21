import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ArticleSlice = createSlice({
  name: 'Article',
  initialState: { loading: true, articles: [] },
  reducers: {
    loading(state, { payload }) {
      state.loading = payload
    },

    index(state, { payload }) {
      state.articles = payload
    }
  }
})

export const loadAwricles = () => async dispatch => {
  dispatch(loading(true))

  try {
    let { data: payload } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    dispatch(index(payload))
    dispatch(loading(false))
  } catch (error) {
    console.log(error.message)
  }
}

export const { index, store, loading } = ArticleSlice.actions
export default ArticleSlice.reducer
