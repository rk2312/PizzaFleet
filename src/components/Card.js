import React from 'react'
import { Link } from 'react-router-dom';
export default function Card() {
  return (
    <div>
         <div className="card mt-5" style={{ width: '300px' }} >
          <img src="https://www.dominos.co.in/files/items/Peppy_Paneer.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" style={{ fontSize: '12px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='container'>
              <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })}
              </select>
              <select className='m-2 h-10 bg-success rounded'>
                <option value="half">half</option>
                <option value="medium">medium</option>
                <option value="full">full</option>
              </select>
              <div className='d-inline' style={{fontSize:'20px'}}>
                Total price:
              </div>
            </div>
            <Link to="#" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
    </div>
  )
}
