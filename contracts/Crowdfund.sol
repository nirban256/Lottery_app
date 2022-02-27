// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Crowdfund {
    address manager;
    uint256 funder;
    mapping(uint256 => address) donationList;

    constructor() {
        manager = msg.sender;
    }

    function receivingFunding() public payable {
        require(msg.sender != manager);
        require(address(msg.sender).balance >= 1 ether, "Not enough balance");
        require(address(this).balance <= 30 ether, "Target is reached");
        donationList[funder] = msg.sender;
    }
}
