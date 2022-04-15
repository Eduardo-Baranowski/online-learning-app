import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';

import {IconButton, LineDivider} from '../../components';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
} from '../../constants';

const CourseDetails = ({navigation, route}) => {
  const {selectedCourse} = route.params;

  function renderVideoSection() {
    return (
      <View
        style={{
          height: SIZES.height > 800 ? 220 : 200,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.gray90,
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderVideoSection()}
    </View>
  );
};

export default CourseDetails;
