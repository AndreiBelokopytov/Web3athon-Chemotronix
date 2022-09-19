//SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
pragma solidity 0.8.16;

contract chemotronix is ERC20 {

    uint constant fixedFee = 1;
    uint constant duration = (1 * 30 days);
    address payable immutable admin;

    constructor() ERC20("CHEMOTRONIX", "CMX") {
        admin = payable(0xba375F12E4Ec33adC4f3b3873fCE2882DD787868);
        _mint(admin, 100000 * 10**18); 
    }

    enum subStatus {
        unregistered,
        active,
        expired
    }

    struct company {
        address companyAddress;
        uint registrationTime;
        string uniqueID;
        uint deposit;
        subStatus sub;
    }

    mapping(string => company) companyToID;
    address[] activeAddress;


    modifier onlyAdmin() {
        require (msg.sender == admin, "You do not have permission to call this function");
        _;
    }

    modifier onlyOnce(string memory uniqueID) {
        company storage myCompany = companyToID[uniqueID];
        require(myCompany.sub != subStatus.active);
        _;
    }

    event registered(string uniqueID, uint registrationTime, address companyAddress);
    event fundsWithdrawn(uint amount, address owner);
    

    function subscribe(uint deposit, string memory uniqueID) public payable onlyOnce(uniqueID) {
        require(deposit == fixedFee, "You do not have the correct subscription fee");
        companyToID[uniqueID] = company(
            msg.sender,
            block.timestamp,
            uniqueID,
            deposit,
            subStatus.active
        );
        company storage myCompany = companyToID[uniqueID];
        _transfer(admin, myCompany.companyAddress, 20*10**18);
        emit registered(uniqueID, myCompany.registrationTime, myCompany.companyAddress);
        emit Transfer(admin, myCompany.companyAddress, 20*10**18);
    }

    function checkMyStatus(string memory uniqueID) public view returns(subStatus){
        company storage myCompany = companyToID[uniqueID];
        return myCompany.sub;
    }

    function shareCredit(string memory uniqueID, string memory _uniqueID, uint256 amount) external returns(bool) {
        company storage senderCompany = companyToID[uniqueID];
        company storage receiverCompany = companyToID[_uniqueID];
        require(receiverCompany.sub == subStatus.active);
        require(senderCompany.sub == subStatus.active);
        _transfer(senderCompany.companyAddress, receiverCompany.companyAddress, amount);
        emit Transfer(msg.sender, receiverCompany.companyAddress, amount);
        return true;
    }

    function buyCredit(string memory uniqueID, uint amount) public returns(bool) {
        company storage myCompany = companyToID[uniqueID];
        require(myCompany.sub == subStatus.active);
        _transfer(admin, msg.sender,amount);
        emit Transfer(admin, msg.sender, amount);
        return true;
    }

    function offset(uint256 weight, string memory uniqueID) external returns(bool) {
        // 1 cmx = 1 metric tonne of carbon
        company storage myCompany = companyToID[uniqueID];
        require(myCompany.sub == subStatus.active);
        _transfer(msg.sender, admin, weight);
        emit Transfer(msg.sender, admin,weight);
        return true;
    }

    function withdrawEarnings(uint256 amount) external onlyAdmin {
        admin.transfer(amount);
        emit fundsWithdrawn(amount, admin);
    }

    function checkBalance() public view returns(uint) {
        return address(this).balance;
    }
}

