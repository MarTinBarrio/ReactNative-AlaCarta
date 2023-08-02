import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();
//creo un obj con 2 propiesdades: Navigator & Screen...

//Para la nueva Rama 3

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* 
        
          <Stack.Navigator initailRouteName="MealsCategories"> 
          puedo indicar cual es la página inicial... por medio del prop
          ó toma la 1er página registrada en <Stack.Screen> como inicial..,

          https://reactnavigation.org/docs/native-stack-navigator

          */}

          {/* Registro los nombres de las paginas a las q se puede navegar */}

          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              //Estas opciones están en docs - https://reactnavigation.org/docs/native-stack-navigator
              title: "All Categories",
            }}
          />

          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
                      //route & navigation los pasa por default react-navigation
            //options={({ route, navigation }) => {
              //route.params.categoryId lo trae del componente screen
              //const catId = route.params.categoryId;
              //return {
                //title: catId,
              //};
              
            //}}
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}

            // options={{
            //   headerRight: ()=>{
            //     return <Button title="Tap Me!" onPress={(null)}></Button>
            //   },
            // }} //se pueden agregar opciones de esta forma, y con ellas
                  //agregar un boton, pero lo recomandable es hacer desde el
                  //componente utilizando el hooks navigation            

          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

/* 
When setting up a Navigator (like <Stack.Navigator>) and registering its screens (via <Stack.Screen>), you can decide which screen will be shown as a default when the app starts.

Out of the box, the top-most screen (i.e. the first child inside of <Stack.Navigator>) is used as the initial screen.

I.e., in the following example, the AllProducts screen would be shown as an initial screen when the app starts:

<Stack.Navigator>
  <Stack.Screen name="AllProducts" component={AllProducts} /> // initial screen
  <Stack.Screen name="ProductDetails" component={ProductDetails} />
</Stack.Navigator>
You can therefore change the initial screen by changing the <Stack.Screen> order. Alternatively, there also is an initialRouteName prop that can be set on the navigator component (i.e., on <Stack.Navigator> in this case):

<Stack.Navigator initialRouteName="ProductDetails">
  <Stack.Screen name="AllProducts" component={AllProducts} /> 
  <Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
</Stack.Navigator> 
*/
