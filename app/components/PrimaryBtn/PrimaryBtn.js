import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './PrimaryBtnStyle';
import LabelText from 'signature-app-v2/app/components/LabelText';

export default function PrimaryBtn (props) {
	let textColor;
	let gradientColors;
	let disabledGradient;
	switch(props.bgColor) {
		case 'blue':
			gradientColors = ['#007AEA', '#26C6DA'];
			disabledGradient = ['#5792d1', '#a0c3e5'];
			textColor = "white";
		break;
		case 'orange':
			gradientColors = ['#FF3D00', '#FF9901'];
			disabledGradient = ['#f58053', '#fab69d'];
			textColor = "white";
		break;
		default:
			gradientColors = ['#fff', '#fff'];
			disabledGradient = ['#CCCACA', '#E6E3E3'];
			textColor = "dark";
		break;
	}
	return (
		<TouchableOpacity
			onPress={props.onPress}
			disabled={props.disabled}
			activeOpacity={0.9}
			style={[styles.borderRadius, (props.isMedium ? styles.medium : styles.fullWidth)]}
		>
			<View style={[(styles.fullWidth) , styles.centerObjects]}>
				<LinearGradient 
					colors={props.disabled ? disabledGradient : gradientColors} 
					style={[styles.defaultStyles, styles.row, styles.centerObjects]} 
					start={[0, 0]} end={[1, 0]}
				>
					{ props.hasIcon &&
						<Text style={styles.smallHorizontalMargin}>
							<Icon name="google-plus" size={24} color="#FFF" />
						</Text> 

					}	
					<LabelText 
						text={props.text}
						color={textColor}
						weight={props.weight}
					/>
					{ props.isLoading &&

					<View style={styles.smallHorizontalMargin}>
						<ActivityIndicator
							size={24}
							color={'#FFF'}
							animating={props.isLoading}
						/>
					</View>
					}
				</LinearGradient>
			</View>
		</TouchableOpacity>
	);
}


PrimaryBtn.propTypes = {
	onPress: PropTypes.func,
	text: PropTypes.string,
	bgColor: PropTypes.string,
	disabled: PropTypes.bool,
	isMedium: PropTypes.bool,
	weight: PropTypes.string,
	hasIcon: PropTypes.bool,
	iconName: PropTypes.string,
	isLoading: PropTypes.bool,
}

PrimaryBtn.defaultProps = {
	onPress: ()=>{},
	text: "Click me!",
	bgColor: "",
	disabled: false,
	isMedium: false,
	weight: 'medium',
	hasIcon: false,
	iconName: 'x',
	isLoading: false,
}



