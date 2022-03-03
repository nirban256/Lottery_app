// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Lottery {
    address public manager;
    address payable[] public participants;
    uint256 counter;

    constructor() {
        manager = msg.sender;
    }

    receive() external payable {
        require(msg.sender != manager, "You cannot play");
        require(msg.value >= 1 ether, "Not sufficient balance");
        participants.push(payable(msg.sender));
    }

    modifier onlyManager() {
        require(msg.sender == manager, "You are not the manager");
        _;
    }

    function random() public view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.difficulty,
                        block.timestamp,
                        participants.length
                    )
                )
            );
    }

    function playLottery() public view onlyManager returns (uint256) {
        require(participants.length >= 3, "Not enough players");
        uint256 r = random();
        return r % participants.length;
    }

    function payToWinner() public payable {
        uint256 index = playLottery();
        address player = participants[index];
        address payable winner = payable(player);
        winner.transfer(address(this).balance);
    }

    function getContractBalance() public view onlyManager returns (uint256) {
        return address(this).balance;
    }
}
