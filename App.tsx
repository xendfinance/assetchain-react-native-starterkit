import { StatusBar } from "expo-status-bar";
import "@walletconnect/react-native-compat";
import {
  createWeb3Modal,
  defaultConfig,
  Web3Modal,
} from "@web3modal/ethers-react-native";
import IndexScreen from "./indexScreen";

// Get projectId at https://cloud.walletconnect.com
const projectId = process.env.EXPO_PUBLIC_WALLECT_CONNECT_PROJECTID as string;

const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://walletconnect.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
  },
};

const config = defaultConfig({ metadata });

const mainnet = {
  chainId: 0,
  name: "Asset Chain",
  currency: "ETH",
  explorerUrl: "",
  rpcUrl: "",
};

const assetChainTestnet = {
  chainId: 42421,
  name: "Asset Chain Testnet",
  currency: "RWA",
  explorerUrl: "https://https://scan-testnet.assetchain.org/",
  rpcUrl: "https://polygon-rpc.com",
};

const chains = [assetChainTestnet];

createWeb3Modal({
  projectId,
  chains,
  config,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function App() {
  return (
    <>
      <IndexScreen />
      <StatusBar />
      <Web3Modal />
    </>
  );
}
