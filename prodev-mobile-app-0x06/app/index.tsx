import { useRouter } from "expo-router"; // <-- import router
import { Image, Text, TouchableOpacity, View } from "react-native";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";
import { styles } from "../styles/_mainstyle";

export default function Index() {
  const router = useRouter(); // <-- initialize router

  return (
    <View style={styles.container}>
      <Image source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer} />
      <View style={styles.logoContainer}>
        <Image source={HEROLOGO} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome to ProDev Mobile App</Text>
        <Text style={styles.titleSubTextContainer}>
          Build amazing apps with React Native
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => router.push("/join")} // <-- navigate to join
        >
          <Text style={styles.buttonPrimaryText}>Join Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => router.push("/signin")} // <-- navigate to signin
        >
          <Text style={styles.buttonSecondaryText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
