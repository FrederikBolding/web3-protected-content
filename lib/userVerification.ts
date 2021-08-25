import { getAddress } from "@ethersproject/address";
import { verifyMessage } from "@ethersproject/wallet";
import { Contract } from "@ethersproject/contracts";
import { UnlockABI } from "./unlockABI";

export const verifySignedMessage = ({ address, msg, sig }) => {
  try {
    const signer = verifyMessage(msg, sig);
    return signer === getAddress(address);
  } catch (err) {
    console.error(err);
    return false;
  }
};

// Assumes that the user address is already verified
export const verifyTokenOwnership = async ({ address, tokenAddress }) => {
  const contract = new Contract(tokenAddress, UnlockABI);
  const balance = await contract.balanceOf(address);
  return balance.gt(0);
};

export const verifyUserLogin = (user) => {
  const { address, sig, signedMessage } = user;
  return verifySignedMessage({
    address: address,
    msg: signedMessage,
    sig: sig,
  });
}

// High level function to verify a pair of a user and content token address
export const verifyUser = ({ user, tokenAddress }) => {
  const { address } = user;
  return verifyUserLogin(user) && verifyTokenOwnership({ address, tokenAddress });
};
