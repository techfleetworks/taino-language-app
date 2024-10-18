import { Text, textprops} from './Themed';

export function MonoText(props: textprops) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
