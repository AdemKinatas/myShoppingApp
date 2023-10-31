import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();

function Router() {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {
        isAuthLoading ? (
          <Loading />
        ) : !userSession ? (
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
          </Stack.Navigator>
        ) : (
          <>
            <Stack.Navigator>
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
                  },
                  headerRight: () => <Icon name='logout' size={25} color='white' onPress={() => dispatch({type: 'REMOVE_USER'})} />
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
          </>
        )
      }
    </NavigationContainer>
  );
}

export default Router;