import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert, // Ganti Button dengan ini
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handlePress = () => {
    setDisplayText(text);
    Alert.alert("Informasi", `Kamu mengetik: ${text}`);
  };

  return (
    <View style={styles.container}>
      {/* Ikon information-circle di atas (SUDAH BENAR) */}
      <View style={styles.iconContainer}>
        <Ionicons name="information-circle" size={50} color="red" />
      </View>

      <Text style={styles.title}>Hello World</Text>
      
      <TextInput
        placeholder="Type here..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />

      {/* === PERBAIKAN: Tombol Kustom agar bisa memuat Ikon === */}
      <TouchableOpacity style={styles.customButton} onPress={handlePress}>
        {/* Ikon hand-left di dalam tombol */}
        <Ionicons name="hand-left" size={24} color="white" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>CLICK ME</Text>
      </TouchableOpacity>
      {/* ===================================================== */}

      {displayText ? (
        <Text style={styles.output}>Hasil: {displayText}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f2fe",
    justifyContent: "center",
    padding: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  // === GAYA BARU UNTUK TOMBOL KUSTOM ===
  customButton: {
    backgroundColor: "#2196F3", // Warna biru tombol
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    flexDirection: "row", // Agar ikon dan teks sejajar horizontal
    alignItems: "center", // Agar berada di tengah secara vertikal
    justifyContent: "center", // Agar berada di tengah secara horizontal
    elevation: 3, // Efek bayangan (Android)
  },
  buttonIcon: {
    marginRight: 10, // Jarak antara ikon dan teks
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  // =======================================
  output: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
    color: "#333",
    fontWeight: "600",
  },
});