//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;
import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';


contract Chemotron is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    string constant jobId = "437d298d210c4fff935dcedb97ea8011";
    uint256 private constant fee = ((1 * LINK_DIVISIBILITY) / 100) * 5;
    //uint256 public value;

    uint public field1;
    uint public field2;
    uint public field3;
    uint public field4;
    uint public field5;
    uint public field6;
    uint public field7;
    uint public field8;

    event requestMultipleFields(bytes32 indexed requestId, uint field1, uint field2, uint field3, uint field4, uint field5, uint field6, uint field7, uint field8);

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x188b71C9d27cDeE01B9b0dfF5C1aff62E8D6F434);
    }

    function requestMultipleParameters() public onlyOwner {
        Chainlink.Request memory req = buildChainlinkRequest(
            stringToBytes32(jobId),
            address(this),
            this.fulfillMultipleParameters.selector
        );
        req.add('get', 'https://api.thingspeak.com/channels/1803223/feeds.json?api_key=AFZSCM9F9U08BRTI&results=5');
        req.add('path', 'feeds[0],field1');
        req.add('get', 'https://api.thingspeak.com/channels/1803223/feeds.json?api_key=AFZSCM9F9U08BRTI&results=5');
        req.add('path', 'feeds[0],field2');
        req.add('get', 'https://api.thingspeak.com/channels/1803223/feeds.json?api_key=AFZSCM9F9U08BRTI&results=5');
        req.add('path', 'feeds[0],field3');
        req.add('get', 'https://api.thingspeak.com/channels/1803223/feeds.json?api_key=AFZSCM9F9U08BRTI&results=5');
        req.add('path', 'feeds[0],field4');
        req.add('get', 'https://api.thingspeak.com/channels/1803223/feeds.json?api_key=AFZSCM9F9U08BRTI&results=5');
        req.add('path', 'feeds[0],field5');
        req.add('get', 'https://api.thingspeak.com/channels/1803223/feeds.json?api_key=AFZSCM9F9U08BRTI&results=5');
        req.add('path', 'feeds[0],field6');
        req.add('get', 'https://api.thingspeak.com/channels/1803223/feeds.json?api_key=AFZSCM9F9U08BRTI&results=5');
        req.add('path', 'feeds[0],field7');
        req.add('get', 'https://api.thingspeak.com/channels/1803223/feeds.json?api_key=AFZSCM9F9U08BRTI&results=5');
        req.add('path', 'feeds[0],field8');
        sendOperatorRequest(req, fee);  
    }

    function fulfillMultipleParameters(
        bytes32 requestId,
        uint field1Response,
        uint field2Response,
        uint field3Response,
        uint field4Response,
        uint field5Response,
        uint field6Response,
        uint field7Response,
        uint field8Response
    ) public recordChainlinkFulfillment(requestId) {
        emit requestMultipleFields(requestId, field1Response, field2Response,field3Response,field4Response,field5Response,field6Response,field7Response, field8Response);
        field1 = field1Response;
        field2 = field2Response;
        field3 = field3Response;
        field4 = field4Response;
        field5 = field5Response;
        field6 = field6Response;
        field7 = field7Response;
        field8 = field8Response;
    }

    function stringToBytes32(string memory source)
        private
        pure
        returns (bytes32 result)
        {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            // solhint-disable-line no-inline-assembly
            result := mload(add(source, 32))
        }
    }
     
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }
}

