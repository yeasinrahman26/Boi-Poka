import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

  const [books,setBooks]=useState([])
   
  useEffect(()=>{
    fetch('./../../../public/booksData.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))
  },[])

    return (
      <div className="my-10  rounded-lg">
        <h1 className="text-5xl text-center font-bold mb-10">
          Books: {books.length}
        </h1>
        <div className="grid  grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    );
};

export default Books;