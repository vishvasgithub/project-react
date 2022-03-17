import Header from "./Header";
import CharacterList from "./CharacterList";
import IndividualCharacter from "./IndividualCharacter";
import Pagination from "./Pagination";
import Search from "./Search";
import Loader from "./Loader";
import DataContext from "./DataContext";
import { useContext } from "react";
import "./App.css";

function App() {
  const { loading, characters, showIndividual } = useContext(DataContext);
  return (
    <>
      <Header />
      <Search />
      {showIndividual ? (
        <IndividualCharacter />
      ) : loading ? (
        <Loader />
      ) : (
        <CharacterList />
      )}
      {characters.length === 0 ? null : !showIndividual ? <Pagination /> : null}
    </>
  );
}

export default App;