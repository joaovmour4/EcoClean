import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

export default function _layout() {
  return (
    <Tabs
        screenOptions={{ headerShown: false, headerLeftLabelVisible: false }}
    >
      <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
    </Tabs>
  )
}