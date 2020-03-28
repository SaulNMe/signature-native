import React, { 
	// useEffect, 
	// useState 
} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

export default function ApiListContainer (props) {
	return (
		<FlatList
			{...props}
		/>
	);
}


ApiListContainer.propTypes = {
	// data: PropTypes.array
}

ApiListContainer.defaultProps = {
	// data: []
}


