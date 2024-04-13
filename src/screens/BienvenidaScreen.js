import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const images = [
  require('../../assets/pic1_Mesa de trabajo 1.png'),
  require('../../assets/pic 2_Mesa de trabajo 1.png'),
  require('../../assets/pic3_Mesa de trabajo 1.png'),
  require('../../assets/pic4_Mesa de trabajo 1.png'),
];

const SliderScreen = () => {
  const renderItem = ({ item }) => (
    <Image source={item} style={styles.image} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
});

export default SliderScreen;
