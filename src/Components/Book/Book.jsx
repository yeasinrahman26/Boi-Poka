import { key } from "localforage";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId, author, image, bookName, tags, rating , category} = book;
    return (
      <Link to={`books/${bookId}`}>
        <div>
          <div className="card bg-base-100 border-2 p-5 shadow-2xl">
            <figure className="bg-base-300 rounded-2xl py-3">
              <img className="max-h-52 " src={image} alt={bookName} />
            </figure>
            <div className="card-body  space-y-3">
              <div className="card-actions justify-start">
                {tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="badge badge-outline py-3   text-green-500 font-bold"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <h2 className="card-title text-black font-bold">
                {bookName}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <h2 className="font-bold text-gray-500 ">By : {author}</h2>
              <div className="border-t-2 flex justify-between font-semibold pt-3 border-dashed">
                <h1>{category}</h1>
                <h2 className="flex items-center gap-1 ">
                  <FaStar />

                  {rating}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Book;