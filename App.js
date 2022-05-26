import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { Appbar, Divider } from "react-native-paper";
import MovieCard from "./components/MovieCard";

export default function App() {
  const [Loading, setLoading] = useState(false);

  const [Movies, setMovies] = useState([]);
  const [AlreadyFetching, setAlreadyFetching] = useState(false);
  console.log(AlreadyFetching);
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
    console.log(AlreadyFetching);
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
    console.log(AlreadyFetching);
    if (!AlreadyFetching) await setPage(Page + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{
          backgroundColor: "#ededed",
          borderBottomColor: "#969696",
          borderBottomWidth: 1,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Home</Text>
        <Text style={{ fontSize: 13 }}>Trending</Text>
      </Appbar.Header>
      <FlatList
        style={{ flex: 1 }}
        onEndReachedThreshold={0.2}
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
    </View>
  );
}
