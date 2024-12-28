import React, { useEffect, useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import GetMovie from "./GetMovie";

const SearchMovie = () => {
  const [movieData, setMovieData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=73126c9f0bbb4db9d5f7b357b28f3592&query=${query}`
    : "https://api.themoviedb.org/3/discover/movie?api_key=73126c9f0bbb4db9d5f7b357b28f3592";

  console.log(apiUrl);

  const setApiData = async () => {
    setLoading(true);
    try {
      const promise = await fetch(apiUrl);
      const data = await promise.json();
      console.log(data);
      setMovieData(data.results || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setApiData(query);
  }, [query]);
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="h-[500vh] bg-[#ffecd1] pt-[2rem] flex flex-col items-center">
      <div className="flex relative">
        <input
          className="h-[2.9rem] w-[30rem]  rounded-[10px] px-[1rem]
            py-1 text-[1.2rem] text-[600]"
          placeholder="Search Movies"
          value={query}
          type="text"
          onChange={handleSearchChange}
        />
        <button className="text-[2.5rem] flex absolute right-[0.4rem] top-[4px]">
          <IoSearchCircleSharp />
        </button>
      </div>
      <section className="pt-[2rem]">
        <div className="grid grid-cols-4 gap-[1rem]">
          {loading ? (
            <div className="text-[1.2rem] font-[600] px-[12px] pt-[1rem]">
              Loading...
            </div>
          ) : movieData.length > 0 ? (
            movieData.map((curMovie, index) => {
              return (
                <div key={index}>
                  <GetMovie movie={curMovie} />
                </div>
              );
            })
          ) : (
            <div className="text-[1.3rem] font-[600] text-red-500">
              No results found !
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchMovie;
