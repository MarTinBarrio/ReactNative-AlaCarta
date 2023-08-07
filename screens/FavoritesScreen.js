import { View, Text, StyleSheet } from 'react-native';
import { useContext } from "react";
import MealList from "../components/MealList/MealList";
//import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";

function FavoritesScreen () {

  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector ((state)=> state.favoriteMeals.ids );

  //const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));
  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0){
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }else{
    return (<MealList items = {favoriteMeals}/>);
  }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
})