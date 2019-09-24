import React, { Component } from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createRootNavigator } from './config/navigation';
import NavigatorService from './config/navigationservice';

/**
 * Main entry for the app. Handles the app's notifications.
 */
export default class App extends Component {

	/**
	 * Component mounted
	 */
	async componentDidMount() {
		// Stub
	}

	/**
	 * Component is about to unmount
	 */
	componentWillUnmount() {
		// Stub
	}


	/**
	 * Render the main content in the side drawer.
	 */
	render() {
		const Navigator = createAppContainer(createRootNavigator());
		
		return (
			<Navigator 
				ref={(navigatorRef) => {
					NavigatorService.setTopLevelNavigator(navigatorRef);
				}} 
			/>
		);
	}
}