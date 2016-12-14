'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  Switch,
  Image
} from 'react-native';

class XZSettingScene extends Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
    		rowHasChanged:(r1,r2) => r1 !== r2,
    		sectionHeaderHasChanged:(s1,s2) => s1 !== s2
    	})

    this.state = {
      dataSource : ds.cloneWithRowsAndSections({0:['接收通知'],1:['帮助反馈','关于极课','版本说明']})
    };
  }

  _renderRows(rowData,sectionID,rowID,highlightRow){

  	if(sectionID == 0){
  		return(
	  		<View style={{height:60,alignItems: 'center',flexDirection:'row'}}>
	  			<Text style={{fontSize:17,marginLeft:20}}>{rowData}</Text>
	  			<View style={{flex:1}}>
	  				<Switch 
	  				style={{alignSelf:'flex-end',marginRight:20}}
	  				onTintColor='rgb(72,107,231)'
	  				onValueChange={(value)=>{
	  					console.log(value)
	  				}}></Switch>
	  			</View>
	  		</View>
  		)
  	}

  	return(
  		<View style={{height:60,flexDirection:'row',alignItems: 'center',}}>
  			<Text style={{fontSize:17,marginLeft:20}}>{rowData}</Text>
  			<View style={{flex: 1,flexDirection:'row',justifyContent:'flex-end'}}>
  				<Image
  				style={{height:20,width:20,marginRight:20}}
  				source={require('./image/right_arrow.png')}/>
  			</View>
  		</View>
  		
  	)
  }

  _renderSectionHeader(sectionData, sectionID){

  	return(
  		<View style={{height:15,backgroundColor:'rgb(243,243,243)'}}/>
  		)
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted){

    console.log('fsdfs')

  	return(
  		<View 
  		style={{height:1,backgroundColor:'rgb(243,243,243)'}}
  		key={sectionID+rowID}/>
  		)
  }

  _renderFooter(){
  	return (
  		<View style={{backgroundColor:'rgb(88,153,255)',height:60,marginHorizontal:15,marginVertical:10,justifyContent: 'center',alignItems: 'center',borderRadius:5}}>
  			<Text style={{color:'white',fontSize:20}}>退出登录</Text>
  		</View>
  		)
  }

  render() {
    return (
      <ListView
      style={{paddingTop:64}}
      dataSource={this.state.dataSource}
      renderSeparator={this._renderSeparator}
      renderSectionHeader={this._renderSectionHeader}
      renderFooter = {this._renderFooter}
      renderRow={this._renderRows}
      />
    );
  }
}

const styles = StyleSheet.create({

});


export default XZSettingScene;