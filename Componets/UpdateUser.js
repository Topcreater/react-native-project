// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Button,Modal } from 'react-native';
// import { InputFiled, InputFieldsPassword } from '../Componets/InputFields';
// import BtnsCard from '../Componets/Btns';
// const Getdata = () => {
 
//   const [showModal, setShowModal] = useState(false);
//   const [slectedUser, setSlectedUser] = useState(undefined);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const deleteUser = async (id) => {
   
//     try {

//       const url = 'https://jsonplaceholder.typicode.com/posts';
//       let result = await fetch(`${url}/${id}`, {
//         method: 'delete',
//         headers:{
//           "Content-Type": "application/json",
       
//         },
//         body: JSON.stringify({id})
//       });
//       result = await result.json();
//       if (result) {
//         console.warn(result);
//         fetchData();
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }


//   const renderItem = ({ item }) => (
//     <View style={{ flex: 1, padding: 10, }}>
//       <Text style={styles.id}>{item.id}</Text>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.body} >{item.body}</Text>
//       <BtnsCard Btns="delete" onPress={() => deleteUser(item.id)}
//       />
//       <BtnsCard Btns="Update" onPress={() => OpenBox(item)}
//       />
//     </View>
//   );
//   const OpenBox = (data)=>{
//     setShowModal(true)
//     setSlectedUser(data)
//   }
//   <Modal visible={showModal} transparent={true}>
//  <UserModal setShowModal={setShowModal} slectedUser={slectedUser} fetchData={fetchData} />
// </Modal>
// const UserModal = (props)=>{
//   const [id, setId] = useState('');
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   useEffect(() => {
//     if (props.setSlectedUser) {
//       setId(props.setSlectedUser.id.toString());
//       setTitle(props.setSlectedUser.title);
//       setBody(props.setSlectedUser.body);

//     }
//   }, []);

//   const handleUdateData=async()=>{
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     const id = props.slectedUser.id;
//     let result = await fetch(`${url}/${id}`, {
//       method: 'Put',
//       headers:{
//         "Content Type": "application/json"
//       },
//       body: JSON.stringify({id,title,body})
//     });
//     result = await result.json();
//     if (result) {
//       console.warn(result);
//       props.fetchData();
//       props.setShowModal(false);
//     }
//   }

// return(
//   <View style={styles.modalView}>
//   <View style={styles.modalView2}>
//   <InputFiled
//           placeholder="Your ID"
//           value={id}
//       onChangeText={text => setId(text)}
//           keyboardType='default'
//           placeholderTextColor='black'
//         />
//         <InputFiled
//           placeholder="Your title"
//           value={title}
//           onChangeText={text => setTitle(text)}
//           keyboardType='email-address'
//           placeholderTextColor='black'
//         />
//         <InputFiled
//           placeholder="description"
//           value={body}
//           onChangeText={text => setBody(text)}
//           keyboardType='numeric'
//           placeholderTextColor='black'
//         />
//         <BtnsCard Btns="Submit" onPress={() => handleUdateData}
//     />
//         <BtnsCard Btns="Close" onPress={() => props.setShowModal(false)}
//     />
//   </View>
// </View>
// )
// }


//   return (
//     <View>
//       <Text style={{ fontSize: 30, textAlign: 'center' }}>Data about My app</Text>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//       />

//     </View>
//   );

// }

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 20,
//     padding: 10,
//     backgroundColor: `#526D82`,
//     borderRadius: 20,
//     marginVertical: 10,
//     width: 300,
//     alignSelf: 'center',
//     textAlign: 'center',
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   id: {
//     fontSize: 30,
//     marginLeft: 20,
//     fontWeight: 'bold',
//     color: `#2c2b3f`
//   },
//   body: {
//     fontSize: 15,
//     textAlign: 'center',
//     color: `#2c2b3f`
//   },
//   btn: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: `#2c2b3f`,
//     color: 'white',
//   },
//   modalView:{
//     alignItems:'center',
// flex:1,
// justifyContent:'center'
//   },
//   modalView2:{
//     backgroundColor: 'black',
// padding: 20,
// borderRadius:30,
// shadowColor:`#2c2b3f`,
// shadowOpacity:0.50
//   }
// })
// export {Getdata};


// const Getdata = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const saveData =async()=>{
//       console.warn(email,password);
//          const requestBody = {
//         email: email,
//         password: password
//       };
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)
  
//       });
//         const data = await response.json();
//       console.log(data);
//     }
//     return (
//       <View>
//         <Text style={{ fontSize: 30, textAlign: 'center' }}>Data about My app</Text>
//         <InputFiled
//             placeholder="Email"
//             value={email}
//             onChangeText={text => setEmail(text)}
//             keyboardType='email-address'
//             placeholderTextColor='black'
//           />
//           <InputFieldsPassword
//             placeholder="password"
//             value={password}
//             onChangeText={text => setPassword(text)}
//             placeholderTextColor='black'
//             secureTextEntry={true}
//           />
//           <BtnsCard Btns="Save data" onPress={saveData }
//           />
//       </View>
//     );
  
//   }