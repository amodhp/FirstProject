import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Modal} from 'react-native';
import Header from './reusableComponents/Header';
import TextField from './reusableComponents/TextField';
import Card from './reusableComponents/Card';
import Spinner from './reusableComponents/Spinner';
import { connect } from 'react-redux';
import { imageSearchBoxValueChanged } from '../actions';
import axios from 'axios';



class MainScreen extends Component
 {


  renderLoader(){
    if(this.state.loader){
      return <Spinner/>
    }
  }
 state={
  imageList:[],
  loader:true
  }
   getImagesApiCall(){
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
      this.setState({
        imageList:response.data,
        loader:false
      })
    
       
      })
      .catch(error => {console.log('error:', error)})
    
  }

  
  componentDidMount(){
    this.getImagesApiCall()
   
  }

 render(){
  
  return (
    <View style={styles.screen}>
      <Header />
      <TextField placeholder="search" onChangeText={value=>{
        console.log("Value changed to",value)
        this.props.imageSearchBoxValueChanged(value)
      }} 
      value={this.props.image_search_value}
      />

  
        <FlatList
          data={this.state.imageList}
          renderItem={item => {
            return (
              <Card img={item.item.download_url} name={item.item.author} />
            );
          }}/>
            {this.renderLoader()}
    
    </View>
  );

}}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f2c48f',
    flex: 1,
  },
});
const mapStateToProps=state=>{
  return{
    image_search:state.imageListing.image_search
  }
}
export default connect(mapStateToProps,{imageSearchBoxValueChanged})(MainScreen)
