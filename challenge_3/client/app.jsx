class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currPage: 0,
      userObject: {
        user_name: "testName",
        user_email: "testEmail",
        user_pass: "testPass",
        address_1: "testA1",
        address_2: "testA2",
        address_city: "testCity",
        address_state: "testState",
        address_zip: 49494,
        user_phone: "123456789",
        billing_cc: "12938701928309138",
        billing_exp: "11/22",
        billing_cvv: 543,
        billing_zip: 84848
      }
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.hic = this.hic.bind(this);
  }

  componentDidMount() {
    this.handleButtonClick();
  }

  handleButtonClick(e) {
    var nextPageNum = 0;
    if(e !== undefined && e.target.id !== "4") {
      nextPageNum = Number(e.target.id) + 1;
    }
    this.setState({
      currPage: nextPageNum
    });
  }



  hic(e) { //handle input change
    console.log(e.target.id, e.target.value);
    this.setState({
      userObject[e.target.id]: e.target.value
    });
    console.log('new val at key', serObject[e.target.id]);
  }

  page0() { return(
      <form>
        <input type="button" id="0" value="next page" onClick={this.handleButtonClick}></input>
      </form>
  )}

  page1() { return(
      <form>
        {this.state.userObject}
        Name:     <input type="text" id="user_name" onChange={this.hic}></input><br />
        Email:    <input type="email" id="user_email" onChange={this.hic}></input><br />
        Password: <input type="email" id="user_pass" onChange={this.hic}></input><br />
                  <input type="submit" id="1" value="NEXT" onClick={this.handleButtonClick}></input>
      </form>
  )}

  page2() { return(
      <form>
        {this.state.userObject}
        Address 1:    <input type="text" id="address_1" onChange={this.hic}></input><br />
        Address 2:    <input type="text" id="address_2" onChange={this.hic}></input><br />
        City:         <input type="text" id="address_city" onChange={this.hic}></input><br />
        State:        <input type="text" id="address_state" onChange={this.hic}></input><br />
        Zip Code:     <input type="postal-code" id="address_zip" onChange={this.hic}></input><br />
        Phone Number: <input type="tel-national" id="user_phone" onChange={this.hic}></input><br />
                      <input type="submit" id="2" value="NEXT" onClick={this.handleButtonClick}></input>
      </form>
  )}

  page3() { return(
      <form>
        {this.state.userObject}
        Credit Card:      <input type="cc-number" id="billing_cc" onChange={this.hic}></input><br />
        Expiration:       <input type="cc-exp" id="billing_exp" onChange={this.hic}></input><br />
        CVV:              <input type="number" id="billing_cvv" onChange={this.hic}></input><br />
        Billing Zip Code: <input type="postal-code" id="billing_zip" onChange={this.hic}></input><br />
                          <input type="submit" id="3" value="NEXT" onClick={this.handleButtonClick}></input>
      </form>
  )}

  page4() { return(
      <div>
        CLICK TO CHECKOUT <input type="submit" id="4" value="CHECKOUT" onClick={this.handleButtonClick}></input>
      </div>
  )}

  render() {
    var page = this.state.currPage;
    if (page === 0) {return this.page0();}
    else if(page === 1) {return this.page1();}
    else if(page === 2) {return this.page2();}
    else if(page === 3) {return this.page3();}
    else if(page === 4) {return this.page4();}
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

