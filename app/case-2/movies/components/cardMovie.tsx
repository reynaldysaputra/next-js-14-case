interface ICardMovie {
  urlImage: string,
  textMovie: string
}

function CardMovie({urlImage, textMovie}: ICardMovie) {
  return (
    <div className="rounded-sm border-2 w-full md:w-2/12 cursor-pointer">
      <img 
        src={urlImage}
        className="bg-contain w-full"
      />
      <div className="p-3">
        {textMovie}
      </div>
    </div>
  )
}

export default CardMovie