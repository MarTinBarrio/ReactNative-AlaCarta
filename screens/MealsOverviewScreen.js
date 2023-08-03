import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";

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

  return (<MealList items={displayedMeals}/>);

}

export default MealsOverviewScreen;

