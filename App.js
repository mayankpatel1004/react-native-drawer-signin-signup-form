import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import { View, ActivityIndicator } from 'react-native';
import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './components/context';
//import { ActivityIndicator } from 'react-native-paper';
import MainTabScreen from './screens/MainTabScreen';
import DetailsScreen from './screens/DetailsScreen';

const Drawer = createDrawerNavigator();
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    }
  }));

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="DetailsDrawer" component={DetailsScreen} />
            <Drawer.Screen name="ProfileDrawer" component={MainTabScreen} />
            <Drawer.Screen name="ExploreDrawer" component={MainTabScreen} />
          </Drawer.Navigator>
        ) :
          <RootStackScreen />
        }

      </NavigationContainer>
    </AuthContext.Provider>
  )
}
export default App