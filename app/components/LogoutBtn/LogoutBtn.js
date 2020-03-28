import React, { 
	// useEffect, 
	// useState
	useRef
} from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import styles from './LogoutBtnStyle';
import Colors from 'signature-app-v2/app/styles';
import ActionSheet from 'react-native-actionsheet';

export default function LogoutBtn (props) {
	const actionRef = useRef();
	function showActionSheet(){
		actionRef.current.show();
	}
	return (
		<View style={styles.row}>
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={showActionSheet}
			>
			<Feather
				name='more-vertical'
				size={Platform.OS === 'ios' ? 35 : 24}
				color={'#fff'}
			/>
			</TouchableOpacity>
			<ActionSheet
				ref={actionRef}
				options={['Cerrar sesión'].concat('Cancelar')}
				cancelButtonIndex={1}
				destructiveButtonIndex={1}
				onPress={(index) =>{
					if(index === 1 ) return;
					props.onSelect()
				}}
			/>
		</View>
	);
}


LogoutBtn.propTypes = {
	color: PropTypes.string,
	onSelect: PropTypes.func
}

LogoutBtn.defaultProps = {
	color: 'white',
	onSelect: ()=>{}
}







