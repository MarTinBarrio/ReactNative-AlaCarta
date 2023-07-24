import {
  View,
  Pressable,
  Image,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{props.duration} min</Text>
            <Text style={styles.detailItem}>
              {props.complexity.toUpperCase()}{" "}
            </Text>
            <Text style={styles.detailItem}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black", //para ios
    shadowOpacity: 0.25, //para ios
    shadowOffset: { width: 0, height: 2 }, //para ios
    shadowRadius: 8, //para ios
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
