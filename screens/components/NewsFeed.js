import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import * as rssParser from 'react-native-rss-parser';

const NewsFeed = () => {
  let news = [{ title: "News Title", description: "News text"}];

  const getNews = async () => {
     fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        news = [...news, rss.items];
      });
  }

  getNews();

    return (
      <View>
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
          initialNumToRender={5}
          windowSize={11}
          />
          <Text>{ably}</Text>
      </View>
    )
}

export default NewsFeed;