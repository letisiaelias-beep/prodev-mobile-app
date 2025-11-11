import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/_joinstyle";

export default function Signin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Text onPress={() => router.back()}>{'< Back'}</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Access your account</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} placeholder="Enter password" secureTextEntry />
          <Text>👁️</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => alert("Signed In")} // placeholder action
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <Text
          style={styles.signupSubTitleText}
          onPress={() => router.push("/join")}
        >
          Join Now
        </Text>
      </View>
    </View>
  );
}
