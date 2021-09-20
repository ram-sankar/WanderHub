import React, {useState} from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { ErrorMessage, Form, FormField, SubmitButton } from "../../components/forms";
import { colors, sizes } from "../../constants/theme";
import authApi from "../../api/auth"
import useAuth from "../../auth/useAuth";
import AppIcons from "../../components/AppIcons";

const { height } = Dimensions.get('window');

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Login() {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({email, password}) => {
    const result = await authApi.login(email, password)
    if(!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.headers["x-auth-token"])
  }

  const handleGoogleLogin = () => {}

  const FBAndGoogleButton = () => (
    <View style={styles.fBAndGoogleButtonContainer}>
      <TouchableOpacity style={styles.fbButton} onPress={handleGoogleLogin}>
        <AppIcons Icon='FontAwesome5' style={styles.likesIcon} name='facebook-f' size={24} color={colors.white}/>
        <AppText style={styles.fbButtonText}>
          CONTINUE WITH FACEBOOK
        </AppText>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <AppIcons Icon='AntDesign' style={styles.likesIcon} name='google' size={24} color={colors.primary}/>
        <AppText style={styles.googleButtonText}>
          CONTINUE WITH GOOGLE
        </AppText>
      </TouchableOpacity>
    </View>
  )

  const LoginForm = () => (
    <Form 
        initialValues={{ email: "jonas@dark.com", password: "martha" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppText style={styles.loginText}>LOG IN WITH EMAIL</AppText>
        <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="LOG IN" style={styles.loginButton}/>
      </Form>
  )

  // const KeyboardAvoidingComponent = () => (

  // )

  return (
    <AppScreen style={styles.container}>
      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <BackButton/>
        <AppText style={styles.headingText}>Welcome Back!</AppText>
        <FBAndGoogleButton/>
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyBoardContainer}
        > */}
          <LoginForm/>
        {/* </KeyboardAvoidingView> */}
        <AppText style={styles.forgotPassword}>Forgot your password?</AppText>
        <AppText style={[styles.forgotPassword, styles.signUpContainer]}>
          Don't have an account?
          <AppText style={styles.signUp}> SIGN UP</AppText>
        </AppText>
      </ScrollView>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  },
  keyBoardContainer: {
    flex: 1
  },
  headingText: {
    fontSize: sizes.fontXXXL,
    fontWeight: '700',
    paddingBottom: 30,
    textAlign: 'center'
  },
  fBAndGoogleButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
    paddingBottom: 20
  },
  fbButton: {
    flexDirection: 'row',
    backgroundColor: colors.blue,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  fbButtonText: {
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
    flex: 1
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: colors.tertiary,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  googleButtonText: {
    fontWeight: '700',
    textAlign: 'center',
    flex: 1
  },
  loginText: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontWeight: '700',
    fontSize: sizes.fontL
  },
  loginButton: {
    width: '100%',
    marginTop: 20,
    fontWeight: '700',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '700',
    fontSize: 15,
  },
  signUpContainer: {
    // position: 'absolute',
    // bottom: 30,
    // left: 0,
    // right: 0,
  },
  signUp: {
    color: colors.primary,
    fontWeight: '700'
  }
});

export default Login;