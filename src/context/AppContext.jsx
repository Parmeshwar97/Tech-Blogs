//!Step-1 Context Api Creation
import { createContext, useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

//! Context Data Creation
 export default function AppContextProvider({ children }) {
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchPost(page = 1) {
    setLoader(true);
    let url = `${baseUrl}?page=${page}`;    
    try {
      let res = await fetch(url);
      let apiData = await res.json();
      console.log(apiData);
      setPage(apiData.page);
      setPosts(apiData.posts);
      setTotalPages(apiData.totalPages);
      
    } catch (err) {
      console.log('Error in fetching data!',err);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoader(false)
  }
  function handlePageChange(page){
    setPage(page);
    fetchPost(page);
  }

  useEffect(()=>{
    fetchPost();
  },[])
  

  //! Context Data wrapper
  const data = {
    loader,
    page,
    posts,
    totalPages,
    setLoader,
    setPage,
    setTotalPages,
    setPosts,
    handlePageChange
  };

  //!  Step-2 Context Provider Creation 
  //!  Sending the Text data to it's children
  //*  This is basic syntax

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

//! Step-3 Now we will create consumer By Using useContext.