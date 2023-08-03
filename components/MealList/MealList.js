import { View, FlatList, StyleSheet } from "react-native";
import MealItem from './MealItem.js';

function MealList ({items}){

  function renderMealItem(itemData) {

    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    };
    
    return (
      //<MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}/>
      <MealItem {...mealItemProps}/>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});