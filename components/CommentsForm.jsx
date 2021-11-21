import React, { useRef, useState, useEffect } from 'react'
import { submitComment } from '../services';


const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        setLocalStorage(window.localStorage);
          nameEl.current.value = window.localStorage.getItem('name');
          emailEl.current.value = window.localStorage.getItem('email');
      }, []);

    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if (!name || !email || !comment) {
            setError(true);
            return;
        }
        const commentObj = {
            name,
            email,
            comment,
            slug,
        };

        if (storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } 
        else {
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('email');
        }

        submitComment(commentObj).then((res) => {
            setShowSuccessMessage(true);

            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 3000);
        });

    };

    return (
        <div className="bg-backgrounddark shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-2xl mb-8 text-mtitle font-title border-b pb-4">Leave a Reply</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea 
                    autoFocus={true} 
                    ref={commentEl} 
                    className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-backgrounddark bg-background bg-opacity-80 text-text" 
                    name="comment" 
                    placeholder="Comment" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input 
                    type="text" 
                    ref={nameEl} 
                    className="py-2 px-4 outline-none w-full rounded-lg h-14 focus:ring-2 focus:ring-backgrounddark bg-background bg-opacity-80 text-text" 
                    placeholder="Name" 
                    name="name" />
                <input 
                    type="email" 
                    ref={emailEl}
                    className="py-2 px-4 outline-none w-full rounded-lg h-14 focus:ring-2 focus:ring-backgrounddark bg-background bg-opacity-80 text-text" 
                    placeholder="Email" 
                    name="email" />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
                    <label className="text-text ml-2 pb-6 ml-2" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
                </div>
            </div>
            {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
            <div className="mt-8">
                <button 
                type="button" 
                onClick={handleCommentSubmission} 
                className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-title rounded-full text-text px-4 py-4 cursor-pointer">
                Post Comment
                </button>
                {showSuccessMessage && <span className="font-title text-mtitle text-xl ml-2">Comment submitted for review</span>}
            </div>
        </div>
    )
}

export default CommentsForm
