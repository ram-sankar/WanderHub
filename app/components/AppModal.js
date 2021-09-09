import React from "react";
import { View, Modal, StyleSheet } from "react-native";

function AppModal({ isModalVisible, children, height, width, ...rest }) {
  
  return (
    <Modal
      transparent={true}
      visible={isModalVisible}
      {...rest}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView(height, width)}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: (height, width) => ({
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: height,
    width: width,
  }),
});
export default AppModal;
