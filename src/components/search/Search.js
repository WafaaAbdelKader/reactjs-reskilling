import "./Search.css";
import { Link } from "react-router-dom";
import {search} from "../../BooksAPI";
import {booksActions} from "../../store";
import { useDispatch, useSelector } from 'react-redux';
import Book from "../book/Book";
import { useState } from "react";
function Search () {
    const dispatch = useDispatch();
    const [showLoading, setShowLoading] = useState(true);
    const searchedBooks = useSelector(state => state.searchedBooks)
    const handleClick = (event)=> {
        const query = event.target.value;
        if (query) {
            search(query).then(res=> {
                setShowLoading(false)
                const payload = Array.isArray(res)? res.map(book=> ({
                    title: book?.title,
                    image: book.imageLinks?.thumbnail,
                    authors: book.authors?.join(', '),
                    shelf: book?.shelf,
                    id: book?.id
                  })):[];
                dispatch(booksActions.search(payload));
            })
        }else {
            dispatch(booksActions.search([]));
        }

    }
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          
          <div className="search-books-input-wrapper">
            <input onChange={handleClick}
              type="text"
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
       {!showLoading? ( <div className="search-books-results">
          <ol className="books-grid">
          {searchedBooks?.length> 0 && searchedBooks?.map(book => {
                return<Book key ={book.id} book={book}/>   
            })}
          </ol>
        </div>): ''}
      </div>
    );
}
export default Search;
     