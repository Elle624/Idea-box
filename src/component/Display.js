import React from 'react';
import { BiHighlight, BiLike, BiX } from "react-icons/bi";

function Display(props) {

  const favIdeas = props.ideas.filter(idea => idea.isFav === true)

  function displayIdeas(ideas) {
    return ideas.map(idea => {
      return (
        <section className="idea-box" key={idea.id} id={idea.id}>
          <nav className="box-nav">
            <BiLike className="box-icon" style={idea.isFav && {color: "rgb(228, 110, 13)"} } onClick={() => props.fav(idea.id)}/>
            <BiX className="box-icon" onClick={() => props.remove(idea.id)}/>
          </nav>
          <section className="box-content">
            <p>Idea Title: {idea.title}</p>
            <p>Idea Body: {idea.body}</p>
          </section>
          <section className="box-comment">
            <BiHighlight className="box-icon"/>
            <a href="#"><strong>Comment</strong></a>
          </section>
        </section>
      )
    })
  }
  
  return (
      <section className="display-ideas">
      {props.showFav ? displayIdeas(favIdeas) : displayIdeas(props.ideas)}
      </section>
  )
  
}

export default Display