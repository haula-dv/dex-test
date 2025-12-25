'use client';
import { useWalletConnector } from "@orderly.network/hooks";
import { SymbolInfoBarFullWidget } from "@orderly.network/markets"
import { useState } from "react";
export default function Home() {
  const { wallet, connecting, connectedChain } = useWalletConnector();
  const [showDebug, setShowDebug] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Orderly Network Integration</h1>
      <SymbolInfoBarFullWidget symbol="PERP_ETH_USDC" />
      <div className="space-y-2 text-sm text-gray-400 max-w-md text-center">
        <p>Connect your wallet using the button above.</p>
        <p>This demonstrates the Custom Wallet Provider integration wrapping Web3Modal and Wagmi.</p>
      </div>


      <div
        style={{
          padding: "40px",
          fontFamily: "Arial",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header với button Web3Modal */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h1>🧪 Test Wallet Connection</h1>
          <w3m-button />
        </div>

        {/* Status hiển thị lớn */}
        <div
          style={{
            padding: "30px",
            border: "2px solid #ccc",
            borderRadius: "12px",
            textAlign: "center",
            backgroundColor: wallet ? "#d4edda" : "#f8f9fa",
            marginBottom: "30px",
          }}
        >
          {wallet ? (
            <>
              <h2 style={{ margin: 0, color: "#155724" }}>✅ Wallet Connected</h2>
              <p
                style={{
                  fontSize: "18px",
                  margin: "15px 0 5px 0",
                  fontFamily: "monospace",
                  color: "#155724",
                }}
              >
                {wallet.accounts?.[0]?.address}
              </p>
              <p style={{ margin: "5px 0", color: "#666" }}>
                Chain ID: {wallet.chains?.[0]?.id}
              </p>
              <p style={{ margin: "5px 0", color: "#666" }}>
                Wallet: {wallet.label}
              </p>
            </>
          ) : (
            <>
              <h2 style={{ margin: 0, color: "#666" }}>No Wallet Connected</h2>
              <p style={{ marginTop: "15px", color: "#999" }}>
                👆 Click button ở góc phải trên để connect
              </p>
            </>
          )}
        </div>

        {/* Orderly Account Status */}
        {wallet && (
          <div
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginBottom: "20px",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Orderly Account Status</h2>
          </div>
        )}

        {/* Toggle Debug */}
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setShowDebug(!showDebug)}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {showDebug ? "Hide" : "Show"} Debug Info
          </button>
        </div>

        {/* Debug Info */}
        {showDebug && (
          <>
            <div
              style={{
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginBottom: "20px",
                backgroundColor: "#fff",
              }}
            >
              <h3>Connection Details</h3>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <strong>Connecting:</strong> {connecting ? "Yes" : "No"}
                </li>
                <li>
                  <strong>Wallet Connected:</strong> {wallet ? "Yes" : "No"}
                </li>
                {wallet && (
                  <>
                    <li>
                      <strong>Label:</strong> {wallet.label}
                    </li>
                    <li>
                      <strong>Address:</strong> {wallet.accounts?.[0]?.address}
                    </li>
                    <li>
                      <strong>Chain:</strong> {wallet.chains?.[0]?.id}
                    </li>
                  </>
                )}
                <li>
                  <strong>Connected Chain:</strong> {connectedChain?.id || "None"}
                </li>
              </ul>
            </div>

            <div
              style={{
                padding: "20px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              <h3>📝 Raw Data</h3>
            </div>
          </>
        )}

        {/* Instructions */}
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "2px dashed #007bff",
            borderRadius: "8px",
            backgroundColor: "#e7f3ff",
          }}
        >
          <h3 style={{ marginTop: 0 }}>📖 Instructions</h3>
          <ol style={{ textAlign: "left", lineHeight: "1.8" }}>
            <li>
              Click button <strong>w3m-button</strong> ở góc phải trên
            </li>
            <li>Chọn MetaMask hoặc wallet khác</li>
            <li>Approve connection trong wallet</li>
            <li>Thông tin wallet sẽ hiển thị bên dưới</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
