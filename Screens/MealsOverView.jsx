import { StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy";
import { useLayoutEffect } from "react";
import { MealsList } from "../Components/MealsList/MealsList";
const MealsOverView = ({ route, navigation }) => {
  const catId = route.params.catId;
  const color = route.params.color;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const PressHandler = () => {
    navigation.navigate("RecipieOverView", {
      title: "hello",
      content: "hi mate",
    });
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList itemData={displayedMeals} />;
};

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
