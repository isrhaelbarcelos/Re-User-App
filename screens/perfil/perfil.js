import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { auth } from '../../firebase';
import * as React from 'react';
import {
  TextInput, Text, Button, Surface, Headline,
  Avatar, Caption, Appbar, Menu, Divider, Provider, List 
} from 'react-native-paper';

export function Perfil() {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <><Appbar.Header style={{ backgroundColor: '#009b00', elevation: 0, }}>
      <Appbar.Action icon="menu" />
      <Appbar.Content />
      <Appbar.Action icon="cog"/>
    </Appbar.Header>

      <ScrollView style={{ width: "100%", height: 'auto'}}>
      <Surface style={{
          height: '8%',
          backgroundColor: '#009b00',
          elevation: 0
        }}/>
        <Avatar.Image size={90} source={require('../../teste.jpg')}
          style={{  marginTop:'-10%', alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderColor: 'green', alignSelf: 'center' }} />
         <Headline  style={{  marginTop: '5%', alignSelf: 'center' }}>Isrhael Barcelos</Headline>
         <Caption style={{ alignSelf: 'center' }}>(Rhael)</Caption>

        <Surface style={{
          padding: 8,
          height: 'auto',
          width: '90%',
          elevation: 2,
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: '8%'
        }}>
          <TouchableOpacity onPress={console.log("teste")}>
          <List.Item
            title="Meus Pedidos"
            left={props => <List.Icon {...props} icon="shopping" />}
          /></TouchableOpacity><Divider />
          <TouchableOpacity onPress={console.log("teste")}>
          <List.Item
            title="Minhas Vendas"
            left={props => <List.Icon {...props} icon="sale" />}
          /></TouchableOpacity><Divider />
          <TouchableOpacity onPress={console.log("teste")}>
          <List.Item
            title="Favoritos"
            left={props => <List.Icon {...props} icon="heart" />}
          /></TouchableOpacity><Divider />
          <TouchableOpacity onPress={console.log("teste")}>
          <List.Item
            title="Doações"
            left={props => <List.Icon {...props} icon="handshake" />}
          /></TouchableOpacity><Divider />
          <TouchableOpacity onPress={console.log("teste")}>
          <List.Item
            title="Ajuda"
            left={props => <List.Icon {...props} icon="help-rhombus" />}
          /></TouchableOpacity>
        </Surface>

        <Surface style={{
          padding: 8,
          height: 'auto',
          width: '90%',
          elevation: 2,
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: '3%'
        }}>
          <List.Item
            title="Meus Pedidos"
            left={props => <List.Icon {...props} icon="shopping" />}
          /><Divider />
          <List.Item
            title="Minhas Vendas"
            left={props => <List.Icon {...props} icon="sale" />}
          /><Divider />
          <List.Item
            title="Favoritos"
            left={props => <List.Icon {...props} icon="heart" />}
          /><Divider />
          <List.Item
            title="Doações"
            left={props => <List.Icon {...props} icon="handshake" />}
          /><Divider />
          <List.Item
            title="Ajuda"
            left={props => <List.Icon {...props} icon="help-rhombus" />}
          />
        </Surface>

        <Surface style={{
          padding: 8,
          height: 'auto',
          width: '90%',
          elevation: 2,
          borderRadius: 15,
          marginTop: '3%',
          alignSelf: 'center'
        }}>
          <List.Item
            title="Logout"
            left={props => <List.Icon {...props} icon="logout" />}
            onPress={handleSignOut}
          />
        </Surface>


        <Caption style={{  marginTop: '5%', alignSelf: 'center'}}>Re-User - Todos os direitos reservados.</Caption>
        
      </ScrollView>
    </>
  )

}
export default Perfil