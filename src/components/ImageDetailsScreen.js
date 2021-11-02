import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'

class ImageDetailsScreen extends Component{
    render(){
        return(
            <View>
                <Text>Image Details for Image ID :{this.props.route.params.image_id}</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}><Text>Go Back</Text></TouchableOpacity>
            </View>
        )
    }
}


export default ImageDetailsScreen