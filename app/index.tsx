import { StatusBar, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
//import FavoritesContextProvider from "../store/context/favs-context";
import CategoriesScreen from "../Screens/categoriesScreen";
import MealsOverView from "../Screens/MealsOverView";
import RecipieOverView from "../Screens/RecipieOverView";
import FavoriteScreen from "../Screens/FavoriteScreen";
import { Provider } from "react-redux";
import { store } from "../store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// --- Stacks for each Drawer Item ---

function MainStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true, // Hide the header for the stack navigator
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        headerLeft: ({ tintColor }) => (
          <Ionicons
            name="menu"
            size={24}
            color={tintColor}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Stack.Screen name="MealsOverView" component={MealsOverView} />
      <Stack.Screen name="RecipieOverView" component={RecipieOverView} />
    </Stack.Navigator>
  );
}

function FavoritesStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true, // Show the header for the stack navigator
        headerStyle: { backgroundColor: "#351401", paddingTop: 10 },
        headerTintColor: "white",
        headerLeft: ({ tintColor }) => (
          <Ionicons
            name="menu"
            size={24}
            color={tintColor}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
        }}
      />
      <Stack.Screen name="RecipieOverView" component={RecipieOverView} />
    </Stack.Navigator>
  );
}

// --- Example of a new screen and stack ---
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Settings Screen</Text>
    </View>
  );
}

function SettingsStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401", paddingTop: 10 },
        headerShown: true, // Show the header for the stack navigator
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle={"light-content"} />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerShown: false, // Hide the header for the drawer navigator
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              drawerContentStyle: { backgroundColor: "#351401" }, // Drawer background
              drawerActiveBackgroundColor: "#e2b497",
              drawerActiveTintColor: "#351401",
              drawerInactiveTintColor: "white",
              drawerLabelStyle: {
                // marginLeft: -25, // This was the issue
                fontSize: 15,
              },
              headerLeft: ({ tintColor }) => (
                <Ionicons
                  name="menu"
                  size={24}
                  color={tintColor}
                  onPress={() => useNavigation().toggleDrawer()}
                />
              ),
            }}
          >
            <Drawer.Screen
              name="MainStack"
              component={MainStack}
              options={{
                title: "All Categories",
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="FavoritesStack"
              component={FavoritesStack}
              options={{
                title: "Favorites",
                drawerIcon: ({ color, size }) => (
                  // Use the color prop here
                  <Ionicons name="star" size={size} color={color} />
                ),
              }}
            />
            {/* --- Here is how you add a new drawer tab --- */}
            <Drawer.Screen
              name="SettingsStack"
              component={SettingsStack}
              options={{
                title: "Settings",
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="settings" size={size} color={color} />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </View>
  );
}
