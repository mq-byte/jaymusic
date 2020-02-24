import React,{useState} from 'react';
import {
  ScrollView,
  SectionList,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

import data from './data.json'

export default props => {
	// const [sections, setSections] = useState(data);

	return (
    <SafeAreaView>
      <ScrollView>
        <SectionList
          sections={data}
          renderItem={({item}) => <Button
	          title={item.title}
	          color="#f194ff"
	          onPress={(event) => props.playMusic(item)}
          />}
          renderSectionHeader={({section}) => <Text style={style.title}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  title: {
    lineHeight: 30,
    backgroundColor: 'gainsboro',
  },
});
