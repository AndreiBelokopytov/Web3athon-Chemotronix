import {
  chain,
  WagmiConfig,
  createClient,
  configureChains,
} from 'wagmi'
import{ alchemyProvider } from 'wagmi/providers/alchemy'
import DefaultLayout from '../layouts/DefaultLayout';
import "../styles/globals.css";
import { getDefaultWallets, RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';

const { chains, provider} = configureChains(
  [chain.mainnet, chain.polygon],  
  [alchemyProvider({alchemyId: process.env.ALCHEMY_ID})]
)

const { connectors } = getDefaultWallets({
  appName: "chemotronix",
  chains,
}); 


const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
      chains={chains}
      theme={lightTheme({
        accentColor: '#008036',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      })}
      >
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp
