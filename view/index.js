import React, { useCallback,useState} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
// import Swiper from 'react-native-swiper';
import PlayView from './playView/index';
import PlayListView from './playList/index';
// import Test from './test/index';


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default () => {
	const [info, setInfo] = useState(null);
	const playMusic = useCallback(
		(item) => {
			console.log('playMusic')
			setInfo(item)
		},
		[],
	);


	return (
		<SwipeableViews style={styles.wrapper}>
			<View>
				<PlayListView playMusic={playMusic}/>
			</View>
			<View>
				<PlayView info={info}/>
			</View>

		</SwipeableViews>
	);
}
