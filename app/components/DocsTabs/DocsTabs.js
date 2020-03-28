import React, { 
	// useEffect, 
	useState 
} from 'react';
import { 
	Text, 
	View,
	SafeAreaView,
	StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './DocsTabsStyle';
import SegmentedControlDocsTab from 'signature-app-v2/app/components/SegmentedControlDocsTab';

export default function DocsTabs (props) {
	const { navigationState, navigation, position } = props;
	let routeName = props.navigation.state.routes[props.navigation.state.index].routeName; 
	return (
		<SafeAreaView>
			<StatusBar barStyle='dark-content'/>
			<View style={[styles.marginHorizontal, styles.marginVertical, styles.statusBarSpace]}>
				<Text>Documentos</Text>
			</View>
			<SegmentedControlDocsTab
				leftText={'No firmadas'}
				leftName={'Unsigned'}
				rightText={'Firmadas'}
				rightName={'Signed'}
				leftAction={() => props.navigation.navigate('Unsigned')}
				rightAction={() => props.navigation.navigate('Signed')}
				current={routeName}
			/>
		</SafeAreaView>
	);
}

DocsTabs.navigationOptions = {
	header: null
}

DocsTabs.propTypes = {
	// data: PropTypes.array
}

DocsTabs.defaultProps = {
	// data: []
}







