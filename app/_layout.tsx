import { ContextProvider } from "@/hooks/Context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
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
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
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
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
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
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
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
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "600",
              },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ContextProvider>
  );
}
