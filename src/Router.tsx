import React from 'react';
import { ActivityIndicator, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movies from './screens/Movies';
import Favorite from './screens/Favorite';
import Detail from './screens/Detail';

interface RouterProps { }

const Router = (props: RouterProps) => {

    const MainStack = createBottomTabNavigator();
    const MainStackScreen = () => {
        return (
            <MainStack.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Movies') {
                            iconName = require('./assets/icons/movies.png')
                        } else if (route.name === 'Favorite') {
                            iconName = require('./assets/icons/love.png')
                        }
                        return (
                            <View style={{ flex: 1, justifyContent: 'center', borderTopWidth: 2, borderTopColor: focused ? 'green' : 'gray' }}>
                                <Image source={iconName} style={{ width: 25, height: 25, tintColor: focused ? 'green' : 'gray', }} resizeMode='contain' />
                            </View>
                        );
                    },
                    tabBarShowLabel: false

                })}
            >
                <MainStack.Screen
                    name="Movies"
                    component={Movies}
                    options={styles.options}
                />
                <MainStack.Screen
                    name="Favorite"
                    component={Favorite}
                />
            </MainStack.Navigator>
        );
    };


    const RootStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="MainStackScreen"
                    component={MainStackScreen}
                />
                <RootStack.Screen
                    name="Detail"
                    component={Detail}
                    options={{ headerShown: true }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

const styles = {
    options: { headerShown: false }
}

export default Router;
