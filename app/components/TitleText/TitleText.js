import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TitleTextStyle';
import { Fonts, Colors } from 'signature-app-v2/app/styles';

export default function TitleText (props) {
	const textColor = {color: Colors[props.color]};
	const weight = {fontWeight: Fonts.weight[props.weight] };
	const align = {textAlign: props.align };
	return (
		<View>
			<Text style={[styles.text, textColor, weight, align]}>{props.text}</Text>
		</View>
	);
}


TitleText.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string,
}

TitleText.defaultProps = {
	text: "",
	color: "dark",
	weight: "regular",
	align: "left"
}







