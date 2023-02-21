import "./Shelf.css"
function Shelf(props) {
    return (<div className="bookshelf">
        <h2 className="bookshelf-title">{props.header}</h2>
        <div className="bookshelf-books">
            {props.children}
        </div>
    </div>);
}
export default Shelf;
