import React from 'react';
import { Text, textprops} from './Themed';

export function MonoText(props: textprops) {
  return <Text {...props} style={[props.style, { fontFamily: 'Inter' }]} />;
}
