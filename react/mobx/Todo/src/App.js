import React from 'react';
import {trace, spy, observe, toJS, action, observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import "./App.css";

// spy(change => console.log(change))

class Todo {
  id = Math.random()
  @observable desc = ''
  @observable complete = false
  constructor(desc, complete) {
    this.desc = desc
    this.complete = complete
  }
  @action.bound toggle() {
    this.complete = !this.complete
  }
}

class Store {
  disposers = []
  @observable todos = []
  constructor(){
    // 初始化
    const todos =  localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    this.todos = todos.map(todo => new Todo(todo.desc, todo.complete))

    // 持久化
    this.observeTodos(this.todos)
    observe(this.todos, (change) => {
      this.observeTodos(change.object)
      this.persist()
    })
  }
  @action removeTodo(todo) {
    this.todos.remove(todo)
  }
  @action addTodo(desc) {
    const todo = new Todo(desc, false)
    this.todos.push(todo)
  }
  @computed get unCompleteNum() {
    return this.todos.filter(todo => !todo.complete).length
  }
  persist(){
    localStorage.setItem('todos', JSON.stringify(toJS(this.todos)))
  }
  observeTodos(todos){
    this.disposers.forEach(disposer => disposer())
    this.disposers = []
    for(let todo of todos){
      const disposer = observe(todo, () => {
        this.persist()
      })
      this.disposers.push(disposer)
    }
  }
}

const store = new Store()



@observer
class TodoItem extends React.Component {
  render() {trace()
    const { desc, complete, toggle } = this.props.todo;
    return (
      <div className={complete ? 'complete' : ''}>
        <input type="checkbox" checked={complete} onChange={toggle} />
        {desc}
        <button type="button" onClick={() => { store.removeTodo(this.props.todo) }}>x</button>
      </div>
    )
  }
}

@observer
class TodoList extends React.Component {
  state = {
    input: ''
  }
  onInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  addTodo = () => {
    store.addTodo(this.state.input)
    this.setState({
      input: ''
    })
  }
  render() {trace(true)
    return (
      <div>
        <div>
          <input type="text" value={this.state.input} onChange={this.onInput} />
          <button type="button" onClick={this.addTodo}>add</button>
        </div>
        <ol>
          {store.todos.map((todo) => {
            return <li key={todo.id}>{<TodoItem todo={todo} />}</li>
          })}
        </ol>
        <div>total {store.unCompleteNum} items not complete</div>
      </div>
    )
  }
}


export default TodoList;
