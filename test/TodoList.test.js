const TodoList = artifacts.require("./TodoList.sol")

contract('TodoList', (acc) => {
    // acc - array of all accounts
    before(async() => {
        this.todoList = await TodoList.deployed()
    })

    // test
    it('deployed successfully', async () => {
        const address = await this.todoList.address
        assert.notEqual(address, 0x0)
    })

    // it('list tasks', async () => {
    //     const taskCount = await this.todoList.taskCount()
    //     const task = await this.todoList.tasks(taskCount)
    //     assert.equal(task.id.toNumber(), taskCount.toNumber())
    // })

    it('create task', async () => {
        const result = await this.todoList.createTask('A new task')
        const taskCount = await this.todoList.taskCount()
        assert.equal(taskCount, 3)
        const event = result.logs[0].args
        console.log(event)
    })

    it('toggle Tasks', async () => {
        const result = await this.todoList.toggleCompleted(1);
        const task = await this.todoList.tasks(1)
        assert.equal(task.completed, true);

        const event = result.logs[0].args;
        console.log(event);   

        assert.equal(event.completed, true)
        assert.equal(event.id.toNumber(), 1)     
    })

})