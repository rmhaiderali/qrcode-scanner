import { useNavigation, useRouter } from "expo-router";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [qrCodeDetail, setQrCodeDetail] = useState("");
  return (
    <Context.Provider value={{ qrCodeDetail, setQrCodeDetail }}>
      {children}
    </Context.Provider>
  );
}
