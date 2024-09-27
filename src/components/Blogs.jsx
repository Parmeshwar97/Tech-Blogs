import React, { useContext } from "react";
import Spinner from "./Spinner";
import Cards from "./Cards";
import { AppContext }from "../context/AppContext";

export default function Blogs() {
  const { loader,posts } = useContext(AppContext);
  console.log(loader);
  
  
  return (
    <div className="w-1/3 flex flex-col items-center justify-center  gap-y-6">
      {loader ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>Post Not Found</div>
      ) : (
        posts.map((post) => <Cards key={post.id} post={post}/>)
      )}
    </div>
  );
} 
 