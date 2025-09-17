import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

const IconButtons = ({ icon, onPress, color }) => {
  return (
    <Pressable>
      <Ionicons name={icon} size={24} color={color} onPress={onPress} />
    </Pressable>
  );
};

export default IconButtons;
