import { MealsList } from "@/Components/MealsList/MealsList";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "@/store/context/favs-context";
import { useContext } from "react";
import { MEALS } from "@/data/dummy";
import { useSelector } from "react-redux";

const UserScreen = () => {
  // return ( <MealsList itemData={'as'}
  const favoritesCtx = useContext(FavoritesContext);
  const favMealIds = useSelector((state: any) => state.favMeals.ids);

  favoritesCtx.ids = favMealIds;

  const favoriteMeals = MEALS.filter((meal) => {
    return favoritesCtx.ids.includes(meal.id);
  });
  console.log("currently favorite meals are", favoriteMeals);
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          No Favorites Found
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MealsList itemData={favoriteMeals} title="Your Favorites" />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 10,
  },
});
