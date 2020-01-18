import React from 'react';
import {action, observable} from 'mobx';
import {observer} from 'mobx-react';

class Todo {
  @observable desc = ''
  @observable complete = false
  constructor(desc){
    this.desc = desc
  }
  @action toggle(){
    this.complete = !this.complete
  }
}

class Store {
  @observable todos = []
  @action removeTodo(todo){
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }
  @action addTodo(desc){
    const todo = new Todo(desc)
    this.todos.push(todo)
  }
}

const store = new Store()

class TodoItem extends React.Component {
  render(){
  const {desc, complete, toggle} = this.props.todo;
    return (
      <div className={complete ? 'complete': ''}>
        <input type="checkbox" checked={complete} onChange={toggle}/>
        {desc}
        <button type="button" onClick={() => {store.removeTodo(this.props.todo)}}>删除</button>
      </div>
    )
  }
}

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
  }
  render(){
    return (
      <div>
        <div>
        <input type="text" value={this.state.input} onChange={this.onInput}/>
        <button type="button" onClick={this.addTodo}>add</button>
        </div>
        <ol>
          {store.todos.map((todo) => {
          return <li key={todo.id}>{<TodoItem todo={todo}/>}</li>
          })}
        </ol>
      </div>
    )
  }
}


export default TodoList;
