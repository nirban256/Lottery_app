// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Crowdfund {
    address public manager;
    uint256 public numOfFunders;
    uint256 public target;
    uint256 public deadline;
    uint256 public raisedAmount;
    uint256 public minimumContribution;
    bool public completed = false;
    mapping(address => uint256) public fundingList;

    constructor(
        uint256 _target,
        uint256 _deadline,
        uint256 _minimumContribution
    ) {
        manager = msg.sender;
        target = _target;
        deadline = block.timestamp + _deadline;
        minimumContribution = _minimumContribution;
    }

    function donate() public payable {
        require(block.timestamp < deadline, "Funding time limit exceeded");
        require(
            msg.value >= minimumContribution,
            "Transfer amount smaller than minimumContribution limit"
        );
        require(msg.sender != manager);
        if (fundingList[msg.sender] == 0) {
            numOfFunders++;
        }
        fundingList[msg.sender] += msg.value;
        raisedAmount += msg.value;
    }

    function contractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdrawBalance() public {
        require(
            block.timestamp > deadline && raisedAmount < target,
            "Not eligible for refund"
        );
        require(fundingList[msg.sender] > 0);
        address payable user = payable(msg.sender);
        user.transfer(fundingList[msg.sender]);
        fundingList[msg.sender] = 0;
    }

    function transferToOwner() public {
        require(msg.sender == manager, "You are not the receiver");
        require(
            block.timestamp > deadline && raisedAmount >= target,
            "Not eligible to receive funds"
        );
        require(completed == false);
        address payable receiver = payable(manager);
        receiver.transfer(raisedAmount);
        completed = true;
    }
}
