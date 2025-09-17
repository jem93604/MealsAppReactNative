import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

export const MealsList = ({ itemData, navigation, title }) => {
  const PressHandler = () => {
    navigation.navigate("RecipieOverView", {
      title: title,
      content: "hi mate",
    });
  };

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        meal={itemData.item}
        color={"white"}
        PressHandler={PressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={itemData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
