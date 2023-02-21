import UpdateBook from "../update-book/UpdateBook";
import "./Book.css"
function Book (props) {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                'url(' +props.book.image +')',
                        }}
                    ></div>
                <UpdateBook book ={props.book}/>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
            </div>
        </li>)
}
export default Book;