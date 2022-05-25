import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import MovieCard from "./components/MovieCard";

export default function App() {
  const [Loading, setLoading] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [AlreadyFetching, setAlreadyFetching] = useState(false);
  const [Page, setPage] = useState(1);
  console.log(Page);
  useEffect(() => {
    setLoading(true);
    fetchMoviesJSON().then((movies) => {
      if (movies !== []) setAlreadyFetching(false);
      setMovies([...Movies, ...movies]);
    });
    setLoading(false);
  }, [, Page]);

  async function fetchMoviesJSON() {
    if (!AlreadyFetching) {
      await setAlreadyFetching(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=5e43505c5265e934ae3bb19754ca21d3&page=${Page}`
      );

      const movies = await response.json();

      return movies.results;
    } else return [];
  }
  const handleEndReached = async () => {
    if (!AlreadyFetching) await setPage((Page) => Page + 1);
  };

  return (
    <SafeAreaView>
      <FlatList
        onEndReachedThreshold={0}
        onEndReached={handleEndReached}
        data={Movies}
        extraData={Loading}
        keyExtractor={(movie) => movie.id}
        ListFooterComponent={() =>
          Loading ? null : (
            <ActivityIndicator size={"large"} animating></ActivityIndicator>
          )
        }
        renderItem={({ item }) => <MovieCard movie={{ ...item }}></MovieCard>}
      ></FlatList>
      <StatusBar barStyle="default"></StatusBar>
    </SafeAreaView>
  );
}
