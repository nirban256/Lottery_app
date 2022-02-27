// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Crowdfund {
    address manager;
    mapping(address => uint256) donationList;

    constructor() {
        manager = msg.sender;
    }

    function receivingFunding() public payable {
        require(msg.sender != manager);
        require(address(msg.sender).balance >= 1 ether, "Not enough balance");
        require(address(this).balance <= 30 ether, "Target is reached");
    }
}
