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
          <Text
            style={{ fontSize: 20, fontWeight: "bold" }}
            // style={theme === "light" ? styles.title_light : styles.title_dark}
          >
            {/* {news.title} */}
            {movie.title}
          </Text>
          <Text
          // style={theme === "light" ? styles.text_light : styles.text_dark}
          // numberOfLines={3}
          >
            {/* {news.content} */}
            {movie.overview}
          </Text>
        </Card.Content>
        <Card.Actions>
          {/* <Button style={{ alignSelf: "flex-end" }}>
            <Text>Fart</Text>
          </Button>
          <Button
            mode={"contained"}
            style={{ alignSelf: "flex-end", marginLeft: 5 }}
          >
            <Text>aha</Text>
          </Button> */}
        </Card.Actions>
      </Card>
      <Divider></Divider>
    </View>
  );
};

export default MovieCard;
