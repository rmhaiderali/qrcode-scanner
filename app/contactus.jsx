import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function ContactUsScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if ([name, email, message].some((items) => items.trim() === "")) {
      return ToastAndroid.show("All Fields are require", ToastAndroid.LONG);
    }
    // console.log("Contact US detail:", name, email, message);
    setTimeout(() => {
      ToastAndroid.show(`Your message was submitted.`, ToastAndroid.LONG);
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="black" style="light" />
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#555555" //
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#555555" //
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Your Message"
        placeholderTextColor="#555555" //
        multiline={true}
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          borderRadius: 5,
        }}
      >
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "black",
            // No need to adjust padding or height
          }}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} // Increases touch target size by 8dp on each side
        >
          <Text style={{ color: "white" }}>Send Message</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={handleSubmit}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "black",
          }}
        >
          <Text style={{ color: "white" }}>Send Message</Text>
        </TouchableOpacity> */}
      </View>

      {/* <View style={styles.contactInfo}>
        <Text style={styles.subTitle}>Our Contact Information:</Text>
        <Text style={styles.paragraph}>Email: support@qrcodescanner.com</Text>
        <Text style={styles.paragraph}>Phone: +1 234 567 890</Text>
        <Text style={styles.paragraph}>
          Address: 1234 QR Code Lane, Scanville, SC 12345
        </Text>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: "30%",
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
  input: {
    height: 50,
    borderColor: "gray", //
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F2F2F2", //
  },
  textArea: {
    height: 100,
  },
  contactInfo: {
    marginTop: 30,
  },
});
