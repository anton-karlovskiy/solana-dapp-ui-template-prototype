
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import SendOneLamportToRandomAddress from 'containers/SendOneLamportToRandomAddress';
import AutoConnectSwitch from 'containers/AutoConnectSwitch';
import RequestAirdrop from 'containers/RequestAirdrop';
import SignMessage from 'containers/SignMessage';

const App = () => {
  return (
    <>
      <SignMessage />
      <AutoConnectSwitch />
      <RequestAirdrop />
      <WalletMultiButton />
      <WalletDisconnectButton />
      <SendOneLamportToRandomAddress />
    </>
  );
};

export default App;
