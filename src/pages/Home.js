import React from 'react'

const Home = ({items}) => {
  return (
    <div className="row">
    <div className="col col-6">
      <ul className="list-group">
        {
          items.map(function (item, index) {
            return (<li key={index} className="list-group-item">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </li>)
          })
        }

      </ul>
    </div>
    <div>
    </div>
  </div>
  )
}

export default Home