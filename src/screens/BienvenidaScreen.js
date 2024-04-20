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
//     <Image source={item} style={styles.image} resizeMode="cover" />
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
//   },
//   image: {
//     width: width,
//     height: height,
//   },
// });

// export default SliderScreen;

import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const images = [
  require('../../assets/slide01.png'),
  require('../../assets/slide02.png'),
  require('../../assets/slide03.png'),
  require('../../assets/slide04.png'),
];

const SliderScreen = () => {
  const renderItem = ({ item }) => (
    <Image source={item} style={styles.image} resizeMode="contain" />
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
    width: width,  // Utilizando las dimensiones de la pantalla
    height: height,  // Utilizando las dimensiones de la pantalla
  },
});

export default SliderScreen;

