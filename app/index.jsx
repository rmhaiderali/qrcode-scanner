import QrCode from "@/components/QrCode";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor="black" style="light" />
      <QrCode />
    </>
  );
}
