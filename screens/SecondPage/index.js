import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const pageData = require('../../data/second.json');

const SecondScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.pageTitle}>{pageData.PageTitle}</Text>
      <Text style={styles.descrLabel}>{pageData.PageDescription}</Text>
    </View>
  );
};

export default SecondScreen;