class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currPage: 0,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    this.handleButtonClick();
  }

  handleButtonClick(e) {
    var nextPageNum = 0;
    if(e !== undefined) {
      nextPageNum = Number(e.target.id) + 1;
    }
    this.setState({
      currPage: nextPageNum
    });
  }



  hic() { //handle input change
    console.log('it works!');
  }

  page0() {
    return(
      <form action="" method="post">
        <input type="button" id="0" value="next page" onClick={this.handleButtonClick}></input>
      </form>
    )
  }
  page1() {
    return(
      <form action={this.test.bind(this)} method="post">
        Name:     <input type="text" id="name" name="user_name"></input><br />
        Email:    <input type="email" id="email" name="user_email"></input><br />
        Password: <input type="email" id="password" name="user_pass"></input><br />
                  <input type="submit" id="1" value="next page" onClick={this.handleButtonClick}></input>
      </form>
    )
  }
  page2() {
    return(
      <form action="" method="post">
        Address 1:    <input type="text" id="name" name="address_1"></input><br />
        Address 2:    <input type="text" id="email" name="address_2"></input><br />
        City:         <input type="text" id="email" name="address_city"></input><br />
        State:        <input type="text" id="email" name="address_state"></input><br />
        Zip Code:     <input type="text" id="email" name="address_zip"></input><br />
        Phone Number: <input type="email" id="email" name="user_phone"></input><br />
                      <input type="submit" id="2" value="next page" onClick={this.handleButtonClick}></input>
      </form>
    )
  }
  page3() {
    return(
      <form action="" method="post">
        Name:     <input type="text" id="name" name="user_name"></input><br />
        Email:    <input type="email" id="email" name="user_email"></input><br />
        Password: <input type="email" id="password" name="user_pass"></input><br />
                  <input type="submit" id="3" value="next page" onClick={this.handleButtonClick}></input>
      </form>
    )
  }
  page4() {
    return(
      <div>
        <button>HELLOOOO 4</button>
      </div>
    )
  }


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

