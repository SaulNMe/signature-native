import React, { 
	// useEffect, 
	useState,
	useRef
} from 'react';
import { Keyboard, TouchableWithoutFeedback, View, TextInput, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './SearchInputStyle';
import TouchableIcon from 'signature-app-v2/app/components/TouchableIcon';
import LabelText from 'signature-app-v2/app/components/LabelText';
import { Colors } from 'signature-app-v2/app/styles';
import ClearBtn from 'signature-app-v2/app/components/ClearBtn';

export default function SearchInput (props) {
	const [state, setState] = useState("");

	const opacity = useRef(new Animated.Value(0)).current;

	function handleAnimation(toValue = 0) {
		Animated.timing(opacity, {
			toValue,
			duration: 100,
		}).start();
	}

	function handleText(text) {
		setState(text);
		if(text.length > 0 ) {
			handleAnimation(1);
		} else {
			handleAnimation(0);
		}
	}

	function resetState(){
		setState("");
		handleAnimation(0);
	}
	

	return (
		<TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
			<View style={[styles.smallHorizontalMargin, styles.smallTopMargin]}>
				<View style={[styles.row, styles.alignItemsCenter]}>
					<TextInput
						value={state}
						style={styles.searchCard}
						underlineColorAndroid='transparent'
						placeholder={props.placeholder}
						placeholderTextColor={Colors.darkest}
						onChangeText={(text) => { handleText(text) }}
						onSubmitEditing={() =>{ props.onPress() }}
					>
						
					</TextInput>
					<Animated.View style={{position: 'absolute', right: 50, opacity, zIndex: 4}}>
						<ClearBtn
							disabled={state.length === 0}
							onPress={() => { resetState() }}
						/>
					</Animated.View>
					<View>
						<TouchableIcon
							onPress={props.onPress}
							iconName='search'
							color='blue'
						/>
					</View>
				</View>
				<View style={[styles.row, styles.justifyContentFlexEnd, styles.smallVerticalMargin]}>
					<LabelText
						text={`${props.results} de ${props.total} Solicitudes Pendientes`}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}


SearchInput.propTypes = {
	placeholder: PropTypes.string,
	onPress: PropTypes.func,
	results: PropTypes.number,
	total: PropTypes.number,
	// data: PropTypes.array
}

SearchInput.defaultProps = {
	placeholder: 'Buscar',
	onPress: () => {},
	results: "0",
	total: "0",
}







