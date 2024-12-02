import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NoteScreen from "./screens/NoteScreen";
import SettingScreen from "./screens/SettingScreen";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AddNoteScreen from "./screens/AddNoteScreen";
import EditNoteScreen from "./screens/EditNoteScreen";
import { useSetting } from "./context/SettingContext";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const { mode, fontSize, changeFontSize, switchTheme } = useSetting();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: mode === "LIGHT" ? "white" : "black",
        tabBarInactiveTintColor: mode === "LIGHT" ? "white" : "black",
        tabBarStyle: {
          backgroundColor: mode === "LIGHT" ? "white" : "black",
        },
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo
              name="home"
              size={24}
              color={mode === "DARK" ? "white" : "black"}
            />
          ),
          tabBarActiveTintColor: mode === "DARK" ? "white" : "black",
          tabBarInactiveTintColor: mode === "DARK" ? "white" : "black",
        }}
        name="Home"
        component={NoteScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="settings"
              size={24}
              color={mode === "DARK" ? "white" : "black"}
            />
          ),
          tabBarActiveTintColor: mode === "DARK" ? "white" : "black",
          tabBarInactiveTintColor: mode === "DARK" ? "white" : "black",
        }}
        name="Setting"
        component={SettingScreen}
      />
    </BottomTab.Navigator>
  );
};

export const StackNavigtor = () => {
  const { mode, fontSize, changeFontSize, switchTheme } = useSetting();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: mode === "LIGHT" ? "white" : "black",
        },
        headerTitleStyle: {
          color: mode === "LIGHT" ? "black" : "white",
        },
      }}
    >
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
