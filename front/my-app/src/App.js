import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';


 
function App() {
    const SERVER_URL = "http://127.0.0.1:8000/books"
    const [desc, setdesc] = useState("")
    const [author, setauthor] = useState("")
    const [year, setyear] = useState(0)
    const [books, setbooks] = useState([])
 
    useEffect(() => {
        console.log("call the server")
        show()
    }, [])
 
    const add2Server = () => {
        const book = { desc: desc, author: author, year: year };
        axios.post(SERVER_URL, book)
       // show()
    }
 
    const show = () => {
        axios.get(SERVER_URL).then(response => setbooks(response.data));
    }
    const data_delete = (id) => {
        axios.delete(`${SERVER_URL}/${id}`)
      //  show()
    }
    const upd = (id) => {
        const book = { desc: desc, author: author, year: year };
        console.log(id)
        axios.put(`${SERVER_URL}/${id}`, book)
      .then((response) => { console.log(response.data); });
     // show()
    }
 
 
    return (
        <div className="App">
            <NavBar></NavBar>
            
            
 
           <h3> Number of books:{books.length}</h3><hr></hr>
            {books.map((book, ind) => <div key={ind}>
                description: {book.desc} {", "}
                author:{book.author} {", "}
                year:{book.year}
                <Button variant="danger" onClick={() => data_delete( book.id )}>Delete</Button>
                <Button variant="primary" onClick={() => upd( book.id )}>Update</Button>
            </div>)}
            <hr></hr>
            desc:<input onChange={(e) => setdesc(e.target.value)} />
            author:<input onChange={(e) => setauthor(e.target.value)} />
            year:<input onChange={(e) => setyear(e.target.value)} />
            <Button variant="primary" onClick={() => add2Server()}>Add</Button>
            <br/>
            <hr></hr>
            <Button variant="primary" onClick={() => show()}>get data from server</Button>
        </div>
    );
}
 
export default App;
