import React, {Component} from "react";


class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }


 
  editText = () => {
    this.setState ({
      edit: true
    });
  }
  saveText = () => {
    this.props.update(this.refs.newTxt.value, this.props.index);
    this.setState ({
      edit: false
    });
  }
  removeText = () => {
    this.props.deleteBlock(this.props.index);
  }
  renEdit() {
    return (
          <div className="box">
            <textarea  ref="newTxt" defaultValue={this.props.children}></textarea>
            <button onClick={this.saveText} className="btn success">Сохранить</button>
          </div>
    );
  }
  renNorm() {
    return (
          <div className="box">
            <div>{this.props.children}</div>
            <button onClick={this.editText} className="btn light mr-4">Редактировать</button>
            <button onClick={this.removeText} className="btn red">Удалить</button>
          </div>
    );
  }
  render() {
    if (this.state.edit) {
      return this.renEdit();
    } else {
      return this.renNorm();
    }
  }
}
export default One;