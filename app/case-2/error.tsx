'use client'
 
export default function ErrorMovies({
  error,
  reset,
}: {
  error?: Error
  reset?: () => void
}) {
  return (
    <div>
      <h1>{error?.message}</h1>
      <h2>Something went wrong!</h2>
      <button>Try again</button>
    </div>
  )
}