
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PayBtn from '../Componets/PayBtn';

function Getdata() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.title}</Text>
        </View>
      );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
const styles = StyleSheet.create({ 

  container: {
   flex: 1, 
  }
})

export default Getdata;


