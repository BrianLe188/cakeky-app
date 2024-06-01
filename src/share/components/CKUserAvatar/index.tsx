import CKAvatar from '@share/components/CKAvatar';
import CKIcon from '@share/components/CKIcon';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  textContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default function CKUserAvatar() {
  const handlePress = () => {
    console.log('Avatar Pressed!');
  };

  return (
    <View style={styles.container}>
      <CKAvatar
        uri="https://toigingiuvedep.vn/wp-content/uploads/2022/08/avatar-chill-anime.jpg"
        size="md"
        onPress={handlePress}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Cake Switt</Text>
        <View style={styles.ratingContainer}>
          <CKIcon name="star" size={18} color="#FFA500" />
          <Text style={styles.rating}>4.9/5</Text>
        </View>
      </View>
    </View>
  );
}
