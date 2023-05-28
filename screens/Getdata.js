import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button,Modal } from 'react-native';
import { InputFiled, InputFieldsPassword } from '../Componets/InputFields';
import BtnsCard from '../Componets/Btns';
const Getdata = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData
  }, []);
  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    
  };


  const deleteUser = async (id) => {
      const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
      let result = await fetch(`${url}/${id}`, {
        method: 'DELETE'
       
      });

      
      result = await result.json();
      
      if (result) {
        console.warn("User deleted");
        fetchData
      }
  }


  const renderItem = ({ item }) => (
    <View style={{ flex: 1, padding: 10, }}>
      <Text style={styles.id}>{item.name}</Text>
      <Text style={styles.title}>{item.email}</Text>
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
    textAlign: 'center',
    color: `#2c2b3f`,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 20,
    fontWeight: 'bold',
    color: `#2c2b3f`,
    textAlign: 'center'
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
  },
  modalView:{
    alignItems:'center',
flex:1,
justifyContent:'center'
  },
  modalView2:{
    backgroundColor: 'black',
padding: 20,
borderRadius:30,
shadowColor:`#2c2b3f`,
shadowOpacity:0.50
  }
})
export default Getdata;