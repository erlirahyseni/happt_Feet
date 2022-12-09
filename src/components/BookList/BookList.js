import BookCard from "../../components/BookCard/BookCard";
import "./BookList.css";

const BookList = (props) => {
  return (
    <div className="bookList">
      {props.books.items.map((book, index) => {
        return (
          <BookCard
            key={index}
            image={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
            title={book.volumeInfo.title}
            publishDate={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
};

export default BookList;
