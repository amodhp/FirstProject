import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'

class Tab2Screen1 extends Component{
    render(){
        return(
            <View>
                <Text>This is Tab2 Screen 1</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tab2 Screen2')}><Text>Tab2 Screen2</Text></TouchableOpacity>
            </View>
        )
    }
}


export default Tab2Screen1