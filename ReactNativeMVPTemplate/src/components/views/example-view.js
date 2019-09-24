import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import BaseView from './view';

/**
 * Class for the Example view
 * @extends BaseView
 */
class ExampleView extends BaseView {

	/**
	 * Creates an instance of the example view
	 *
	 * @constructor
	 * @param {Object} props - Component properties
	 */
	constructor(props){
		super(props);
	}

	/**
	 * Set the navigation options, change the header to handle a back button.
	 *
	 * @return {Object} Navigation option
	 */
	static navigationOptions = ({navigation, transitioning}) => {
		const { params = {} } = navigation.state;
		const back = params._onBack ? params._onBack : () => 'default';
		return {
			headerLeft: (<HeaderBackButton disabled={transitioning} onPress={()=>{back()}}/>),
		};
	}

	/**
	 * Component is about to mount.
	 */
	componentWillMount = () => {
		this.props.navigation.setParams({
			_onBack: this._onBack,
		});
	}

	/**
	 * Back function to decide go back to the previous page.
	 */
	_onBack = () => {
		this.props.navigation.navigate('Tabs');
	}

	/**
	 * Flattens a list of objects into an object with properties.
	 * Example:
	 * 		Original: [{key: k1, value: v1}, {key: k2, value: v2}]
	 * 		After:	  {k1: v1, k2: v2}
	 * 
	 * @param {List} params - A list of key, value pair objects
	 * @return {Object} An object with properties 
	 */
	getParams = (params) => {
		let paramsAsObject = {};
		for (let i=0; i < params.length; i++) {
			// Property value 'key' becomes the property in final object
			paramsAsObject[params[i].key] = params[i].value;
		}
		return paramsAsObject;
	}

	/**
	 * Navigate to a particular screen.
	 *
	 * @param {string} screen - The name of the screen to navigate to.
	 * @param {Object} params - The params to add to the navigation call. Key, value pairs
	 */
	navigate = (screen, params) => {
		let routeParams = {};
		if (params && params != null || params != undefined && params.length > 0) { // If there's parameters, flatten them
			routeParams = this.getParams(params);
		}

		this.props.navigation.navigate({
			routeName: screen,
			params: routeParams,
			key: screen + TimeUtil.getDateTime()
		});
	}

	render() {
		return (
			<View>
				<Text>
				React Native MVP Template
				</Text>
			</View>
		);
	}

}

export default ExampleView;