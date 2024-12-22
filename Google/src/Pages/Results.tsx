import { useLocation } from "react-router-dom";
import { useResultContext } from "../Context/ResultContextProvider";
import { useEffect, useState } from "react";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        setSelected(location.pathname);
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        setSelected(location.pathname);
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm,location.pathname]);

  console.log(results);
  
  return <div>Results</div>;
};
