'use client';
import { useMarketsStream, useWalletConnector } from "@orderly.network/hooks";
import { SymbolInfoBarFullWidget } from "@orderly.network/markets"
import { useEffect, useState } from "react";
import { useAppKit } from "@reown/appkit/react";
import { useConnectWallet } from "@web3-onboard/react";

export default function Home() {
  // const { wallet, connecting, connectedChain } = useWalletConnector();
  // const [showDebug, setShowDebug] = useState(false);
  // // const { data } = useMarketsStream();
  // const { open } = useAppKit();

  // // console.log('data', data);

  // const handleConnectWallet = async () => {
  //   console.log("handleConnectWallet");
  //   await open();
  // };
  const [{ wallet: evmWallet, connecting }, connectWallet] = useConnectWallet();

  return (
    <div>
      <h1 className="text-3xl font-bold">Orderly Network Integration</h1>
      {/* <SymbolInfoBarFullWidget symbol="PERP_ETH_USDC" /> */}
      <div className="space-y-2 text-sm text-gray-400 max-w-md text-center">
        <p>Connect your wallet using the button above.</p>
        <p>This demonstrates the Custom Wallet Provider integration wrapping Web3Modal and Wagmi.</p>
      </div>
      {/* {wallet && wallet?.accounts?.length && wallet?.accounts?.length > 0 ? <p>Connected wallet: {wallet.accounts[0].address}</p> : null}
      <button onClick={handleConnectWallet}>Connect wallet</button> */}

      <button onClick={() => connectWallet()}>Connect Wallet</button>
      {evmWallet?.accounts?.length && evmWallet?.accounts?.length > 0 ? <p>Connected wallet: {evmWallet.accounts[0].address}</p> : null}
    </div>
  );
}
