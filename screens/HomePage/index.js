import React from 'react';
import { Text, Image, View } from 'react-native';
import { NewsFeed } from '../components'
import styles from './styles';

const homeData = require('../../data/home.json');


const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.pageTitle}>{homeData.CompanyName}</Text>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.descrLabel}>{homeData.CompanyDescription}</Text>
      <Text style={styles.newsFeedTitle}>News Feed</Text>
      <NewsFeed />
    </View>
  );
};

export default HomeScreen;