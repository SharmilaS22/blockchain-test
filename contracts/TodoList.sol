// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22;

contract TodoList {

    // state variable - written to blockchain
    uint public taskCount = 0;
    
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    constructor() public {
        createTask("Learn blockchain");
    }

    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

}