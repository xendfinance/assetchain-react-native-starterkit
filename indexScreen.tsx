import { StyleSheet, View, Button, Text } from "react-native";
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers-react-native'


export default function IndexScreen() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount()

  async function connect() {
    open({view: isConnected ? 'Account' : 'Networks'});
  }



  return (
    <View style={styles.screen}>
      <Text>{isConnected ? "Connected" : "Not Connected"}</Text>
      <Button
        title={isConnected ? "View Wallet" : "Connect Wallet"}
        onPress={connect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: 'center'
  }
});