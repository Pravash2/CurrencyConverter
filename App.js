import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }
  buttonPressed = currency => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter Your Name" + currency);
    }
    let result = (
      parseFloat(this.state.inputValue) * currencyPerRupee[currency]
    ).toFixed(5);
    this.setState({ resultValue: result });
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView>
          <View style={[styles.container, { marginTop: 70 }]}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                selectionColor="#fff"
                keyboardType="numeric"
                placeholder="Enter Value"
                value={this.state.inputValue}
                onChangeText={inputValue => this.setState({ inputValue })}
              />
            </View>
            <View style={styles.converterButtonContainer}>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("DOLLAR")}
              >
                <Text style={styles.converterButtonText}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("EURO")}
              >
                <Text style={styles.converterButtonText}>Euro</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("POUND")}
              >
                <Text style={styles.converterButtonText}>Pound</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("RUBEL")}
              >
                <Text style={styles.converterButtonText}>Rubel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("AUSDOLLAR")}
              >
                <Text style={styles.converterButtonText}>Aus</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("CANDOLLAR")}
              >
                <Text style={styles.converterButtonText}>Canada</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("YEN")}
              >
                <Text style={styles.converterButtonText}>YEN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("DINAR")}
              >
                <Text style={styles.converterButtonText}>Dinar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("BITCOIN")}
              >
                <Text style={styles.converterButtonText}>Bitty</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  resultContainer: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A78DE"
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  input: {
    marginTop: 30,
    color: "#fff",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0a79d3"
  },
  converterButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%"
  },
  converterButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  }
});
