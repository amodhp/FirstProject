import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {getImageListFromApi} from '../actions'

class onBoarding extends Component{
    render(){
        return(
            <View>
                <Text>On Boarding</Text>
                <TouchableOpacity onPress={()=>this.props.getImageListFromApi(this.props.navigation)}>
                    <Text>Next</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

export const mapStateToProps=state=>{
    return {}
}

export default connect(mapStateToProps,{getImageListFromApi})(onBoarding)