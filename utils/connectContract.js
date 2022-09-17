import abiJSON from "./chemotronix.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x4C79F18C96D93C13d9b944Ed13045EAb618C10eF";
    const contractABI = abiJSON.abi;
    let chemotronixContract;

    try {
        const { ethereum } = window;
  
        if (ethereum.chainId === "0x13881") {
          //checking for eth object in the window, see if they have wallet connected to Mumbai network
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          console.log("contractABI", contractABI);
          chemotronixContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); // instantiating new connection to the contract
        } else {
          throw new Error('Please connect to the Polygon Mumbai network.')
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return chemotronixContract;

}

export default connectContract;