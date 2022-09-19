const hre = require("hardhat");
//const {ethers} = require("hardhat");
const main = async() => {
	const chemotronixContractFactory = await hre.ethers.getContractFactory("ChemotronixTest");
	const chemotronixContract = await chemotronixContractFactory.deploy();
	await chemotronixContract.deployed();
	console.log("Deployed awesomeness to ",chemotronixContract.address);

	const [deployer, receiver1, receiver2] = await hre.ethers.getSigner();
	//console.log(deployer, address1,address2);
	let fixedFee = hre.ethers.utils.parseEther("50");
	let crn = "st123";
	let registrationTime = ;
	



	const 
};

const runMain = async() => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();