import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AboutUsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="black" style="light" />
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.paragraph}>
        Welcome to our QR Code Scanner app, a powerful and user-friendly tool
        designed to simplify the way you interact with QR codes and barcodes.
        Built using the React Native and Expo frameworks, our app combines
        efficiency with modern technology to deliver a seamless scanning
        experience on your mobile device.
      </Text>

      <Text style={styles.subTitle}>Key Features:</Text>

      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Fast and Accurate Scanning:</Text> Quickly
        scan QR codes and barcodes with precision, providing instant results.
      </Text>
      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Multi-format Support:</Text> Our app
        supports multiple formats, including QR codes and various barcode types,
        making it versatile for different use cases.
      </Text>
      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Flashlight Control:</Text> Easily toggle the
        flashlight on and off directly within the app to enhance scanning in
        low-light conditions.
      </Text>
      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Camera Switching:</Text> Switch between the
        front and rear cameras to accommodate different scanning needs.
      </Text>
      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Clean and Intuitive UI:</Text> Enjoy a sleek
        and user-friendly interface that makes scanning straightforward and
        efficient.
      </Text>

      <Text style={styles.subTitle}>Why Choose Us?</Text>

      <Text style={styles.paragraph}>
        We understand the importance of quick and reliable scanning in today's
        fast-paced world. Whether you're scanning product barcodes, event
        tickets, or accessing information via QR codes, our app is designed to
        make the process as smooth and efficient as possible.
      </Text>

      <Text style={styles.paragraph}>
        Thank you for choosing our QR Code Scanner app. We are committed to
        continuous improvement and welcome any feedback to help us serve you
        better.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: "justify",
  },
  bold: {
    fontWeight: "bold",
  },
});
