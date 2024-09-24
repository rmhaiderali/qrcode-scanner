import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function GuideScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="black" style="light" />
      <Text style={styles.title}>
        How to Use the QR Code & Barcode Scanner App
      </Text>

      <Text style={styles.subTitle}>1. Open the App</Text>
      <Text style={styles.paragraph}>
        Launch the QR Code & Barcode Scanner app on your device. Ensure you have
        granted the necessary camera permissions for the app to function
        correctly.
      </Text>

      <Text style={styles.subTitle}>2. Point the Camera</Text>
      <Text style={styles.paragraph}>
        Simply point your device’s camera at the QR code or barcode you want to
        scan. Make sure the code is fully visible within the on-screen scanning
        area.
      </Text>

      <Text style={styles.subTitle}>3. Automatic Detection</Text>
      <Text style={styles.paragraph}>
        The app will automatically detect and scan the QR code or barcode. Once
        the code is recognized, the relevant information will be displayed on
        your screen.
      </Text>

      <Text style={styles.subTitle}>4. Access Scanned Information</Text>
      <Text style={styles.paragraph}>
        Depending on the type of code scanned, you can take different actions: -
        **QR Codes**: Open links, view text, add contacts, and more. -
        **Barcodes**: View product details, compare prices, or access additional
        information.
      </Text>

      <Text style={styles.subTitle}>5. Use the Flashlight (Optional)</Text>
      <Text style={styles.paragraph}>
        If you are scanning in a low-light environment, you can toggle the
        flashlight on and off by tapping the flashlight icon on the screen.
      </Text>

      <Text style={styles.subTitle}>6. Switch Camera (Optional)</Text>
      <Text style={styles.paragraph}>
        You can switch between the front and rear cameras if needed, especially
        for scanning codes on reflective surfaces or for selfie-mode scanning.
      </Text>

      <Text style={styles.subTitle}>7. Scan Again</Text>
      <Text style={styles.paragraph}>
        After a successful scan, you can tap the "Scan Again" button to continue
        scanning additional codes.
      </Text>

      <Text style={styles.paragraph}>
        Follow these simple steps to get the most out of your QR Code & Barcode
        Scanner app. If you need further assistance, please refer to our
        "Contact Us" section.
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
});
