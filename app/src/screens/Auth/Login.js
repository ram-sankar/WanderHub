import React, {useState} from "react";
import { ScrollView, StyleSheet, Pressable } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { ErrorMessage, Form, FormField, SubmitButton } from "../../components/forms";
import { colors, sizes } from "../../constants/theme";
import authApi from "../../api/auth"
import useAuth from "../../auth/useAuth";
import routes from "../../navigator/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Login({navigation}) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({email, password}) => {
    const result = await authApi.login(email, password)
    if(!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.headers["x-auth-token"])
  }

  const LoginForm = () => (
    <Form 
        initialValues={{ email: "jonas@dark.com", password: "martha" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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

  return (
    <AppScreen style={styles.container}>
      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <BackButton/>
        <AppText style={styles.headingText}>Welcome Back!</AppText>
        <LoginForm/>
        <AppText style={styles.forgotPassword}>Forgot your password?</AppText>
        <Pressable style={styles.signUpButton} onPress={() => navigation.navigate(routes.REGISTER)}>
          <AppText style={[styles.forgotPassword, styles.signUpContainer]}>
            Don't have an account?
            <AppText style={styles.signUp}> SIGN UP</AppText>
          </AppText>
        </Pressable>
      </ScrollView>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  },
  headingText: {
    fontSize: sizes.fontXXXL,
    fontWeight: '700',
    paddingBottom: 30,
    textAlign: 'center',
    marginTop: '20%'
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
  signUp: {
    color: colors.primary,
    fontWeight: '700',
    alignItems: 'flex-start',
  },
  signUpContainer: {
    // marginTop: 'auto'
    alignItems: 'flex-start',
  }
});

export default Login;