'use client';
import { useMarketsStream, useWalletConnector } from "@orderly.network/hooks";
import { SymbolInfoBarFullWidget } from "@orderly.network/markets"
import { useEffect, useState } from "react";
import { useAppKit } from "@reown/appkit/react";

export default function Home() {
  const { wallet, connecting, connectedChain } = useWalletConnector();
  const [showDebug, setShowDebug] = useState(false);
  const { data } = useMarketsStream();
  const { open } = useAppKit();


  console.log('data', data);

  const handleConnectWallet = async () => {
    console.log("handleConnectWallet");
    await open();
  };

  useEffect(() => {
    console.log("wallet", wallet);
    console.log("connecting", connecting);
    console.log("connectedChain", connectedChain);
  }, [wallet, connecting, connectedChain]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Orderly Network Integration11111111111111</h1>
      <SymbolInfoBarFullWidget symbol="PERP_ETH_USDC" />
      <div className="space-y-2 text-sm text-gray-400 max-w-md text-center">
        <p>Connect your wallet using the button above.</p>
        <p>This demonstrates the Custom Wallet Provider integration wrapping Web3Modal and Wagmi.</p>
      </div>
      {wallet && wallet?.accounts?.length && wallet?.accounts?.length > 0 ? <p>Connected wallet: {wallet.accounts[0].address}</p> : null}
      <button onClick={handleConnectWallet}>Connect wallet</button>
    </div>
  );
}
