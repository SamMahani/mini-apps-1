"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
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
    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.hic = _this.hic.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleButtonClick();
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(e) {
      var nextPageNum = 0;
      if (e !== undefined && e.target.id !== "4") {
        nextPageNum = Number(e.target.id) + 1;
      }
      this.setState({
        currPage: nextPageNum
      });
    }
  }, {
    key: "hic",
    value: function hic(e) {
      //handle input change
      console.log(e.target.id, e.target.value);
    }
  }, {
    key: "page0",
    value: function page0() {
      return React.createElement(
        "form",
        null,
        React.createElement("input", { type: "button", id: "0", value: "next page", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "page1",
    value: function page1() {
      return React.createElement(
        "form",
        { autocomplete: "on" },
        "Name:     ",
        React.createElement("input", { type: "text", id: "user_name", onChange: this.hic }),
        React.createElement("br", null),
        "Email:    ",
        React.createElement("input", { type: "email", id: "user_email", onChange: this.hic }),
        React.createElement("br", null),
        "Password: ",
        React.createElement("input", { type: "email", id: "user_pass", onChange: this.hic }),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", id: "1", value: "NEXT", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "page2",
    value: function page2() {
      return React.createElement(
        "form",
        { autocomplete: "on" },
        "Address 1:    ",
        React.createElement("input", { type: "text", id: "address_1", onChange: this.hic }),
        React.createElement("br", null),
        "Address 2:    ",
        React.createElement("input", { type: "text", id: "address_2", onChange: this.hic }),
        React.createElement("br", null),
        "City:         ",
        React.createElement("input", { type: "text", id: "address_city", onChange: this.hic }),
        React.createElement("br", null),
        "State:        ",
        React.createElement("input", { type: "text", id: "address_state", onChange: this.hic }),
        React.createElement("br", null),
        "Zip Code:     ",
        React.createElement("input", { type: "postal-code", id: "address_zip", onChange: this.hic }),
        React.createElement("br", null),
        "Phone Number: ",
        React.createElement("input", { type: "tel-national", id: "user_phone", onChange: this.hic }),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", id: "2", value: "NEXT", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "page3",
    value: function page3() {
      return React.createElement(
        "form",
        { autocomplete: "on" },
        "Credit Card:      ",
        React.createElement("input", { type: "cc-number", id: "billing_cc", onChange: this.hic }),
        React.createElement("br", null),
        "Expiration:       ",
        React.createElement("input", { type: "cc-exp", id: "billing_exp", onChange: this.hic }),
        React.createElement("br", null),
        "CVV:              ",
        React.createElement("input", { type: "number", id: "billing_cvv", onChange: this.hic }),
        React.createElement("br", null),
        "Billing Zip Code: ",
        React.createElement("input", { type: "postal-code", id: "billing_zip", onChange: this.hic }),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", id: "3", value: "NEXT", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "page4",
    value: function page4() {
      return React.createElement(
        "div",
        null,
        "CLICK TO CHECKOUT ",
        React.createElement("input", { type: "submit", id: "4", value: "CHECKOUT", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var page = this.state.currPage;
      if (page === 0) {
        return this.page0();
      } else if (page === 1) {
        return this.page1();
      } else if (page === 2) {
        return this.page2();
      } else if (page === 3) {
        return this.page3();
      } else if (page === 4) {
        return this.page4();
      }
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJjdXJyUGFnZSIsInVzZXJPYmplY3QiLCJ1c2VyX25hbWUiLCJ1c2VyX2VtYWlsIiwidXNlcl9wYXNzIiwiYWRkcmVzc18xIiwiYWRkcmVzc18yIiwiYWRkcmVzc19jaXR5IiwiYWRkcmVzc19zdGF0ZSIsImFkZHJlc3NfemlwIiwidXNlcl9waG9uZSIsImJpbGxpbmdfY2MiLCJiaWxsaW5nX2V4cCIsImJpbGxpbmdfY3Z2IiwiYmlsbGluZ196aXAiLCJoYW5kbGVCdXR0b25DbGljayIsImJpbmQiLCJoaWMiLCJlIiwibmV4dFBhZ2VOdW0iLCJ1bmRlZmluZWQiLCJ0YXJnZXQiLCJpZCIsIk51bWJlciIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwicGFnZSIsInBhZ2UwIiwicGFnZTEiLCJwYWdlMiIsInBhZ2UzIiwicGFnZTQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxDQURDO0FBRVhDLGtCQUFZO0FBQ1ZDLG1CQUFXLFVBREQ7QUFFVkMsb0JBQVksV0FGRjtBQUdWQyxtQkFBVyxVQUhEO0FBSVZDLG1CQUFXLFFBSkQ7QUFLVkMsbUJBQVcsUUFMRDtBQU1WQyxzQkFBYyxVQU5KO0FBT1ZDLHVCQUFlLFdBUEw7QUFRVkMscUJBQWEsS0FSSDtBQVNWQyxvQkFBWSxXQVRGO0FBVVZDLG9CQUFZLG1CQVZGO0FBV1ZDLHFCQUFhLE9BWEg7QUFZVkMscUJBQWEsR0FaSDtBQWFWQyxxQkFBYTtBQWJIO0FBRkQsS0FBYjtBQWtCQSxVQUFLQyxpQkFBTCxHQUF5QixN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ZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJQYWdlOiAwLFxuICAgICAgdXNlck9iamVjdDoge1xuICAgICAgICB1c2VyX25hbWU6IFwidGVzdE5hbWVcIixcbiAgICAgICAgdXNlcl9lbWFpbDogXCJ0ZXN0RW1haWxcIixcbiAgICAgICAgdXNlcl9wYXNzOiBcInRlc3RQYXNzXCIsXG4gICAgICAgIGFkZHJlc3NfMTogXCJ0ZXN0QTFcIixcbiAgICAgICAgYWRkcmVzc18yOiBcInRlc3RBMlwiLFxuICAgICAgICBhZGRyZXNzX2NpdHk6IFwidGVzdENpdHlcIixcbiAgICAgICAgYWRkcmVzc19zdGF0ZTogXCJ0ZXN0U3RhdGVcIixcbiAgICAgICAgYWRkcmVzc196aXA6IDQ5NDk0LFxuICAgICAgICB1c2VyX3Bob25lOiBcIjEyMzQ1Njc4OVwiLFxuICAgICAgICBiaWxsaW5nX2NjOiBcIjEyOTM4NzAxOTI4MzA5MTM4XCIsXG4gICAgICAgIGJpbGxpbmdfZXhwOiBcIjExLzIyXCIsXG4gICAgICAgIGJpbGxpbmdfY3Z2OiA1NDMsXG4gICAgICAgIGJpbGxpbmdfemlwOiA4NDg0OFxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVCdXR0b25DbGljayA9IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpYyA9IHRoaXMuaGljLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKCk7XG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljayhlKSB7XG4gICAgdmFyIG5leHRQYWdlTnVtID0gMDtcbiAgICBpZihlICE9PSB1bmRlZmluZWQgJiYgZS50YXJnZXQuaWQgIT09IFwiNFwiKSB7XG4gICAgICBuZXh0UGFnZU51bSA9IE51bWJlcihlLnRhcmdldC5pZCkgKyAxO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJQYWdlOiBuZXh0UGFnZU51bVxuICAgIH0pO1xuICB9XG5cblxuXG4gIGhpYyhlKSB7IC8vaGFuZGxlIGlucHV0IGNoYW5nZVxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkLCBlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBwYWdlMCgpIHsgcmV0dXJuKFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCIwXCIgdmFsdWU9XCJuZXh0IHBhZ2VcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfT48L2lucHV0PlxuICAgICAgPC9mb3JtPlxuICApfVxuXG4gIHBhZ2UxKCkgeyByZXR1cm4oXG4gICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvblwiPlxuICAgICAgICBOYW1lOiAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyX25hbWVcIiBvbkNoYW5nZT17dGhpcy5oaWN9PjwvaW5wdXQ+PGJyIC8+XG4gICAgICAgIEVtYWlsOiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyX2VtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGljfT48L2lucHV0PjxiciAvPlxuICAgICAgICBQYXNzd29yZDogPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlcl9wYXNzXCIgb25DaGFuZ2U9e3RoaXMuaGljfT48L2lucHV0PjxiciAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBpZD1cIjFcIiB2YWx1ZT1cIk5FWFRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfT48L2lucHV0PlxuICAgICAgPC9mb3JtPlxuICApfVxuXG4gIHBhZ2UyKCkgeyByZXR1cm4oXG4gICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvblwiPlxuICAgICAgICBBZGRyZXNzIDE6ICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc18xXCIgb25DaGFuZ2U9e3RoaXMuaGljfT48L2lucHV0PjxiciAvPlxuICAgICAgICBBZGRyZXNzIDI6ICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc18yXCIgb25DaGFuZ2U9e3RoaXMuaGljfT48L2lucHV0PjxiciAvPlxuICAgICAgICBDaXR5OiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc19jaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGljfT48L2lucHV0PjxiciAvPlxuICAgICAgICBTdGF0ZTogICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc19zdGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhpY30+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgWmlwIENvZGU6ICAgICA8aW5wdXQgdHlwZT1cInBvc3RhbC1jb2RlXCIgaWQ9XCJhZGRyZXNzX3ppcFwiIG9uQ2hhbmdlPXt0aGlzLmhpY30+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgUGhvbmUgTnVtYmVyOiA8aW5wdXQgdHlwZT1cInRlbC1uYXRpb25hbFwiIGlkPVwidXNlcl9waG9uZVwiIG9uQ2hhbmdlPXt0aGlzLmhpY30+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGlkPVwiMlwiIHZhbHVlPVwiTkVYVFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2t9PjwvaW5wdXQ+XG4gICAgICA8L2Zvcm0+XG4gICl9XG5cbiAgcGFnZTMoKSB7IHJldHVybihcbiAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9uXCI+XG4gICAgICAgIENyZWRpdCBDYXJkOiAgICAgIDxpbnB1dCB0eXBlPVwiY2MtbnVtYmVyXCIgaWQ9XCJiaWxsaW5nX2NjXCIgb25DaGFuZ2U9e3RoaXMuaGljfT48L2lucHV0PjxiciAvPlxuICAgICAgICBFeHBpcmF0aW9uOiAgICAgICA8aW5wdXQgdHlwZT1cImNjLWV4cFwiIGlkPVwiYmlsbGluZ19leHBcIiBvbkNoYW5nZT17dGhpcy5oaWN9PjwvaW5wdXQ+PGJyIC8+XG4gICAgICAgIENWVjogICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJiaWxsaW5nX2N2dlwiIG9uQ2hhbmdlPXt0aGlzLmhpY30+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgQmlsbGluZyBaaXAgQ29kZTogPGlucHV0IHR5cGU9XCJwb3N0YWwtY29kZVwiIGlkPVwiYmlsbGluZ196aXBcIiBvbkNoYW5nZT17dGhpcy5oaWN9PjwvaW5wdXQ+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaWQ9XCIzXCIgdmFsdWU9XCJORVhUXCIgb25DbGljaz17dGhpcy5oYW5kbGVCdXR0b25DbGlja30+PC9pbnB1dD5cbiAgICAgIDwvZm9ybT5cbiAgKX1cblxuICBwYWdlNCgpIHsgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgQ0xJQ0sgVE8gQ0hFQ0tPVVQgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBpZD1cIjRcIiB2YWx1ZT1cIkNIRUNLT1VUXCIgb25DbGljaz17dGhpcy5oYW5kbGVCdXR0b25DbGlja30+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuICApfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFnZSA9IHRoaXMuc3RhdGUuY3VyclBhZ2U7XG4gICAgaWYgKHBhZ2UgPT09IDApIHtyZXR1cm4gdGhpcy5wYWdlMCgpO31cbiAgICBlbHNlIGlmKHBhZ2UgPT09IDEpIHtyZXR1cm4gdGhpcy5wYWdlMSgpO31cbiAgICBlbHNlIGlmKHBhZ2UgPT09IDIpIHtyZXR1cm4gdGhpcy5wYWdlMigpO31cbiAgICBlbHNlIGlmKHBhZ2UgPT09IDMpIHtyZXR1cm4gdGhpcy5wYWdlMygpO31cbiAgICBlbHNlIGlmKHBhZ2UgPT09IDQpIHtyZXR1cm4gdGhpcy5wYWdlNCgpO31cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuIl19