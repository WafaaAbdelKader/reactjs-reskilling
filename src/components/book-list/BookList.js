
import { useEffect, useState } from "react";
import Book from "../book/Book";
import Shelf from "../shelf/Shelf";
import { useDispatch, useSelector } from 'react-redux';
import {booksActions} from "../../store";
import {getAll} from "../../BooksAPI";
import { Link } from "react-router-dom";
import "./BookList.css";

 function BookList() {
    const [showLoading, setShowLoading] = useState(true);
    const books = useSelector(state => state.books)
    const dispatch = useDispatch();
  
  useEffect(()=> {  
    let payload;
    getAll().then((data) =>{
      setShowLoading(false);
      payload= data.books
      payload = payload.map(book=> ({
        title: book?.title,
        image: book?.imageLinks.thumbnail,
        authors: book?.authors.join(', '),
        shelf: book?.shelf,
        id: book?.id
      }));
      dispatch(booksActions.getBooks(payload));
    });
    
  },[showLoading,setShowLoading, dispatch]);
  return (<div>
   {!showLoading ? (
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
             <Shelf header='Read'>
                  <ol className="books-grid">
                    {books.length> 0 && books.map(book => {
                      return book.shelf==='read' ? (<Book key ={book.id} book={book}/>):  null
                      
                    })}
                  </ol>
                </Shelf>
              <Shelf header='Currently Reading'>
                  <ol className="books-grid">
                  {books.length> 0 && books.map(book => {
                      return book.shelf==='currentlyReading' ? (<Book key ={book.id} book={book}/>):  null
                      
                    })}
                  </ol>
                </Shelf>
                <Shelf header='Want to Read'>
                  <ol className="books-grid">
                  {books.length> 0 && books.map(book => {
                      return book.shelf==='wantToRead' ? (<Book key ={book.id} book={book}/>):  null
                      
                    })}
                  </ol>
                </Shelf>
            </div>
          </div>
          <div className="open-search">
          
            <Link className="link" to="/search">Add a book</Link>
          </div>
        </div>
      ): (<div>Loading .......</div>)}
    </div>)

}
export default BookList;