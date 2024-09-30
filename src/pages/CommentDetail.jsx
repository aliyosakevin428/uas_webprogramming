import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CommentDetail = () => {
  const { commentId } = useParams();
  const apiurl = "https://dummyjson.com/comments/" + commentId;

  const [comment, setComment] = useState();

  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => setComment(data));
  }, [apiurl]);

  return (
    <div className="p-6">
      <Link to={"/"} className="btn btn-primary">
        {`<--`} kembali
      </Link>

      {comment ? (
        <div className="">
          <div className="font-extrabold text-center">
            Write By : {comment.user.username}
          </div>
          <p className="py-4 text-xl font-semibold text-center">
            {comment.user.fullName}
          </p>
          <div className="avatar flex justify-center">
            <div className="w-24 rounded">
              <img src="https://robohash.org/kev" />
            </div>
          </div>
          <p className="py-2 font-bold text-center">Comments:</p>
          <p className="py-1 text-center font-bold">{comment.body}</p>
          <p className="py-2 font-semibold text-center">
            Likes: {comment.likes}
          </p>
          <div className="flex justify-between">
            <Link
              to={`/detail/${parseInt(commentId) - 1}`}
              className="btn btn-primary">
              Prev page
            </Link>
            <Link
              to={`/detail/${parseInt(commentId) + 1}`}
              className="btn btn-primary">
              Next page
            </Link>
          </div>
        </div>
      ) : (
        <>Loading data</>
      )}
    </div>
  );
};

export default CommentDetail;
