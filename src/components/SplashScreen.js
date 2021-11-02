import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import Spinner from './reusableComponents/Spinner'
import {connect} from 'react-redux'
import {getImageListFromApi} from '../actions'
import AsyncStore from '../extras/AsyncStore'
import { ThemeProvider } from '@react-navigation/native'

class SplashScreen extends Component{
    componentDidMount(){
        const asyncStore = new AsyncStore()

        asyncStore.getData('openTimes').then(value=>{console.log("Values:",value)
        if(value){
        console.log("opening Second or later")
        this.props.getImageListFromApi(this.props.navigation)
        }else{
          console.log("Opening First Time")
          asyncStore.storeData("openTimes",'1')
          this.props.navigation.navigate("onBoarding")
        }
    }
    )
       
        // this.props.navigation.navigate('Home Screen')
    }
    render(){
        return(
            <View>
                <View style={{marginBottom:300}}>
                <Text>Welcome to the App</Text>
                </View>
             
                <Spinner/>
                
               
            </View>
        )
    }
}

const mapStateToProps=state=>{
    return {}
}

export default connect(mapStateToProps,{getImageListFromApi})(SplashScreen)