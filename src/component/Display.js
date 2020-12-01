import React from 'react';
import Modal from './Modal';
import { BiHighlight, BiLike, BiX } from "react-icons/bi";

function Display(props) { 
  const ideas =  props.ideas.map(idea => {
    return (
      <section className="idea-box" key={idea.id} id={idea.id}>
        <nav className="box-nav">
          <BiLike className="box-icon" style={idea.isFav && {color: "rgb(228, 110, 13)"} } onClick={() => props.fav(idea.id)}/>
          <BiX className="box-icon" onClick={() => props.remove(idea.id)}/>
        </nav>
        <section className="box-content">
          <p>Idea Title: {idea.title}</p>
          <p>Idea Body: {idea.body}</p>
          {idea.comment && <p>Comment: {idea.comment}</p>}
        </section>
        <section className="box-comment">
          <BiHighlight className="box-icon"/>
          <button onClick={() => props.openComment(idea.id)}><strong>Comment</strong></button>
        </section>
      </section>
    )
  })
  
  return (
      <section className="display-ideas">
        {ideas}
        {props.commentId && 
        <Modal 
          id={props.commentId} 
          closeComment={props.closeComment} 
          addComment={props.addComment}
        />}
      </section>
  )
  
}

export default Display