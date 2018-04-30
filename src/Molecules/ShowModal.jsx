import React from 'react'

const ShowModal = (props) => {
  const { 
    profileImage,
    title,
    period,
    detailUrl,
    githubUrl,
    text,
    closeModal,
   } = props

  return (
    <div>
      <div className="modal-content-1" style={{display: "flex"}}>
      <img src={ profileImage } height="300px" width="500px"/>
      <div style={{ margin: 20 }}>
        <h2>{ title }</h2>
        <h2>開発期間: { period }</h2>
        <h2>詳細: <a href={ detailUrl }>{ detailUrl }</a></h2>
        <h2>Github: <a href={ githubUrl }>{ githubUrl }</a></h2>
        <font size="3" className="portfolio-text">
          {text.split("<br/>").map((m) => {
            return (
              <p style={{margin: 0}}>{m}</p>
            )
          })}
        </font>
      </div>
      </div>
      <div style={{float: "right"}}>
        <button onClick={closeModal}>close</button>
      </div>
    </div>
  );
}

export default ShowModal