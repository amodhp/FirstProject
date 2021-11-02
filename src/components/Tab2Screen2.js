import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'

class Tab2Screen2 extends Component{
    render(){
        return(
            <View>
                <Text>This is Tab2 Screen 2</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}><Text>Go Back</Text></TouchableOpacity>
            </View>
        )
    }
}


export default Tab2Screen2