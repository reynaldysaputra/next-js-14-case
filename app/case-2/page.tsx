import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";
import SearchMovie from "./components/search"
import ErrorMovies from "./error";
import Movies from "./movies/index"

function Case2({
  searchParams
} : {
  searchParams: {[key: string]: string | string[] | undefined}
}) {  
  const searchTextMovie = typeof searchParams?.search === "string" ? searchParams.search : "";

  return (
    <div className="w-full min-h-screen">
      <SearchMovie searchTextMovie={searchTextMovie} />

      <ErrorBoundary fallback={<ErrorMovies />}>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Movies searchTextMovie={searchTextMovie} />
        </Suspense>  
      </ErrorBoundary> 
    </div>
  )
}

export default Case2