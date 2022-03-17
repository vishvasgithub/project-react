import { createContext, useState, useEffect } from "react";
import FetchData from "./FetchData";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [prevCharacters, setPrevCharacters] = useState([]);
  const [showIndividual, setShowIndividual] = useState(false);
  const [singleChar, setSingleChar] = useState({});
  const [error, setError] = useState("Loading please wait...");
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const renderIndividualCharacter = (show, data = {}) => {
    setSingleChar(data);
    setShowIndividual(show);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const changePage = (pageNumber) => {
    setPage(pageNumber);
    setSearch("");
  };

  const searchCharacters = (str) => {
    if (str !== "") {
      const temp = prevCharacters.filter(
        (ch) =>
          ch.name.toLowerCase().includes(str.toLowerCase()) ||
          ch.nickname.toLowerCase().includes(str.toLowerCase()) ||
          ch.portrayed.toLowerCase().includes(str.toLowerCase())
      );
      if (temp.length === 0) setError("Oops! character not found");
      setCharacters([...temp]);
    } else {
      setCharacters(prevCharacters);
      setError("Loading please wait...");
    }
  };

  useEffect(() => {
    async function getCharacters() {
      setLoading(true);
      const data = await FetchData(page);
      setPrevCharacters(data);
      setCharacters(data);
      setLoading(false);
    }
    getCharacters();
  }, [page]);

  return (
    <DataContext.Provider
      value={{
        loading,
        characters,
        renderIndividualCharacter,
        error,
        page,
        changePage,
        search,
        handleSearch,
        searchCharacters,
        singleChar,
        showIndividual
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;