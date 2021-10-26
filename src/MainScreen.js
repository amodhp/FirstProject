import React, {Component, useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Modal} from 'react-native';
import Header from './Header';
import Card from './Card';
import Spinner from './Spinner';
import axios from 'axios';



function MainScreen() {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
        setTimeout(function () {
          setDatalist(response.data), setLoading(false);
        }, 1000);
      })
      .catch(error => console.log('error:', error));
  }, []);

  return (
    <View style={styles.screen}>
      <Header />

      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          data={datalist}
          renderItem={item => {
            return (
              <Card img={item.item.download_url} name={item.item.author} />
            );
          }}></FlatList>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f2c48f',
    flex: 1,
  },
});
export default MainScreen;
