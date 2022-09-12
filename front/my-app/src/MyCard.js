import React from 'react'
import Button from 'react-bootstrap/Button';

const MyCard = ({product,i}) => {
  return (
      <div className="col">
          <div className="card shadow-sm">
              <img src={`https://picsum.photos/200}`}></img>
              <div className="card-body">
                  <p className="card-text">text</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      <Button variant="primary" onClick={() => data_delete( book.id )}>Delete</Button>
                      <Button variant="primary" onClick={() => upd( book.id )}>Update</Button>
                      </div>
                      <small className="text-muted">9 mins</small>
                  </div>
              </div>
          </div>
      </div>
  )
}


export default MyCard