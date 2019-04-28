import React, {Component} from "react";
import One from './one'


class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:  []
     }
    }
    deleteBlock = (i) => {
        var arr = this.state.tasks;
        arr.splice(i, 1);
        this.setState({tasks: arr});
    }
    updateText = (text, i) => {
        var arr = this.state.tasks;
        arr[i] = text;
        this.setState({tasks: arr});
    }
    addText = (text) => {
        var arr = this.state.tasks;
        arr.push(text);
        this.setState({tasks: arr});
    }
    render() {
        return(
            <div className="field">
            <button onClick={this.addText.bind(null, 'Заметка')} className="btn new">Создать</button>
                {
                    this.state.tasks.map((item, i) => {
                        return(
                            <One key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>{item}</One>
                        )
                    })
                }
            </div>
        )
    }

}

export default Two;