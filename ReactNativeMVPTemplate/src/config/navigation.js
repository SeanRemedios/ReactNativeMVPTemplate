import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleView from '../components/views/example-view';

const ExampleStackNav = createStackNavigator({
	Example: {
		screen: ExampleView,
		navigationOptions: ({navigation}) => ({
			tabBarVisible: false,
			gesturesEnabled: false,
			header: null
		}),
	},
},
{
	initialRouteName: 'ExampleStack'
});

/*
 * All possible stack navigators
 */
export const createRootNavigator = () => {
	return createStackNavigator(
		{
			ExampleStack: {
				screen: ExampleStackNav,
				navigationOptions: ({navigation}) => ({
					gesturesEnabled: false,
				})
			},

		},
		{
			headerMode: "none",
			mode: "modal"
		}
	);
};