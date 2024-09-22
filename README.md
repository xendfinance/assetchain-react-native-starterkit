# Assetchain React Native starterkit

A React Native demo application built with Expo. The application connects to the Assetchain network

# Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/downloads)
- Metamask([IOS](https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202), [Android](https://play.google.com/store/apps/details?id=io.metamask&hl=en_US)) Ensure you download and install Metamask Wallet on your Target Mobile Device
- Expo go ([IOS](https://apps.apple.com/us/app/expo-go/id982107779), [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)) Ensure you download and install Expo go App on your Target Mobile Device

# Technology Used

- [Expo](https://docs.expo.dev/)
- [Wallet Connect](https://walletconnect.com/)
- [Wagmi](https://wagmi.sh/)
- [Ethers V6](https://docs.ethers.org/v6/)

# Environment Setup

To get started with Asset Chain Mobile Demo App, follow the steps below:

1. Clone this repo & install dependencies

```bash
git clone https://github.com/xendfinance/assetchain-react-native-starterkit.git
cd assetchain-react-native-starterkit
yarn
```

2. Add enivoronmental Variables.
   Visit [Wallet Connect Cloud](https://cloud.walletconnect.com/) Dashboard to obtain your projectId.
   Generate .env file to your project root folder by running the command:

```bash
$ cp .env.example .env
```

In your .env file generated set WALLECT_CONNECT_PROJECTID to your Wallet conect project Id

3. Running Application
   To Start Application, Run the command

```bash
yarn start
```

then, scan the QR code displayed on your terminal using the Expo Go app on your mobile device.

# Templates

There are two templates in separate branches: the main branch contains the template for using Wagmi, while the ethers branch contains the template for using Ethers v6.

## Contributing

See [CONTRIBUTING.md](https://github.com/xendfinance/assetchain-react-native-starterkit/CONTRIBUTING.md) for contribution and pull request protocol. We expect contributors to follow our guide when submitting code or comments.

## License

[![License: GPL v3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, just say Hi on [Telegram](https://t.me/assetchainbuilders).<br/>
We're always glad to help.
