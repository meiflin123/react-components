var App = () => (
  <div>
    <GroceryList items={['mango', 'apple', 'milk', 'bread']} />
 
  </div>
)


var GroceryList = (props) =>(
  <ul>
    {props.items.map( (groceryItemName, index) => <GroceryItem item={groceryItemName} key={index}/> ) }
  </ul>
)

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemhover(event){

    this.setState({
      done: !this.state.done
    });

  }

  // render() {
  //   var style = {
  //     textDecoration: this.state.done ? <b>{this.props.item}</b> : this.props.item
  //   }

  //   return (
  //     <li onClick={ this.onListItemhover.bind(this) }> {style.textDecoration} </li> )
  // }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    }

    return (
      <li style={style} onMouseEnter={ this.onListItemhover.bind(this) } onMouseLeave={ this.onListItemhover.bind(this) }> {this.props.item} </li> )
  }

};


ReactDOM.render(<App />, document.getElementById("app"));
