import { ContextProvider } from "@/hooks/Context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <ContextProvider>
      <StatusBar backgroundColor="black" style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerStyle: {
              width: "60%",
              marginTop: "4%",
              backgroundColor: "#dadada",
            },
            headerLeft: () => (
              <Ionicons
                name="menu"
                size={32}
                color="#fff" // Customize color
                style={{ marginLeft: 15 }} // Customize margin or other styling
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())} // Open the drawer
              />
            ),
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Scan",
              headerShown: false,
              drawerItemStyle: {
                borderBottomColor: "#d3d3d3",
                borderBottomWidth: 1,
                padding: 4,
              },
              drawerLabelStyle: {
                fontSize: 16,
              },
            }}
          />
          <Drawer.Screen
            name="detail"
            options={{
              headerShown: true,
              drawerItemStyle: { display: "none" },
              headerTitle: "Scan",
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
              },
              drawerLabelStyle: {
                fontSize: 16,
              },
            }}
          />
          <Drawer.Screen
            name="generateqr"
            options={{
              headerShown: true,
              drawerLabel: "Generate",
              headerTitle: "Generate",
              drawerItemStyle: {
                borderBottomColor: "#d3d3d3",
                borderBottomWidth: 1,
                padding: 4,
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
              },
              drawerLabelStyle: {
                fontSize: 16,
              },
            }}
          />
          <Drawer.Screen
            name="guide"
            options={{
              headerShown: true,
              drawerLabel: "Guide",
              headerTitle: "Guide",
              drawerItemStyle: {
                borderBottomColor: "#d3d3d3",
                borderBottomWidth: 1,
                padding: 4,
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
              },
              drawerLabelStyle: {
                fontSize: 16,
              },
            }}
          />
          <Drawer.Screen
            name="aboutus"
            options={{
              headerShown: true,
              drawerLabel: "About Us",
              headerTitle: "About Us",
              drawerItemStyle: {
                borderBottomColor: "#d3d3d3",
                borderBottomWidth: 1,
                padding: 4,
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
              },
              drawerLabelStyle: {
                fontSize: 16,
              },
            }}
          />
          <Drawer.Screen
            name="contactus"
            options={{
              headerShown: true,
              drawerLabel: "Contact Us",
              headerTitle: "Contact Us",
              drawerItemStyle: {
                borderBottomColor: "#d3d3d3",
                borderBottomWidth: 1,
                padding: 4,
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
              },
              drawerLabelStyle: {
                fontSize: 16,
              },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ContextProvider>
  );
}
