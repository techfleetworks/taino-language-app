import React from 'react';
import { Text, textprops } from '@/components/globals/Themed';

export function MonoText(props: textprops) {
  return <Text {...props} style={[props.style, { fontFamily: 'Inter' }]} />;
}
