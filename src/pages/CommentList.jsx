import { MessageSquareText } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const apiurl = "https://dummyjson.com/comments/";
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, []);

  return (
    <>
      <div className="h-72 flex justify-center items-center">
        <h1 className="font-bold text-5xl">
          <MessageSquareText /> Here is the comment of our viewers
        </h1>
      </div>
      <div className="gap-8 p-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {comments.map((comment) => (
          <div key={comment.id} className="card bg-base-300">
            <div className="card-body">
              <div className="avatar flex justify-center">
                <div className="w-24 rounded">
                  <img src="https://robohash.org/kev" />
                </div>
              </div>
              <h2 className="card-title flex justify-center font-extrabold">
                {comment.user.fullName}
              </h2>
              <h4 className="card-title flex justify-center font-light text-xs">
                username: {comment.user.username}
              </h4>
              <p className="font-bold text-center">Comments:</p>
              <p className="py-1 text-center font-semibold">{comment.body}</p>
              <div className="card-actions flex justify-center">
                <Link to={"/detail/" + comment.id} className="btn btn-primary">
                  More Details{`-->`}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
