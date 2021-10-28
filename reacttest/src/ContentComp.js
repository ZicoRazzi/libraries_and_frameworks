import React from 'react';


const ContentComp = props => {
  console.log('props:', props);
  return (
    <div className="content">
      <h4 className="name">{props.name}</h4>
      <p className="text">{props.message}</p>
    </div>
  )
  
}

export default ContentComp;