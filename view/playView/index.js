import React, { Component } from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import Video from 'react-native-video';

// var hdgq = require('./hdgq.mp3');
// <Video source={{uri: "http://img.yidianling.com/file/2016/07/77xdvc0du8vieg4z.mp3"}}
//        playInBackground={true}
//        audioOnly={true}
//        resizeMode="cover" repeat={true} key="video2" />
export default React.memo((props) => {
	console.log('oooooo',props);

	const VideoItem = props.info?.info?.hqPlayInfo?.playUrl?
		<Video
			// ref={video => this.player = video}
			source={{uri:encodeURI(props.info.info.hqPlayInfo.playUrl)}}
			volume={1.0}
			paused={false}
			// playInBackground={false}
		/>:<Text>{'该资源缺失'}</Text>

	return (
		<SafeAreaView>
			<View>
				{VideoItem}
				<Text>{'开发中'}</Text>
			</View>
		</SafeAreaView>


	)
},(preProps,nextProps)=>{
	const nextUrl = nextProps.info?.info?.hqPlayInfo?.playUrl;
	const preUrl = preProps.info?.info?.hqPlayInfo?.playUrl;
	return nextUrl === preUrl;
})

var styles = StyleSheet.create({
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});
