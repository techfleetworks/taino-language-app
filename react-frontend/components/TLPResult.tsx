/**
 * modal to find feedback to user
 * @param {object} prop - containing boolean value to determine text
 * @returns {JSX.Element}
 * @function
 */
import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Colors from '@/constants/Colors';


interface ResultProps { 
  selectionResult: boolean | null;  
}

export default function Result({ selectionResult }: ResultProps): JSX.Element {
  return (
  <View style={[
    styles.resultContainer,
    selectionResult === true ? styles.resultContainerSuccess : styles.resultContainerError,
    ]}
  >
    <View style={styles.textGroup}>
      {selectionResult !== undefined && (
        <>
          <Image style={styles.icon} source={selectionResult === true ? require('@/assets/images/check.png') : require('@/assets/images/cancel_light.png')} />
          <View style={styles.textWrapper}>
            <Text style={[
              styles.text,
              selectionResult === true ? styles.textSuccess : styles.textError,
              ]}
            >
              {selectionResult === true ? 'Amazing!' : 'Oops!'}
            </Text>
          </View>
          <View style={styles.imageWrapper}>
          <Image style={styles.icon} source={require('@/assets/images/ios_share.png')} />
          </View>
        </>
      )}
    </View>
  </View>
  )
}



const styles = StyleSheet.create({
  resultContainer: {
    position: 'absolute',
    bottom: 0,
    width: 390,
    height: 188,
    flexShrink: 0,
  },
  resultContainerSuccess: {
    backgroundColor: Colors.primaryVariant,
  },
  resultContainerError: {
    backgroundColor: Colors.errorVariant,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 10, /* 208.333% */
  },
  textSuccess: {
    color: Colors.onPrimaryVariant.highEmphasis,
  },
  textError: {
    color: Colors.onErrorVariant.highEmphasis,
  },
  textGroup: {
    display: 'flex',
    height: 32,
    flexShrink: 0,
    flexDirection: 'row',
    paddingTop: 32,
    paddingRight: 48,
    paddingBottom: 0,
    paddingLeft: 48,
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    width: 32,
    height: 32,
    flexShrink: 0,
    right: 0,
  },
  textWrapper: {
    display: 'flex',
    width: 128,
    height: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
  },
  imageWrapper: {
    right: -72,
    // paddingLeft: 40,
  },
})