import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router/build/exports";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            router.push("/");
          }}
        >
          <View style={styles.iconsection}>
            <Ionicons name="arrow-back" size={25} />
            <Image source={require("@/assets/images/logo-green.png")} />
          </View>
        </TouchableOpacity>

        <Text style={styles.titleText}>Create</Text>
        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.subText}>
          Enter your email and password to sign in.
        </Text>
        {/* form area */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput style={styles.passwordControl} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput style={styles.passwordControl} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        {/* divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.signupgroup}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.signupSubTitleText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.signupSubTitleText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.signupTitleText}>Have an account? Sign In </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/signin");
            }}
          >
            <Text style={styles.signupSubTitleText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
