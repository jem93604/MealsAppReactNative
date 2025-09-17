import { useCallback, useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
//import { FavoritesContext } from "../store/context/favs-context";
import IconButtons from "../Components/IconButtons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../store/redux/favorites";

const RecipieOverView = ({ route, navigation }) => {
  // Data will be passed in through route.params
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
    id,
  } = route.params;
  // const favmealctx = useContext(FavoritesContext);

  const favMealIds = useSelector((state) => state.favMeals.ids);
  const dispatch = useDispatch();

  const [mealisfav, setMealisfav] = useState(favMealIds.includes(id));

  const changeFavoriteStatus = useCallback(() => {
    console.log("changeFavoriteStatus called for ID:", id); // Debugging line
    if (!mealisfav) {
      dispatch(addFavorites({ id: id }));
    } else {
      dispatch(removeFavorites({ id: id }));
    }
    setMealisfav((currentStatus) => !currentStatus);
  }, [dispatch, id, mealisfav]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View>
            <IconButtons
              onPress={changeFavoriteStatus}
              icon={mealisfav ? "star" : "star-outline"}
              color={"white"}
            />
          </View>
        );
      },
    });
  }, [navigation, changeFavoriteStatus, mealisfav]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listItem}>
              <Text style={styles.listItemText}>{ingredient}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {steps.map((step, index) => (
            <View key={step} style={styles.listItem}>
              <Text style={styles.listItemText}>{`${index + 1}. ${step}`}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipieOverView;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
    backgroundColor: "grey",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "95%",
  },
  subtitleContainer: {
    padding: 16,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listItem: {
    borderRadius: 56,
    paddingHorizontal: 0,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  listItemText: {
    color: "#351401",
    textAlign: "center",
  },
});
