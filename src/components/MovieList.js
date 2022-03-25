import React from 'react'
import Data from '../data.json'

function MovieList() {
  return (
        <div className="container">
          <div>
          <h3>MoiveList</h3>
              {Data.map(post => {
                return (
                  <div key={post.id} className="list">
                    
                    <img src={post.img.src} alt={post.img.alt} width="320px" height="450px"/>
                    <h1>#{post.ranking}-{post.title} ({post.year})</h1>
                    <h4>Distributor : {post.distributor}</h4>
                    <h4>Amount : {post.amount}</h4>
                  </div>
                )
              })}
          </div>
      </div>
  )
}

export default MovieList