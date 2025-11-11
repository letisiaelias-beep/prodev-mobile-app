import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/_joinstyle";

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Text onPress={() => router.back()}>{'< Back'}</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create a new account to get started</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formControl} placeholder="Enter your full name" />

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
        onPress={() => router.push("/signin")} // after joining, go to sign in
      >
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text
          style={styles.signupSubTitleText}
          onPress={() => router.push("/signin")}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
}
