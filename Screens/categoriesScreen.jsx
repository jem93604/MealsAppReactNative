import { CATEGORIES } from "../data/dummy";
import { FlatList } from "react-native";
import CategorieGridTiles from "../Components/CategorieGridTiles";

const CategoriesScreen = ({ navigation }) => {
  const renderCategory = (itemData) => {
    function PressHandler() {
      navigation.navigate("MealsOverView", {
        catId: itemData.item.id,
        color: itemData.item.color,
      });
    }
    return (
      <CategorieGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={PressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
