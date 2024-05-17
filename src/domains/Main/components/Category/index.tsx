import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CKIcon from '@share/components/CKIcon';

interface ICategory {
  text: string;
  imageUri: string;
  checked?: boolean;
}

export default function Category({ text, imageUri, checked = false }: ICategory) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
      />
      {
        checked && <View style={styles.tick}>
          <CKIcon name="check" size={10} color="white" />
        </View>
      }

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'relative'
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tick: {
    position: 'absolute',
    top: -6,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: '#FD76A7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});