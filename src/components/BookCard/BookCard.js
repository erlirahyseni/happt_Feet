import './BookCard.css';

const BookCard = (props) => {
    return ( 
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className='description'>
                <h1>{props.title}</h1>
                <p>{props.publishDate}</p>
            </div>
        </div>
     );
}
 
export default BookCard;