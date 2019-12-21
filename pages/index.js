import React from 'react'
import ArticleList from '../components/Article/Index'
// import { loadAwricles } from '../store/reducers/Article'

function Index() {
  return (
    <div>
      <ArticleList />
    </div>
  )
}

Index.getInitialProps = ({ reduxStore }) => {
  // reduxStore.dispatch(loadAwricles())

  // const state = reduxStore.getState();
  // console.log(state);

  return {}
}

export default Index
