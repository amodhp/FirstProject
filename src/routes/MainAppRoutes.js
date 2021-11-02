import * as React from 'react'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../components/MainScreen'
import {Text, TouchableOpacity} from 'react-native'
import ImageDetailsScreen from '../components/ImageDetailsScreen'
import NextScreen from '../components/NextScreen'
import Tab2Screen1 from '../components/Tab2Screen1'
import Tab2Screen2 from '../components/Tab2Screen2'
import SplashScreen from '../components/SplashScreen'
import onBoarding from '../components/onBoarding'


const Tab1StackNav=createNativeStackNavigator()
const Tab2StackNav=createNativeStackNavigator()
const MainStack=createNativeStackNavigator()
const Tab= createBottomTabNavigator()

function Tab1Stack(){
    return(
     
           <Tab1StackNav.Navigator 
           screenOptions={{
               headerStyle:{backgroundColor:'lightblue'}
           }}
         >
               <Tab1StackNav.Screen name="Image Gallery"  
               component={MainScreen}
               options={({navigation,route})=>({
                   headerTitle:"Home",
                   headerStyle:{backgroundColor:'lightgrey'},
                   headerTitleAlign:'center',
                   headerRight:()=>(
                       <TouchableOpacity onPress={()=>navigation.navigate('Next Screen')}>
                        <Text>Next</Text>
                       </TouchableOpacity>
                   )
               })}
               />
               <Tab1StackNav.Screen name="Image Details" component={ImageDetailsScreen}/>
               <Tab1StackNav.Screen name="Next Screen" component={NextScreen}/>
             
           </Tab1StackNav.Navigator>
      
    )
}

function Tab2Stack(){
    return(
        <Tab2StackNav.Navigator>
        <Tab2StackNav.Screen name="Tab2 Screen1" component={Tab2Screen1}/>
        <Tab2StackNav.Screen name="Tab2 Screen2" component={Tab2Screen2}/>
        </Tab2StackNav.Navigator>
    )
}

function TabStack(){
    return(
       
        <Tab.Navigator screenOptions={{
            headerShown:false,
        }}>
        <Tab.Screen name="Image List" component={Tab1Stack}/>
        <Tab.Screen name="Tab 2" component={Tab2Stack}/>
        </Tab.Navigator>
        
    )
}

function MainAppRoutes(){
    return(
        <NavigationContainer>
        <MainStack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <MainStack.Screen name="Splash" component={SplashScreen}/>
            <MainStack.Screen name="HomeScreen" component={TabStack}/>
            <MainStack.Screen name="onBoarding" component={onBoarding}/>
        </MainStack.Navigator>
     </NavigationContainer>
    )
   

}

export default MainAppRoutes