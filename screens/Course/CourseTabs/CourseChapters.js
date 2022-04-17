import React from 'react';
import {View, ScrollView, Text, Image, FlatList} from 'react-native';

import {
  IconLabel,
  TextButton,
  HorizontalCourseCard,
  LineDivider,
} from '../../../components';

import {
  COLORS,
  FONTS,
  SIZES,
  images,
  icons,
  dummyData,
} from '../../../constants';

const CourseChapters = () => {
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.h2,
          }}>
          {dummyData?.course_details?.title}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
          }}>
          <Text
            style={{
              color: COLORS.gray30,
              ...FONTS.body4,
            }}>
            {dummyData?.course_details?.number_of_students}
          </Text>

          <IconLabel
            icon={icons.time}
            label={dummyData?.course_details?.duration}
            containerStyle={{
              marginLeft: SIZES.radius,
            }}
            iconStyle={{
              width: 15,
              height: 15,
            }}
            labelStyle={{
              ...FONTS.body4,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}>
          <Image
            source={images.profile}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
          <View
            style={{
              flex: 1,
              marginLeft: SIZES.base,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h3,
                fontSize: 18,
              }}>
              {dummyData?.course_details?.instructor?.name}
            </Text>
            <Text style={{...FONTS.body3}}>
              {dummyData?.course_details?.instructor?.title}
            </Text>
          </View>
          <TextButton
            label="Follow +"
            contentContainerStyle={{
              width: 80,
              height: 35,
              borderRadius: 20,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              ...FONTS.h3,
            }}
          />
        </View>
      </View>
    );
  }

  function renderChapter() {
    return (
      <View>
        {dummyData?.course_details?.videos.map((item, index) => {
          return (
            <View
              key={`Videos-${index}`}
              style={{
                alignItems: 'center',
                height: 70,
                backgroundColor: item?.is_playing
                  ? COLORS.additionalColor11
                  : null,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                  height: 70,
                }}>
                <Image
                  source={
                    item?.is_complete
                      ? icons.completed
                      : item?.is_playing
                      ? icons.play_1
                      : icons.lock
                  }
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <ScrollView>
      {renderHeader()}
      <LineDivider
        lineStyle={{
          height: 1,
          marginVertical: SIZES.radius,
        }}
      />

      {renderChapter()}
    </ScrollView>
  );
};

export default CourseChapters;
