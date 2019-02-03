import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import {
  Back,
  Heart,
  More,
  PinIcon,
  Share
} from '../util/icons'

export default class Pin extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>

        <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', flex: 1, padding: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <Back />
            <Heart />
            <Share />
            <More />
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'red', padding: 8, borderRadius: 6, justifyContent: 'space-between', width: 60 }}>
              <PinIcon />
              <Text style={{ color: 'white' }}>Save</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8, }}>
          <Text style={{ backgroundColor: 'pink', flex: 1, alignSelf: 'stretch', borderRadius: 6, }}>Placeholder</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 16, paddingRight: 8, paddingBottom: 16, paddingLeft: 8 }}>
          <View>
            <Text>Saved from</Text>
            <Text style={[{ fontWeight: 'bold' }]}>website.com</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <View style={[{ flexDirection: 'row', backgroundColor: 'red', padding: 8, borderRadius: 6, justifyContent: 'space-between', width: 60 },
            { backgroundColor: '#cecece', alignItems: 'center', justifyContent: 'center' }]}>
              <Text style={[{ color: 'white' }, { color: 'black', fontWeight: 'bold' }]}>Visit</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 5, flexDirection: 'row', paddingLeft: 8, paddingRight: 8 }}>
          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'black', marginRight: 8 }}>

          </View>
          <View>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>User Name </Text>
              saved to
              <Text style={{ fontWeight: 'bold' }}> Space</Text>
            </Text>
            <Text>Description Lorem Ipsum</Text>
          </View>
        </View>

      </View>
    )
  }
}
