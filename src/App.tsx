
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import SendOneLamportToRandomAddress from 'containers/SendOneLamportToRandomAddress';
import AutoConnectSwitch from 'containers/AutoConnectSwitch';
import RequestAirdrop from 'containers/RequestAirdrop';
import SignMessage from 'containers/SignMessage';
import Example1 from 'containers/Example1';

const App = () => {
  return (
    <>
      <SignMessage />
      <AutoConnectSwitch />
      <RequestAirdrop />
      <WalletMultiButton />
      <WalletDisconnectButton />
      <SendOneLamportToRandomAddress />
      <Example1 />
    </>
  );
}

export default App;
