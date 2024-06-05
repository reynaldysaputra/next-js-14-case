"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, useTransition } from "react";
import { useDebounce } from "use-debounce";

function SearchMovie({searchTextMovie} : {searchTextMovie: string}) {
  const initialRender = useRef(true);
  const [text, setText] = useState(searchTextMovie);
  const [isLoading, startTransition] = useTransition();
  const [query] = useDebounce(text, 300);
  const route = useRouter();

  useEffect(() => {
    if(initialRender.current){
      initialRender.current = false;
      return;
    }

    if(!query){
      startTransition(() => {
        route.push(`/case-2`);
      })
    }else {
      startTransition(() => {
        route.push(`/case-2?search=${query}`);
      })
    }
  }, [query]);

  return (
    <div className="w-full h-28 mb-10 flex items-center md:justify-center px-10">
      <input 
        type="text" 
        className="w-[90%] md:w-5/12 h-10 rounded-md pl-3 border-2" 
        placeholder="Cari Film..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {isLoading && <span className="loader ml-4" />}
    </div>
  )
}

export default SearchMovie;