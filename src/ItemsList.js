import { Component } from "react";
import image from './done.png';

export class ItemsList extends Component {
    state = {
        userInput: '',
        list: [],
    }

    onChangeEvent(e) {
        this.setState({
            userInput: e
        })
    }

    addItems(input) {
        if (input === '') {
            alert("Please, enter an item");
        } else {
            let listItem = this.state.list;
        listItem.push(input);
        this.setState({
            list: listItem, userInput: ''
        })
        }
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    itemsDone(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    deleteItems() {
        let listItem = this.state.list;
        listItem = [];
        this.setState({
            list: listItem
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.onFormSubmit(event)}>
                    <div className="items-container">
                        <div className="input-field">
                            <input type='text'
                            placeholder="Type in a task"
                            value = {this.state.userInput}
                            onChange={(e) => {this.onChangeEvent(e.target.value)}} />
                            <button className="btn-style-add" onClick={() => this.addItems(this.state.userInput)}>Add</button>
                        </div>
                        <ul>
                            {this.state.list.map((item,index) => (
                                <li onClick={this.itemsDone} className="item-style" 
                                key={index}>
                                    <div className="checked-style">
                                        <img className="image-check" src={image} alt='Done task' width='30px'/>
                                        {item}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="btn-style-del" onClick={() => this.deleteItems()}>Delete all</button>
                    </div>
                    </form>
            </div>
        )
    }
}