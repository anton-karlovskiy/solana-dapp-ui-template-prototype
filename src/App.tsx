
import * as React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Connection,
  PublicKey
} from '@solana/web3.js';
import {
  Program,
  AnchorProvider,
  web3
} from '@project-serum/anchor';

import { LOCAL_NETWORK_CONNECTION_ENDPOINT } from 'config/network';
import EXAMPLE1_IDL from 'idls/example1.json';

const {
  SystemProgram,
  Keypair
} = web3;

/* Create an account  */
const baseAccount = Keypair.generate();
const opts = {
  preflightCommitment: 'processed'
};
const programID = new PublicKey(EXAMPLE1_IDL.metadata.address);

const App = () => {
  const [value, setValue] = React.useState(null);
  const wallet = useWallet();

  async function getProvider() {
    /* Create the provider and return it to the caller */
    /* Network set to local network for now */
    const network = LOCAL_NETWORK_CONNECTION_ENDPOINT;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const connection = new Connection(network, opts.preflightCommitment);

    const provider = new AnchorProvider(
      connection,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      wallet,
      opts.preflightCommitment
    );

    return provider;
  }

  async function createCounter() {    
    const provider = await getProvider();
    /* Create the program interface combining the idl, program ID, and provider */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const program = new Program(EXAMPLE1_IDL, programID, provider);
    try {
      /* Interact with the program via rpc */
      await program.rpc.create({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId
        },
        signers: [baseAccount]
      });

      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
      console.log('account: ', account);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setValue(account.count.toString());
    } catch (error) {
      console.log('Transaction error: ', error);
    }
  }

  async function increment() {
    const provider = await getProvider();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const program = new Program(EXAMPLE1_IDL, programID, provider);
    await program.rpc.increment({
      accounts: {
        baseAccount: baseAccount.publicKey
      }
    });

    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('account: ', account);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setValue(account.count.toString());
  }

  if (wallet.connected) {
    return (
      <>
        {value ? (
          <button onClick={increment}>
            Increment counter
          </button>
        ) : (
          <button onClick={createCounter}>
            Create counter
          </button>
        )}
        {value && value >= Number(0) ? (
          <h2>{value}</h2>
        ) : (
          <h3>Please create the counter.</h3>
        )}
      </>
    );
  } else {
    /* If the user's wallet is not connected, display connect wallet button */
    return (
      <WalletMultiButton />
    );
  }
};

export default App;
