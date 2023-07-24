import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

//route and navigation son props q siempre los pasa react-navigation a los componentes
function MealsOverviewScreen({ route, navigation }) {
  //en cualquier screen que registré con Navigation, puedo acceder al props
  //https://reactnavigation.org/docs/route-prop/

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {

    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    //puedo setear desde aca las opciones de navegación de este compornente.
    navigation.setOptions({
      title: categoryTitle,
    });

  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return (
      //<MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}/>
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
