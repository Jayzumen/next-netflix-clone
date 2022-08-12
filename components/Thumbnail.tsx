import Image from "next/image";
import { Movie } from "../typing";

interface Props {
  //  movie: Movie | DocumentData;
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className='rounded-sm object-cover md:rounded'
        layout='fill'
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center whitespace-normal'>
          {movie.title || movie.name}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;