import { sizes } from "./theme";

export default {
  button: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "70%",
    marginVertical: 10,
  },
  headingText: {
    fontWeight: '700',
    fontSize: sizes.fontXL,
    marginBottom: 30
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius: 30,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  }
} as { [key: string]: Object; };
