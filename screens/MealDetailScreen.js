import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from "react";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
//import { FavoritesContext } from "../store/context/favorites-context";
import { removeFavorite, addFavorite } from '../store/redux/favorites'

function MealDetailScreen({ route, navigation }) {

  //const favoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMealIds = useSelector ((state)=> state.favoriteMeals.ids );
  //state is provides by redux.
  //state accede al key favoriteMeals: q está en store.js y ese accede al reducer + state q pusimos en favorites.js
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //const mealsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    //console.log("Pressed!");
    if(mealsFavorite){
      //favoriteMealsCtx.removeFavorite(mealId)
      dispatch(removeFavorite({id: mealId}));
    }else{
      //favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  }

  console.log(selectedMeal);


  //puedo setear desde aca las opciones de navegación de este compornente.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        //return <Button title="Tap Me" onPress={headerButtonPressHandler}></Button>
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color={"white"}
            icon={mealsFavorite ? "star" : 'star-outline'}
          />
        );
      },
      //title: selectedMeal.title,
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}> {selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
