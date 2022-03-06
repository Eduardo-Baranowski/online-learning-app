import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {IconButton, TextButton, LineDivider} from '../../components';
import {COLORS, SIZES, FONTS, icons, images} from '../../constants';

const Profile = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          marginHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            ...FONTS.h1,
          }}>
          Profile
        </Text>

        <IconButton
          icon={icons.sun}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderHeader()}
    </View>
  );
};

export default Profile;
