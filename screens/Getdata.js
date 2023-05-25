import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import BtnsCard from '../Componets/Btns';
const Getdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteUser = async (id) => {
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    // console.warn(`${url}/${id}`);
    try {

      const url = 'https://jsonplaceholder.typicode.com/posts';
      let result = await fetch(`${url}/${id}`, {
        method: 'delete'
      });
      result = await result.json();
      if (result) {
        console.warn('user deleted');
        fetchData();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, padding: 10, }}>
      <Text style={styles.id}>{item.id}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body} >{item.body}</Text>
      <BtnsCard Btns="delete" onPress={() => deleteUser(item.id)}
      />
      <BtnsCard Btns="Update"
      />
    </View>
  );


  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>Data about My app</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 10,
    backgroundColor: `#526D82`,
    borderRadius: 20,
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  id: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    color: `#2c2b3f`
  },
  body: {
    fontSize: 15,
    textAlign: 'center',
    color: `#2c2b3f`
  },
  btn: {
    flex: 1,
    padding: 15,
    backgroundColor: `#2c2b3f`,
    color: 'white',
  }
})
export default Getdata;
