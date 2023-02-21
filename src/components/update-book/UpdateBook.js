import "./UpdateBook.css";
import {update} from "../../BooksAPI";
import {booksActions} from "../../store";
import { useDispatch } from 'react-redux';

function UpdateBook (props) {
    const book = props.book;
    const dispatch = useDispatch();
    const handleClick = (event)=> {
        update( book, event.target.value).then(res=> {
            dispatch(booksActions.updateBook({book:book, shelf:event.target.value}));
        })

    }
    return (
        <div className="book-shelf-changer">
        <select>
            <option value="none" disabled>
                Move to...
            </option>
            <option onClick={handleClick} value="currentlyReading"> Currently Reading </option>
            <option onClick={handleClick} value="wantToRead">Want to Read</option>
            <option onClick={handleClick} value="read">Read</option>
            <option onClick={handleClick} value="none">None</option>
        </select>
    </div>
    )
}
export default UpdateBook;