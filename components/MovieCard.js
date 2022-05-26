import * as React from "react";
import { View, Share, StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Divider } from "react-native-paper";
const MovieCard = ({ movie }) => {
  return (
    <View>
      <Card
        mode="elevated"
        style={{
          flex: 1,
          padding: 1,
          backgroundColor: "white",
          flexDirection: "column",
          padding: 0,
        }}
      >
        <Card.Cover
          style={{ borderRadius: 0 }}
          source={{
            uri: "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path,
          }}
        />
        <Card.Content>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {movie.title}
          </Text>
          <Text> {movie.release_date}</Text>
          <Text numberOfLines={4}>{movie.overview}</Text>
        </Card.Content>
      </Card>
      <Divider></Divider>
    </View>
  );
};

export default MovieCard;
