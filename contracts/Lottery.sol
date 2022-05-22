//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Lottery {
    address public manager;
    mapping(address => uint256) public playersToMoney;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    receive() external payable {
        require(msg.sender != manager, "You cannot play");
        require(
            msg.value > 0.02 ether,
            "Minimum value should be more than 0.1 ether"
        );
        playersToMoney[msg.sender] = msg.value;
        players.push(msg.sender);
    }

    function rand() public view returns (uint256) {
        require(msg.sender == manager, "You are not the manager");
        require(players.length >= 3, "Not enough players to play");
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.timestamp,
                        block.difficulty,
                        msg.sender
                    )
                )
            ) % players.length;
    }

    function pickWinner() public {
        require(msg.sender == manager, "You are not the manager");
        require(players.length >= 3, "Not enough players to play");
        uint256 randomNumber = rand();
        address payable winner = payable(players[randomNumber]);
        winner.transfer(getBalance());
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
