import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }){
  function renderCategoryItem(itemData){
    function pressHandler(){
      //navigation.navigate('MealsOverview');
      //envío el msg del nombre pag a la q quiero navegar
      //nombre q registré en el stack
      //pero como segundo parámetro lepuedo pasar un obj, con la info a mostrar en esa pag.
      navigation.navigate('MealsOverview',{categoryId: itemData.item.id,});
    };
  
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        />
    );
  };

  return (
    <FlatList
      numColumns={2}                  // set number of columns       
      data={CATEGORIES}
      keyExtractor={(item)=>{item.id}}
      renderItem={renderCategoryItem}
      />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  list: {
  }
});