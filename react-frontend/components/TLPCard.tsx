import { View, Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

type cardprops = {
	image?: string,
	text: string,
	style?: string 
};

// use Themed.tsx and StyledText.tsx text: if it will be the same throughout the program or override properties
export default function CardTemplate(props: cardprops) {
	const {image, text, style={}} = props;

	return (
		<Card style={styles.cardContainer} >
			<Card.Actions>
				<Card.Content style={styles.cardContent} >
					<Card.Cover style={styles.cardLogo} source={require('../assets/images/adaptive-icon.png')} />
					<Text variant="bodySmall"  style={styles.cardText} >{text}</Text>
				</Card.Content>
			</Card.Actions>
		</Card>
	);
};


const styles = StyleSheet.create({
	cardContainer: {
		height: 100,
		width: 100,
		borderRadius: 20,
		backgroundColor: "#ffffff",
		paddingTop: 16,
	},
	cardContent: {
		flex: 1,
		alignItems: "center",
		gap: 4,
	},
	cardLogo: {
		height: 30,
		width: 30,
	},
	cardText: {
		position: "absolute",
	},
});
