import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import QRCode from "react-native-qrcode-svg";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

export default function generateQrScreen() {
  const [QR, setQR] = useState("");
  const [input, setInput] = useState("");
  const [QRref, setQRref] = useState();
  const [hasPermissions, setHasPermissions] = useState(false);

  const generateQRCode = () => {
    setQR(input);
  };

  useEffect(() => {
    (async () => {
      setHasPermissions((await MediaLibrary.requestPermissionsAsync()).granted);
    })();
  }, []);

  const saveQRCode = () => {
    if (!hasPermissions || !QRref) return;

    QRref.toDataURL(async (data) => {
      const QRCodeImg = FileSystem.documentDirectory + "QRCode.png";
      await FileSystem.writeAsStringAsync(QRCodeImg, data, {
        encoding: FileSystem.EncodingType.Base64,
      });
      MediaLibrary.saveToLibraryAsync(QRCodeImg)
        .then(() =>
          ToastAndroid.show("QR Code saved successfully", ToastAndroid.LONG)
        )
        .catch(console.error);
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <StatusBar backgroundColor="black" style="light" />
      <View style={styles.container}>
        {!QR && (
          <View style={styles.field}>
            <TextInput
              style={styles.input}
              cursorColor={"black"}
              selectionColor={"black"}
              onChangeText={setInput}
              value={input}
              placeholderTextColor="#555555"

              placeholder="Content"
            />
            <TouchableOpacity style={{ marginTop: 20 }} onPress={generateQRCode}>
              <Text style={styles.button}>Generate</Text>
            </TouchableOpacity>
          </View>
        )}

        {QR && (
          <View style={styles.qr}>
            <View style={styles.qrContainer}>
              <QRCode
                size={200}
                value={QR}
                getRef={setQRref}
                backgroundColor="#fff"
              />
            </View>
            <TouchableOpacity
              style={[styles.btnContainer, styles.save]}
              onPress={saveQRCode}
            >
              <Text style={styles.instraction}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnContainer, styles.new]}
              onPress={() => setQR("")}
            >
              <Text style={styles.instraction}>Create New</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#fff",
    marginTop: "50%",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  icon: {
    color: "rgb(59 130 246)",
  },

  field: {
    flexDirection: "col",
    marginBottom: 30,
  },

  input: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: "100%",
    height: "60%",
    borderWidth: 1.5,
    marginRight: 10,
    borderRadius: 5,
    borderColor: "gray",
    backgroundColor: '#FFFFFF',
  },

  button: {
    padding: 14,
    borderRadius: 5,
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
  },

  qrContainer: { borderWidth: 1, borderColor: "gray", padding: 10 },

  qr: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    borderWidth: 2,
    borderColor: "black",
    padding: 4,
    borderRadius: 5,
    backgroundColor: "black",
    width: "70%",
  },
  instraction: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 15,
    textAlign: "center",
  },
  save: {
    marginTop: 20,
  },
  new: {
    marginTop: 6,
  },
});
