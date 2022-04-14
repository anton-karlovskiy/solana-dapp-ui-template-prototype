
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import SendOneLamportToRandomAddress from 'containers/SendOneLamportToRandomAddress';
import AutoConnectSwitch from 'containers/AutoConnectSwitch';

const App = () => {
  return (
    <>
      <AutoConnectSwitch />
      <WalletMultiButton />
      <WalletDisconnectButton />
      <SendOneLamportToRandomAddress />
    </>
  );
};

export default App;
