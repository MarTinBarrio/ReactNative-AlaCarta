import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function CategoryGridTile ({ title, color, onPress }){
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({ pressed })=>[ //pressed lo proporsiona react native al presionara
          styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
        >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.tittle}>{title}</Text>
        </View>
      </Pressable>
    </View>

  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, //para andorid
    shadowColor: 'black', //para ios
    shadowOpacity: 0.25, //para ios
    shadowOffset: { width: 0, height: 2}, //para ios
    shadowRadius: 8,  //para ios
    backgroundColor: 'white',  //para ios
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button:{
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer:{
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 18,

  }
});