import axios from "axios";
import { useState } from "react";
import SearchArea from "../../components/SearchField/SearchArea";
import BookList from '../../components/BookList/BookList';



const BookSearch = () => {
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
    fetchBooks();
  };

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  };

  return (
    <div className="bookSearchPage">
      <SearchArea onSubmit={onSubmitHandler} onChange={onInputChange} value={searchTerm}/>
      <BookList books={books}/>
    </div>
  );
};

export default BookSearch;
