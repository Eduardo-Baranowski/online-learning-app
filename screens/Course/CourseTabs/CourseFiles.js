import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {COLORS, FONTS, SIZES, icons, dummyData} from '../../../constants';

import {IconButton, TextButton} from '../../../components';

const CourseFiles = () => {
  function renderStudents() {
    let students = [];

    if (dummyData?.course_details?.students.length > 3) {
      students = dummyData?.course_details?.students.slice(0, 3);
    } else {
      students = dummyData?.course_details?.students;
    }

    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            fontSize: 25,
          }}>
          Students
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}>
          {students.map((item, index) => {
            return (
              <View
                key={`Students-${index}`}
                style={{
                  marginLeft: index > 0 ? SIZES.radius : 0,
                }}>
                <Image
                  source={item?.thumbnail}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              </View>
            );
          })}
          {dummyData?.course_details?.students.length > 3 && (
            <TextButton
              label="View All"
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h3,
              }}
              contentContainerStyle={{
                marginLeft: SIZES.base,
                backgroundColor: null,
              }}
            />
          )}
        </View>
      </View>
    );
  }

  function renderFiles() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.h2,
            fontSize: 25,
          }}>
          Files
        </Text>

        {dummyData?.course_details?.files.map((item, index) => {
          return (
            <View
              key={`Files-${index}`}
              style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
              }}>
              <Image
                source={item?.thumbnail}
                style={{
                  width: 80,
                  height: 80,
                }}
              />

              <View
                style={{
                  flex: 1,
                  marginLeft: SIZES.radius,
                }}>
                <Text style={{...FONTS.h2}}>{item?.name}</Text>
                <Text style={{...FONTS.body3, color: COLORS.gray30}}>
                  {item?.author}
                </Text>
                <Text style={{...FONTS.body4}}>{item?.upload_date}</Text>
              </View>

              <IconButton
                icon={icons.menu}
                iconStyle={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.black,
                }}
                containerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                }}
              />
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{
        padding: SIZES.padding,
      }}>
      {renderStudents()}
      {renderFiles()}
    </ScrollView>
  );
};

export default CourseFiles;
