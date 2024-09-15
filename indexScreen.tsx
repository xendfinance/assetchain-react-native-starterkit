import { StyleSheet, View, Button } from "react-native";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import { useAccount } from "wagmi";

export default function IndexScreen() {
  const { open } = useWeb3Modal();
  const {isConnected} = useAccount()

  async function connect() {
    open({view: isConnected ? 'Account' : 'Networks'});
  }



  return (
    <View style={styles.screen}>
        
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
