import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from './stylesheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, Button, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<SafeAreaView>
				<Home />
				<AntDesign name={'stepforward'} size='24' />

				<Button
					onPress={() => {
						alert('You tapped the button!');
					}}
					title='Press Me'
				/>
			</SafeAreaView>
		</View>
	);
}
