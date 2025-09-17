import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  Platform,
} from "react-native";
import { useEffect, useRef } from "react";

const CategorieGridTiles = (props) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[styles.Card, { backgroundColor: props.color, opacity }]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.Button,
          pressed ? styles.ButtonPressed : null,
        ]}
        android_ripple={{ color: "#00000040" }}
        onPress={props.onPress}
      >
        <View style={styles.innerContainer}>
          <Text>{props.title}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default CategorieGridTiles;

const styles = StyleSheet.create({
  Card: {
    flex: 1,
    backgroundColor: "white",
    margin: 16,
    height: 100,
    width: 100,
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  Button: {
    flex: 1,
  },
  ButtonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});
