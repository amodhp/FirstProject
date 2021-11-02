import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'

class NextScreen extends Component{
    render(){
        return(
            <View>
                <Text>This is the next Screen</Text>
               
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}><Text>Go Back</Text></TouchableOpacity>
            </View>
        )
    }
}


export default NextScreen