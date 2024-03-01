// import 'react-native-gesture-handler'; 
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import  DrawerNavigaton  from './src/navigation/DrawerNavigation';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigaton />
//     </NavigationContainer>
    
//   );
// }


import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigaton from './src/navigation/DrawerNavigation';
import AuthStack from './src/navigation/DrawerNavigation';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <View style={{ flex: 1 }}>
          <DrawerNavigaton />
        </View>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}

export default App;


