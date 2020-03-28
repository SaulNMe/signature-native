import React, { Component } from 'react';
import { 
	View,
	SafeAreaView,
	StatusBar 
} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './HeaderNavbarStyle';

export default class HeaderNavbar extends Component {
	render() {
		let content = (
			<SafeAreaView>
				<View style={[styles.navBarHeight, styles.row, styles.alignItemsCenter, styles.above, styles.statusBarSpace, styles.baseHorizontalMargin]}>
					<View style={[styles.flex01, styles.behind]}>
						{this.props.left && 
							this.props.left
						}
					</View>
					{this.props.center && 
						<View style={[styles.flex04, styles.alignItemsCenter]}>
							{this.props.center}
						</View>
					}
					<View style={[styles.flex01, styles.alignItemsFlexEnd ]}>
						{this.props.right && 
							this.props.right
						}
					</View>
				</View>
			</SafeAreaView>
		)

		return (
			<View>
				<StatusBar barStyle={this.props.statusBar} />
				<LinearGradient colors={ this.props.hasGradient ? ['#007AEA', '#26C6DA'] : ['#FFFFFF', '#FFFFFF']}  start={[0, 0]} end={[1, 0]} style={{zIndex: 10, position: 'relative'}}>
					{content}
				</LinearGradient>
			</View>
		);
	}
}

HeaderNavbar.propTypes = {	
	statusBar: PropTypes.string,
	left: PropTypes.object,
	center: PropTypes.object,
	right: PropTypes.object,
	hasGradient: PropTypes.bool
}

HeaderNavbar.defaultProps = {
	statusBar: 'default',
	left: null,
	center: null,
	right: null,
	hasGradient: true
}







