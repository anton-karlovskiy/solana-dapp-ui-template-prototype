
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import SendOneLamportToRandomAddress from 'containers/SendOneLamportToRandomAddress';

const App = () => {
  return (
    <>
      <WalletMultiButton />
      <WalletDisconnectButton />
      <SendOneLamportToRandomAddress />
    </>
  );
};

export default App;
