import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{
        flex: 1,
        marginHorizontal:2,
        backgroundColor: "#bfcce0"
    }}>
        {/* render header */}
        <Header headerText={"Hi, shanuka"} headerIcon={"bell-o"}/>

        {/* SearchFilter */}
        <SearchFilter icon="search" placeholder={"Enter Your Fav Recipe"}/>

        {/* catogories filter */}
        <View style={{ marginTop: 22 }}>

				<Text style={{
                     fontSize: 22,
                     fontWeight: "bold"
                     }}
                >catogories</Text>
                <CategoriesFilter />
		</View>

        <View style={{ marginTop: 22, flex: 1 }}>

				<Text style={{
                     fontSize: 22,
                     fontWeight: "bold"
                     }}
                >Recipes</Text>

				{/* <RecipeCard /> */}
                <RecipeCard />
		</View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const style = StyleSheet.create({});