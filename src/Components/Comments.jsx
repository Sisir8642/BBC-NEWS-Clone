import { collection, addDoc, getDocs, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { database } from '../firebase/setup'; 

const Comments = (props) => {
  const [comments, setComments] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const addComments = async () => {
    const newsDoc = doc(database, 'News', `${props.url.substr(-10, 10)}`);
    const commentsRef = collection(newsDoc, 'Comments');
    try {
      await addDoc(commentsRef, {
        comment: comments,
      });
      setComments(''); 
      showComments(); 
    } catch (err) {
      console.log(err);
    }
  };

  const showComments = async () => {
    const newsDoc = doc(database, 'News', `${props.url.substr(-10, 10)}`);
    const commentsRef = collection(newsDoc, 'Comments');
    try {
      const data = await getDocs(commentsRef);
      setCommentsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showComments();
  }, []);

  return (
    <div className="grid grid-rows-2">
      <div className="p-5">
        <label htmlFor="Add_Comments" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Add Comments
        </label>
        <div className="flex">
          <input
            onChange={(e) => setComments(e.target.value)}
            type="text"
            id="Add_Comments"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Comments"
            value={comments}
            required
          />
          <button
            onClick={addComments}
            className="ml-2 bg-gray-50 hover:bg-slate-300 text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-bold text-lg">Comments:</h2>
        {commentsList.map((comment) => (
          <p key={comment.id} className="text-gray-800 dark:text-black">
            {comment.comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Comments;
