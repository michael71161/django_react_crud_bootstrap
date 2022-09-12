import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




const MyCardSamp = (props) => {
  const notifyupd = () => toast.success("data updated ! press on get data from server to see changes")
  const notifydel = () => toast.success("data deleted from server !press on get data from server to see changes")
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://picsum.photos/20${props.book.id}`} />
  <Card.Body>
    <h2 style={{ color: 'green' }}> <Card.Title>{props.book.desc}</Card.Title></h2>
    <Card.Text>
    <h5>  Author: {props.book.author} <br/> year: {props.book.year} </h5>
    </Card.Text>
    <div className='row '>
    <Button variant="danger" onClick={() => {notifydel(); props.delete( props.book.id )}}>Delete</Button>
    <ToastContainer  position="top-center" autoClose={7000}/> 
    <Button variant="primary" onClick={() => {notifyupd(); props.update(props. book.id )}}>Update</Button>
    <ToastContainer  position="top-center" autoClose={7000} /> 
    </div>
  </Card.Body>
</Card>
  )
}

export default MyCardSamp