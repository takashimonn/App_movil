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
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigation';
import AuthNavigator from './src/navigation/AuthStack';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator handleLogin={handleLogin} />}
    </NavigationContainer>
  );
}

export default App;


