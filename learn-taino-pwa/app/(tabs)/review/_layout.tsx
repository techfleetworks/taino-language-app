import { Stack } from 'expo-router';
import React from 'react';

export default function ReviewLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="lessons"
        options={{
          headerTitle: ''
        }}
      />
    </Stack>
  );
}
