import { getMoviesAction } from '@/lib/action'
import React from 'react'
import CardMovie from './components/cardMovie'

async function Movies({searchTextMovie}: {searchTextMovie: string}) {
  const movies: any = await getMoviesAction(searchTextMovie === undefined ? "naruto" : searchTextMovie);

  if(!movies.length) throw new Error("Error movies!!!");

  return (
    <div className="flex justify-center">
      <div className="w-[80%] p-5 flex justify-items-start flex-wrap gap-8">
        {movies?.length ? (
          movies?.map((movie: any) => (
            <CardMovie
              key={movie.mal_id}
              urlImage={movie.images.jpg.large_image_url}
              textMovie={movie.title}
            />
          ))
        ) : <h3>Movies tidak ditemukan!</h3>}        
      </div>
    </div>
  )
} 

export default Movies