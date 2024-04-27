// import React from 'react';
// import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const images = [
//   require('../../assets/slide01.png'),
//   require('../../assets/slide02.png'),
//   require('../../assets/slide03.png'),
//   require('../../assets/slide04.png'),
// ];

// const SliderScreen = () => {
//   const renderItem = ({ item }) => (
//     <Image source={item} style={styles.image} resizeMode="contain" />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={images}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   image: {
//     width: width,  
//     height: height,  
//   },
// });

// export default SliderScreen;

import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const images = [
  require('../../assets/slide01.png'),
  require('../../assets/slide02.png'),
  require('../../assets/slide03.png'),
  require('../../assets/slide04.png'),
];

const backgroundColors = ['#F9E59E', '#FDF9DE', '#71E1BC', '#FDF9DE']; 

const SliderScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.imageContainer, { backgroundColor: backgroundColors[index] }]}>
      <Image source={item} style={styles.image} resizeMode="contain" />
    </View>
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
        onScrollToIndexFailed={() => {}}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          onIndexChanged(index);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flex: 1,
    width: width,
    height: height,
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
});

export default SliderScreen;
