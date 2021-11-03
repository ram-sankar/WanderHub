import React, {useState} from "react";
import { ScrollView, StyleSheet, Pressable } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { ErrorMessage, Form, FormField, SubmitButton } from "../../components/forms";
import { colors, sizes } from "../../constants/theme";
import userApi from "../../api/user"
import useAuth from "../../auth/useAuth";
import routes from "../../navigator/routes";
import { RegisterFormData } from "../../constants/models/Auth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("User Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function Register({navigation}: any) {
  const auth = useAuth();
  const [registerFailed, setRegisterFailed] = useState(null);
  const initialValues= { name: "jonas", email: "jonasK@dark.com", password: "martha_jonas" };

  const handleSubmit = async (data: RegisterFormData) => {
    const result = await userApi.register(data)
    if(!result.ok) return setRegisterFailed(result?.data as any);
    setRegisterFailed(null);
    auth.logIn(result?.headers?.["x-auth-token"] || '')
  }

  const RegisterForm = () => (
    <Form 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {registerFailed && <ErrorMessage error={registerFailed} visible={registerFailed}/>}
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="name"
          placeholder="User Name"
        />
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
        <SubmitButton title="SIGN UP" style={styles.registerButton}/>
      </Form>
  )

  return (
    <AppScreen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton/>
        <AppText style={styles.headingText}>Create your account</AppText>
        <RegisterForm/>
        <Pressable onPress={() => navigation.navigate(routes.LOGIN)}>
          <AppText style={[styles.forgotPassword, styles.loginContainer]}>
            Already have an account?
            <AppText style={styles.login}> LOG IN</AppText>
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
  registerText: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontWeight: '700',
    fontSize: sizes.fontL
  },
  registerButton: {
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
  login: {
    color: colors.primary,
    fontWeight: '700',
    alignItems: 'flex-start',
  },
  loginContainer: {
    alignItems: 'flex-start',
  }
});

export default Register;