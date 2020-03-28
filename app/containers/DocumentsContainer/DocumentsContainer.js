import React, { 
	// useEffect, 
	useState 
} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import DocItem from 'signature-app-v2/app/components/DocItem';
import ApiListContainer from 'signature-app-v2/app/containers/ApiListContainer';
import NavigationService from 'signature-app-v2/app/services/NavigationService';

export default function DocumentsContainer (props) {
	const [data, setData] = useState([
		{id: '1', name: 'Cosa', 'code': '100203'},
		{id: '2', name: 'Cosa', 'code': '100203'},
		{id: '3', name: 'Cosa', 'code': '100203'},
		{id: '4', name: 'Cosa', 'code': '100203'},
		{id: '5', name: 'Cosa', 'code': '100203'},
		{id: '6', name: 'Cosa', 'code': '100203'},
		{id: '7', name: 'Cosa', 'code': '100203'},
		{id: '8', name: 'Cosa', 'code': '100203'},
		{id: '9', name: 'Cosa', 'code': '100203'},
		{id: '10', name: 'Cosa', 'code': '100203'},
		{id: '11', name: 'Cosa', 'code': '100203'},
		{id: '12', name: 'Cosa', 'code': '100203'},
		{id: '13', name: 'Cosa', 'code': '100203'},
		{id: '14', name: 'Cosa', 'code': '100203'},
		{id: '15', name: 'Cosa', 'code': '100203'},
		{id: '16', name: 'Cosa', 'code': '100203'},
		{id: '17', name: 'Cosa', 'code': '100203'},
	]);

	function renderItem({item}){
		return <DocItem
			title={item.name}
			subtitle={item.code}
			onPress={() => { NavigationService.navigate('DetailScreen') }}
		/>
	}

	return (
		<ApiListContainer
			ListFooterComponent={props.footer}
			data={data}
			renderItem={renderItem}
			keyExtractor={o => String(o.id)}
		/>
	);
}


DocumentsContainer.propTypes = {
	// data: PropTypes.array
}

DocumentsContainer.defaultProps = {
	// data: []
}


