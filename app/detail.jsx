import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import * as Clipboard from "expo-clipboard";
import { Context } from "@/hooks/Context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";

const DetailScreen = () => {
  const { qrCodeDetail } = useContext(Context);
  const navigate = useNavigation();
  async function copyToClipboard(data) {
    await Clipboard.setStringAsync(data);
  }
  return (
    <ScrollView style={{ marginTop: "50%" }}>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" style="light" />
        <View
          style={{
            padding: 16,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text style={{}}>{qrCodeDetail}</Text>
        </View>
        <View style={styles.copyButton}>
          <Pressable
            style={{ marginTop: 14, width: "100%" }}
            onPress={() => copyToClipboard(qrCodeDetail)}
          >
            <Text style={styles.copyText}>Copy Content</Text>
          </Pressable>
          <Pressable
            style={{ marginTop: 4, width: "100%" }}
            onPress={() => navigate.navigate("index", { screen: "index" })}
          >
            <Text style={styles.copyText}>Scan other QR</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: { padding: 6, paddingTop: "4%", paddingHorizontal: "4%" },
  copyButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  copyText: {
    borderWidth: 2,
    borderColor: "black",
    padding: 6,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    textAlign: "center",
  },
});
