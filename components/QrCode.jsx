import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Context } from "@/hooks/Context";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function QrCode() {
  const [hasPermission, setHasPermission] = useState(false);
  const [canAskAgain, setCanAskAgain] = useState(true);
  const [flash, setFlash] = useState(false);
  const [facing, setFacing] = useState("back");
  const animationValue = useRef(new Animated.Value(0)).current;
  const { setQrCodeDetail } = useContext(Context);

  const navigate = useNavigation();

  const getCameraPermissions = async () => {
    const { status, canAskAgain } =
      await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
    setCanAskAgain(canAskAgain);
  };

  useEffect(() => {
    getCameraPermissions();
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const getQrCodeData = ({ type, data }) => {
    setQrCodeDetail(data);
    navigate.navigate("detail", { screen: "detail" });
  };

  if (!hasPermission) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ paddingBottom: "4%", fontWeight: "400" }}>
          Permission required to access camera
        </Text>
        <TouchableOpacity
          onPress={canAskAgain ? getCameraPermissions : Linking.openSettings}
          style={{
            borderWidth: 2,
            padding: 5,
            paddingHorizontal: 4,
            borderRadius: 8,
            backgroundColor: "#000",
            borderColor: "#000",
          }}
        >
          <Text
            style={{
              color: "#fff",
              paddingHorizontal: "6%",
              fontWeight: "400",
            }}
          >
            Allow
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleFlash = () => {
    setFlash(!flash);
  };

  const toggleCameraType = () => {
    setFacing(facing === "back" ? "front" : "back");
  };

  const animatedLineStyle = {
    transform: [
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50], // Adjust to match the square size
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={getQrCodeData}
        facing={facing}
        enableTorch={flash}
        barcodeScannerSettings={{
          barcodeTypes: [
            "qr",
            "ean13",
            "ean8",
            "upc_a",
            "upc_e",
            "code39",
            "code93",
            "code128",
            "pdf417",
            "aztec",
          ],
        }}
        style={styles.cameraView}
      >
        <View style={styles.square}>
          <View style={styles.topLeftCorner} />
          <View style={styles.topRightCorner} />
          <View style={styles.bottomLeftCorner} />
          <View style={styles.bottomRightCorner} />
          <Animated.View style={[styles.animatedLine, animatedLineStyle]} />
        </View>
      </CameraView>
      {/* {scanned && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={{
              backgroundColor: "black",
              borderWidth: 1,
              borderRadius: 6,
              borderColor: "black",
            }}
            onPress={() => setScanned(false)}
          >
            <Text
              style={{ color: "white", paddingHorizontal: "14%", padding: 4 }}
            >
              Tap to Scan Again
            </Text>
          </Pressable>
        </View>
      )} */}
      <View style={styles.topButtons}>
        <TouchableOpacity
          onPress={() => navigate.dispatch(DrawerActions.openDrawer())}
          style={styles.iconButton}
        >
          <MaterialIcons name="menu" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFlash} style={styles.iconButton}>
          <Ionicons
            name={flash === true ? "flashlight" : "flashlight-outline"}
            size={36}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCameraType} style={styles.iconButton}>
          <MaterialIcons name="flip-camera-ios" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 250,
    height: 250,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  topLeftCorner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: "white",
  },
  topRightCorner: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: "white",
  },
  bottomLeftCorner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: "white",
  },
  bottomRightCorner: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: "white",
  },
  animatedLine: {
    width: "100%",
    height: 1,
    backgroundColor: "red",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    top: "50%",
    alignSelf: "center",
  },
  topButtons: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: "8%",
  },
  iconButton: {
    padding: 15,
  },
});
