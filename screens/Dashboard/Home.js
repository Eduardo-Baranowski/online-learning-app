import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {IconButton, TextButton, VerticalCourseCard} from '../../components';
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../../constants';

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={{...FONTS.h2}}>Hello, ByProgrammers!</Text>
          <Text style={{color: COLORS.gray50, ...FONTS.body3}}>
            Thursday, 9th Sept 2021
          </Text>
        </View>
        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{
          borderRadius: SIZES.padding,
        }}>
        <View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
            }}>
            HOW TO
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}>
            Marke your brand more visible with out checklist
          </Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.white,
              ...FONTS.body4,
            }}>
            By Scott Harris
          </Text>
        </View>

        <Image
          source={images.start_learning}
          style={{
            width: '100%',
            height: 110,
            marginTop: SIZES.padding,
          }}
        />
        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            // backgroundColor: COLORS.white,
          }}
          lableStyle={{
            color: COLORS.black,
          }}
        />
      </ImageBackground>
    );
  }

  function renderCourses() {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({item, index}) => {
          return (
            <VerticalCourseCard
              containerStyle={{
                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index === dummyData.courses_list_1.length - 1
                    ? SIZES.padding
                    : 0,
              }}
              course={item}
            />
          );
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
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}>
        {renderStartLearning()}

        {renderCourses()}
      </ScrollView>
    </View>
  );
};

export default Home;