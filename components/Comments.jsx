import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug).then((result) => {
          setComments(result);
        });
      }, []);

    return (
        <>
            {comments.length > 0 && (
                <div className="bg-backgrounddark shadow-lg rounded-lg p-8 pb-12 mb-8">
                    <h3 className="text-2xl mb-8 text-mtitle font-title border-b pb-4">
                        {comments.length}
                        {' '}
                        Comments
                    </h3>
                        {comments.map((comment) => (
                            <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
                                <p className="mb-4">
                                    <span className="text-text ml-2 font-semibold text-lg pb-6">{comment.name}</span>
                                    {' '}
                                    on
                                    {' '}
                                    {moment(comment.createdAt).format('MMM DD, YYYY')}
                                </p>
                                <p className="whitespace-pre-line text-text ml-2 font-medium text-small pb-6 w-full">{parse(comment.comment)}</p>
                            </div>
                        ))}
                </div>
            )}
        </>
    )
}

export default Comments
