import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false,
            statusBarColor: "#479DE5",
            navigationBarColor: "transparent",
          }}
        />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: "Ürünler",
            headerTitleAlign: "center",
            headerTintColor: "white",
            statusBarColor: "#479DE5",
            navigationBarColor: "transparent",
            headerStyle: {
              backgroundColor: "#479DE5"
            }
          }}
        />
        <Stack.Screen
          name="ProductDetailPage"
          component={Detail}
          options={{
            title: "Detay",
            headerTitleAlign: "center",
            headerTintColor: "white",
            statusBarColor: "#479DE5",
            navigationBarColor: "#479DE5",
            headerStyle: {
              backgroundColor: "#479DE5"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;