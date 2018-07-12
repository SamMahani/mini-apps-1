class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentRender: 0,
      f1Data: {},
      f2Data: {},
      f3Data: {}
    }
  }

  componentDidMount() {
    this.fetchData();
    //use.hide();
  }

  handleClick() {
    // console.log('first', this.state.currentRender);
    this.setState({currentRender: ++currentRender});
    // console.log('second', this.state.currentRender);
  }

  fetchData() {
    //do something with get (axios?)
  }


  form0() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>START CHECKOUT</button>
      </div>
    )
  }
  form1() {

  }
  form2() {

  }
  form3() {

  }
  form4() {

  }








  render() {
    if(this.state.currentRender === 0) {
      return this.form0();
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

