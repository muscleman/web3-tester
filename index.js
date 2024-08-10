import { Web3 } from "web3"
import { MetaMaskSDK } from "@metamask/sdk"

class Swap
{
    constructor() {
        this.ethereum = null
        this.accounts = null
        this.chainId = 11155111
        this.token_address = "0x683d42B86FE5505c8548288CABe96D9aEBf576B2"
        this.tokenABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address", "name": "initialOwner", "type": "address" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ECDSAInvalidSignature", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "ECDSAInvalidSignatureLength", "type": "error" }, { "inputs": [{ "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "ECDSAInvalidSignatureS", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" }], "name": "ERC20InsufficientAllowance", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" }], "name": "ERC20InsufficientBalance", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "approver", "type": "address" }], "name": "ERC20InvalidApprover", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }], "name": "ERC20InvalidReceiver", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }], "name": "ERC20InvalidSender", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "ERC20InvalidSpender", "type": "error" }, { "inputs": [], "name": "InvalidShortString", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "inputs": [{ "internalType": "string", "name": "str", "type": "string" }], "name": "StringTooLong", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [], "name": "EIP712DomainChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "eip712Domain", "outputs": [{ "internalType": "bytes1", "name": "fields", "type": "bytes1" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "version", "type": "string" }, { "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "address", "name": "verifyingContract", "type": "address" }, { "internalType": "bytes32", "name": "salt", "type": "bytes32" }, { "internalType": "uint256[]", "name": "extensions", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "mintTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
        this.bridge_address = "0x35D9A937983306689b96A4bc2F63c81B6Fc8cbbe"
        this.bridgeABI = [{ "inputs": [{ "internalType": "address", "name": "initialOwner", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ECDSAInvalidSignature", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "ECDSAInvalidSignatureLength", "type": "error" }, { "inputs": [{ "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "ECDSAInvalidSignatureS", "type": "error" }, { "inputs": [], "name": "InvalidShortString", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "inputs": [{ "internalType": "string", "name": "str", "type": "string" }], "name": "StringTooLong", "type": "error" }, { "anonymous": false, "inputs": [], "name": "EIP712DomainChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "FeeChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "tokenWallet", "type": "bool" }], "name": "FeeWalletChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_address", "type": "address" }, { "indexed": false, "internalType": "string", "name": "_newSymbol", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "_decimals", "type": "uint256" }], "name": "WrappedCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": true, "internalType": "uint32", "name": "_blockNumber", "type": "uint32" }, { "indexed": false, "internalType": "bytes", "name": "_signature", "type": "bytes" }], "name": "XNative4Wrapped", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "_to", "type": "string" }], "name": "XWrapped4Native", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint32", "name": "blockNumber", "type": "uint32" }, { "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }, { "internalType": "bytes32", "name": "transactionHash", "type": "bytes32" }, { "internalType": "uint32", "name": "logIndex", "type": "uint32" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "acceptTransfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "eip712Domain", "outputs": [{ "internalType": "bytes1", "name": "fields", "type": "bytes1" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "version", "type": "string" }, { "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "address", "name": "verifyingContract", "type": "address" }, { "internalType": "bytes32", "name": "salt", "type": "bytes32" }, { "internalType": "uint256[]", "name": "extensions", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "to", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "exchangeTokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "exeq", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feePercentageDivider", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getFeePercentage", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPrefix", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "string", "name": "_symbolPrefix", "type": "string" }], "name": "init", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "processed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "setFeePercentage", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "tokenWallet", "type": "bool" }], "name": "setFeeWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbolPrefix", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenFactory", "outputs": [{ "internalType": "contract IBridgeTokenFactory", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "usingTokenWallet", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }]
        this.sdk = new MetaMaskSDK({
            shouldShimWeb3: false,
            storage: {
              enabled: true
            },
            dappMetadata: {
              name: "Equilibria Electron Wallet",
              url: "https://equilibriacc.com"
            }
          })
    }

    connectWallet = async () => {
        this.accounts = await this.sdk.connect()
        this.ethereum = this.sdk.getProvider()
    }

    buildSignature = async (web3, tokenWalletAddress, xeqWalletAddress) => {
      const nonce = await this.getNonce(web3, this.bridgeABI, this.bridge_address, tokenWalletAddress)
      const deadline = Date.now() + (1000 * 60 * 60) // 1 hour expiry
      const msgParams = JSON.stringify({
        domain: {
          name: "Bridge",
          version: "1",
          chainId: this.chainId,
          verifyingContract: this.bridge_address
        },
        message: {
          to: xeqWalletAddress,
          amount: web3.utils.toWei(1, "ether"),
          nonce: nonce.toString(),
          deadline: deadline.toString()
        },
        primaryType: "exchangeTokens",
        types: {
          EIP712Domain: [
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" }
          ],
          exchangeTokens: [
            { name: "to", type: "string" },
            { name: "amount", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" }
          ]
        }
      })

      const params = [tokenWalletAddress, msgParams]
      const method = "eth_signTypedData_v4"
      const signature = await this.ethereum.request({
        method,
        params,
        from: tokenWalletAddress
      })
      return { nonce, deadline, signature }
}

    getNonce = async (web3, ABI, address, tokenWalletAddress) => {
        const contract = new web3.eth.Contract(ABI, address)
        const nonce = await contract.methods.nonces(tokenWalletAddress).call()
        return nonce
    }

    terminate = () => {
        if (this.sdk) {
            this.sdk.terminate()
        }
        process.exit(0)
    }

    requestToExchangeTokens = async (tokenWalletAddress) => {
        try {
            const web3 = new Web3(this.ethereum)
            const tokenContract = new web3.eth.Contract(this.tokenABI, this.token_address)
            await tokenContract.methods.approve(this.bridge_address, web3.utils.toWei(1, "ether")).send({ from: tokenWalletAddress })
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>finished requestToExchangeTokens<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        } catch (error) {
            console.log("requestToExchangeTokens:", error.message)
        }
    }

    confirmExchangeTokens = async (tokenWalletAddress, xeqWalletAddress) => {
        try {
            const web3 = new Web3(this.ethereum)
            const { nonce, deadline, signature } = await this.buildSignature(web3, tokenWalletAddress, xeqWalletAddress)
            const bridgeContract = new web3.eth.Contract(this.bridgeABI, this.bridge_address)
            const data = await bridgeContract.methods.exchangeTokens(xeqWalletAddress, web3.utils.toWei(1, "ether"), nonce, deadline, signature).send({ from: tokenWalletAddress })
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>finished confirmExchangeTokens", data.transactionHash, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        } catch (error) {
            console.log("confirmExchangeTokens:", error.message)
        }
    }
}

const ethWallet = ""
const xeqWallet = "Tvzjpw4wojZMdg2CioX7dWbooBs1n3mYzTDKA7vV284eGJhxVHVyxGPbrX4trTa27L6N8EG2Q9j5hcdKDfVHK9bz1m7kUx7UC"
const swap = new Swap()
await swap.connectWallet()
await swap.requestToExchangeTokens(ethWallet)
await swap.confirmExchangeTokens(ethWallet, xeqWallet)
await swap.terminate()
