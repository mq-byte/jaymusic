import React, { Component } from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import Video from 'react-native-video';

var hdgq = require('./hdgq.mp3');
// <Video source={{uri: "http://img.yidianling.com/file/2016/07/77xdvc0du8vieg4z.mp3"}}
//        playInBackground={true}
//        audioOnly={true}
//        resizeMode="cover" repeat={true} key="video2" />
export default () => {
	return (
<View>
	<Video
		// ref={video => this.player = video}
		source={hdgq}
		volume={1.0}
		paused={false}
		playInBackground={true}/>
</View>

	)
}

var styles = StyleSheet.create({
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});
