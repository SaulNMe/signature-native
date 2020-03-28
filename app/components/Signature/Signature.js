import React, { 
	// useEffect, 
	useRef ,
	useState
} from 'react';
import { Text, View, WebView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './SignatureStyle';
import htmlContent from './htmlContent';
import injectedSignaturePad from './injectedSignaturePad';
import injectedApplication from './injectedApplication';
  
const  SignatureView = React.forwardRef((props, ref) => {
	let [color, setColor] = useState('#000000');
	let app = injectedApplication(props.signature != null ? props.signature : '');
	let html = htmlContent(injectedSignaturePad(color) + app);
	html = html.replace('<%clear%>', props.clearText);
	let source = { html };

	function getSignature(e) {
		let data = e.nativeEvent.data;
		data === 'BLACK' && setColor('#000000');
		data === 'BLUE' && setColor('#007AEA');
		if (data === "EMPTY") {
			props.onEmpty();
		} else {
			props.onOK(data);
		}
	};

	function renderError(e) {
		const { nativeEvent } = e;
		console.warn('WebView error: ', nativeEvent);
	};

	return (
		<View style={styles.webBg}>
			<WebView
				ref={ref}
				useWebKit={true}
				source={source}
				onMessage={getSignature}
				javaScriptEnabled={true}
				onError={renderError}
			/> 	
		</View>
	);
})
// (props) {
	
// };

export default SignatureView;
  
SignatureView.propTypes = {
	onOK: PropTypes.func,
	onEmpty: PropTypes.func,
	webStyle: PropTypes.string,
	clearText: PropTypes.string,
}
SignatureView.defaultProps = {
	onOK: () => { },
	onEmpty: () => { },
	webStyle: '',
	clearText: 'Clear',
}

  







