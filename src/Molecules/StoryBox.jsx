import React from 'react'

const StoryBox = ({ age, ageImage, text }) => {
  return (
    <div className="story-box">
      <h2>{age}</h2>
      <img className="story-image" src={ageImage}/>
      <div className="story-text">
        {text.split("<br/>").map((m) => {
          return (
            <p>{m}</p>
          )
        })}
      </div>
    </div>
  )
}

export default StoryBox