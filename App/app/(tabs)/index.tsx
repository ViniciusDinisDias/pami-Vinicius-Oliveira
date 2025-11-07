import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function IndexScreen() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const mostrarMensagem = () => {
    if (nome.trim() === '') {
      setMensagem('Por favor, digite seu nome!');
    } else {
      setMensagem(`Bem-vindo(a), ${nome}! 👋`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👋 Olá! Seja bem-vindo(a) ao meu app React Native!</Text>

      <Text style={styles.label}>Digite seu nome abaixo:</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome..."
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.botao} onPress={mostrarMensagem}>
        <Text style={styles.textoBotao}>Mostrar Mensagem</Text>
      </TouchableOpacity>

      {mensagem !== '' && <Text style={styles.mensagem}>{mensagem}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F3640',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#353B48',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#718093',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#00A8FF',
    padding: 12,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mensagem: {
    marginTop: 30,
    fontSize: 18,
    color: '#273C75',
    fontWeight: '500',
  },
});
