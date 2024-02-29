import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const WelcomeScreen = ( { navigation } ) => {
  return (
	<View style={{ flex: 1, alignItems: 'center', backgroundColor: "#8ea8d1" }}>
		<Image source={require("../../assets/images/welcome2.png")} />

		<Text style={{
			color: "#f96163",
			fontSize: 22,
			fontWeight: "bold"
		}}>
			40k Primium Recipes
		</Text>
		<Text style={{
			color: "black",
			fontSize: 42,
			fontWeight: "bold",
			marginTop: 44,
			marginBottom: 40,
		}}>
			Cook Like A chef
		</Text>
		<TouchableOpacity 
			onPress={() => navigation.navigate("RecipeList")}
		style={{
			backgroundColor: "#eb6d1e",
			borderRadius: 18,
			paddingVertical:18,
			width: "80%",
			alignItems: "center"
		}}>
			<Text style={{
				fontSize: 18,
				color: "black",
				fontWeight: "700",
			}}>Let's Go
			</Text>

		</TouchableOpacity>
	</View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({});