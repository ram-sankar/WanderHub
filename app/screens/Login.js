import React, {useState} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import defaultStyles from "../constants/styles";
import { colors, sizes } from "../constants/theme";
import authApi from "../api/auth"
import useAuth from "../auth/useAuth";

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

    // if (email==='jonas@dark.com' && password==='martha') {
    //   return navigation.navigate('Home')
    // } else {
    //   setLoginFailed(true)
    // }
  }

  const loginForm = (
    <Form 
        initialValues={{ email: "jonas@dark.com", password: "martha" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" style={styles.loginButton}/>
      </Form>
  )

  return (
    <AppScreen style={styles.container}>
      <BackButton/>
      <AppText style={defaultStyles.headingText}>Login</AppText>
      {loginForm}
      <AppText style={styles.forgotPassword}>Forgot your password?</AppText>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  },
  backIcon: {
    marginLeft: -15,
    marginBottom: 15
  },
  loginButton: {
    width: '100%',
    marginTop: 20
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    color: colors.gray
  }
});

export default Login;