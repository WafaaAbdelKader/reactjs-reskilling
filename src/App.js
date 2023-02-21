import "./App.css";
import { Fragment } from "react";
import Search from "./components/search/Search";
import BookList from "./components/book-list/BookList"
import { Routes,  Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Fragment>
        <Routes>
          <Route path="/search" element={<Search />}>
          </Route>
          <Route path="/" element={<BookList />}>
          </Route>
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
