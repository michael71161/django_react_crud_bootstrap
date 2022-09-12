import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import MyCardSamp from './MyCardSamp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


 
function Samp() {
    const SERVER_URL = "http://127.0.0.1:8000/books"
    const [desc, setdesc] = useState("")
    const [author, setauthor] = useState("")
    const [year, setyear] = useState(0)
    const [books, setbooks] = useState([])
    const notify = () => toast.success("Getting Data From Sever !")
    const notifyadd = () => toast.success("Adding Data to Sever !press on get data from server to see changes")

 
    useEffect(() => {
        console.log("call the server")
        show()
        show()
    }, [])
 
    const add2Server = () => {

        const book = { desc: desc, author: author, year: year };
        axios.post(SERVER_URL, book)
        show()
        show()
    }
 
    const show = () => {
        
        axios.get(SERVER_URL).then(response => setbooks(response.data));
    }
    const data_delete = (id) => {
        axios.delete(`${SERVER_URL}/${id}`)
        show()
        show()
    }
    const upd = (id) => {
        const book = { desc: desc, author: author, year: year };
        console.log(id)
        axios.put(`${SERVER_URL}/${id}`, book)
      .then((response) => { console.log(response.data); });
      show()
      show()
    }
 
 
    return (
        <div className="App">
            <NavBar book={books} getall={show}> </NavBar>
            
            
            <hr></hr>
            desc:<input onChange={(e) => setdesc(e.target.value)} /> &nbsp;
            author:<input onChange={(e) => setauthor(e.target.value)} /> &nbsp;
            year:<input onChange={(e) => setyear(e.target.value)} /> &nbsp;
            <Button variant="primary" onClick={() =>{add2Server();notifyadd()}}
            >Add data to server</Button> <ToastContainer  position="top-center" autoClose={7000} /> 
           
            <Button variant="success" onClick={() => {
              notify()
              show()}}
              >get data from server</Button>
              <ToastContainer  position="top-center" autoClose={7000} />

            <br/>
            <hr>
            
            </hr>
            
            <div className="container">
             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">
             {books.map((book,ind)=> <MyCardSamp update={upd} delete={data_delete} book={book} i={ind}></MyCardSamp> )}
              </div>
             </div>
            
            
            
 
           
        </div>
    );
}
 
export default Samp;
