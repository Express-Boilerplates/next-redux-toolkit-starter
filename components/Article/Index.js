import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loadAwricles } from '../../store/reducers/Article'

const Article = ({ title, body }) => (
  <article>
    <h1>{title}</h1>
    <p>{body}</p>
  </article>
)

const Index = () => {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAwricles())
  }, [])

  let { loading, articles } = useSelector(state => state.articles)

  if (loading) return <h1>Loading...</h1>

  return (
    <div className="articles">
      {articles.map(article => (
        <Article {...article} key={article.id} />
      ))}
    </div>
  )
}

export default Index
