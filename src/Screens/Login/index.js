import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import  LinearGradient from "react-native-linear-gradient"; 
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <LinearGradient 
      colors={["#7f0d3f", "#2c0e4e"]} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }} 
      style={styles.container}
    >
      <Text style={styles.header}>Hello</Text>
      <Text style={styles.subHeader}>Sign in!</Text>
      
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gmail</Text>
        <View style={styles.mailContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your emaill"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#aaa" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <LinearGradient 
          colors={["#ff3d00", "#8e0e4d"]} 
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 1 }} 
          style={styles.gradientButton}
        >
          <Text style={styles.signInText}>SIGN IN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account? <Text style={styles.signUp}>Sign up</Text>
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  subHeader: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    color: "#333",
    flex: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  mailContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    color: "#ddd",
    textAlign: "right",
    marginBottom: 20,
  },
  signInButton: {
    borderRadius: 10,
    overflow: "hidden",
  },
  gradientButton: {
    padding: 15,
    alignItems: "center",
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    color: "#ddd",
    marginTop: 20,
  },
  signUp: {
    fontWeight: "bold",
    color: "#fff",
  },
});

