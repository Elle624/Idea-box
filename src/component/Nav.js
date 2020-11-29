import React from 'react';

function Nav(props) {
  return (
    <nav className="left-side">
      <section className="title-section">
        <h1>IdeaBox</h1>
      </section>
      <section className="filter">
        <h2>Filter Starred Ideas</h2>
        {props.showFav ? <button onClick={props.StarredIdea}>Show All Ideas</button> : <button onClick={props.StarredIdea}>Show Starrred Ideas</button> }
      </section>
      </nav>
  )
}

export default Nav