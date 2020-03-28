import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './LabelTextStyle';
import { Fonts, Colors } from 'signature-app-v2/app/styles';

export default function LabelText (props) {
	const textColor = {color: Colors[props.color]};
	const weight = {fontWeight: Fonts.weight[props.weight] };
	const align = {textAlign: props.align };
	return (
		<View>
			<Text style={[styles.text, textColor, weight, align]}>{props.text}</Text>
		</View>
	);
}


LabelText.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string,
}

LabelText.defaultProps = {
	text: "",
	color: "dark",
	weight: "regular",
	align: "left"
}







