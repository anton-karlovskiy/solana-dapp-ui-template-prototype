
import * as React from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import {
  useConnection,
  useWallet
} from '@solana/wallet-adapter-react';
import {
  LAMPORTS_PER_SOL,
  TransactionSignature
} from '@solana/web3.js';

// TODO: not used for now
const RequestAirdrop = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const handleClick = React.useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    let signature: TransactionSignature = '';
    try {
      signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      // eslint-disable-next-line no-console
      console.log('[RequestAirdrop handleClick] Airdrop requested! - signature => ', signature);

      await connection.confirmTransaction(signature, 'processed');
      // eslint-disable-next-line no-console
      console.log('[RequestAirdrop handleClick] Airdrop successful! - signature => ', signature);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(`[RequestAirdrop handleClick] Airdrop failed! - ${error?.message} - signature => `, signature);
    }
  }, [
    publicKey,
    connection
  ]);

  return (
    <button
      onClick={handleClick}
      disabled={!publicKey}>
      Request Airdrop
    </button>
  );
};

export default RequestAirdrop;
