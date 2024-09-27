import React from "react";

export default function Cards({ post }) {
  return (
    <div className="flex tracking-wide flex-col gap-y-1 font-semibold">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <i className="text-sm">
        <p>
          By <span>{post.author}</span> on <span>{post.category}</span>
        </p>
        <p>Posted on {post.date}</p>
      </i>
      <p>{post.content}</p>
      <div className="text-blue-700 underline">
        {post.tags.map((tag, i) => {
          return <span key={i} className="mr-1.5 text-sm">{`#${tag}`}</span>;
        })}
      </div>
    </div>
  );
}
