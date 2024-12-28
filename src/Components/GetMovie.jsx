import React from "react";

const GetMovie = ({ movie }) => {
  return (
    <div
      className="h-[37rem] py-[4px] flex items-center justify-start flex-col 
    w-[18rem] border-2 border-white rounded-md shadow-lg"
    >
      <h1 className=" font-[600] text-[1.3rem] ">{movie.title}</h1>
      <img
        className="h-[20rem] rounded-md pt-[3px] mt-[3px]"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />

      <p className="text-[1.1rem] font-[600]">
        Relaese Date: {movie.release_date}
      </p>
      <p className="text-[1.1rem] text-[600]">Popularity: {movie.popularity}</p>
      <p className="font-[600]">Rating: {movie.vote_average}</p>
      <p className="font-[600]">Rating Count: {movie.vote_count}</p>
      <button className="px-3 py-1 mt-[1rem] font-[700] text-[1.1rem] rounded-md
       bg-[#fb5607] text-white"
       onClick={() => window.open(`https://www.themoviedb.org/movie/${movie.id}`)}
       >
        Play Now
      </button>
    </div>
  );
};

export default GetMovie;
