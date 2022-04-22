import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Информация об основных контактах</Text>
      <Text style={styles.textread}>Чтобы увидеть все ваши действия, связанные с основными контактами, добавьте их в свой список контактов. В данный момент ваш список пуст.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
   textread: {
    margin: 80,
    marginTop: -9,
    fontSize: 12,
    textAlign: 'left',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: 228,
  }
});