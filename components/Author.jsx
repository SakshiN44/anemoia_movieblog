import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-backgrounddark bg-opacity-30">
        <div className="absolute left-0 right-0 -top-14">
          <Image
            alt={author.name}
            unoptimized
            height="80px"
            width="80px"
            className="align-middle rounded-full"
            src={author.photo.url}
          />
        </div>
        <h3 className="text-2xl text-mtitle ml-2 mb-4 font-title">{author.name}</h3>
        <p className="text-text ml-2 font-text">{author.bio}</p>
      </div>
    )
}

export default Author
