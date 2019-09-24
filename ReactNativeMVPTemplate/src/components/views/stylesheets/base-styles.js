import { StyleSheet } from 'react-native';

const colours = {
	Green: '#34BB83',
	Grey: '#E6ECF0',
	DarkGrey: '#7F7F7F',
	White: '#FFFFFF',
	Blue: '#4285F4',
	LightGrey: '#F7F7F7'
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colours.Grey
	},
	loading: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colours.Grey,
	}
});

const text = StyleSheet.create({
	textInput: {
		backgroundColor: colours.Grey,
	},
	colourText: {
		textShadowColor: 'rgba(0, 0, 0, 1)', 
		textShadowOffset: {width: -1, height: 1}, 
		textShadowRadius: 1,
	},
	titleText: {
		fontWeight: 'bold'
	},
});

export { styles, text, colours };