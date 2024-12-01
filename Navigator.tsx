import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NoteScreen from "./screens/NoteScreen";
import SettingScreen from "./screens/SettingScreen";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AddNoteScreen from "./screens/AddNoteScreen";
import EditNoteScreen from "./screens/EditNoteScreen";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
        name="Home"
        component={NoteScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color="black" />
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
        name="Setting"
        component={SettingScreen}
      />
    </BottomTab.Navigator>
  );
};

export const StackNavigtor = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={BottomTabNavigator}
      />
      <Stack.Screen name="Addnote" component={AddNoteScreen} />
      <Stack.Screen name="EditNote" component={EditNoteScreen} />
    </Stack.Navigator>
  );
};
