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
      currPage: 0
    };
    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
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
      if (e !== undefined) {
        nextPageNum = Number(e.target.id) + 1;
      }
      this.setState({
        currPage: nextPageNum
      });
    }
  }, {
    key: "hic",
    value: function hic() {
      //handle input change
      console.log('it works!');
    }
  }, {
    key: "page0",
    value: function page0() {
      return React.createElement(
        "form",
        { action: "", method: "post" },
        React.createElement("input", { type: "button", id: "0", value: "next page", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "page1",
    value: function page1() {
      return React.createElement(
        "form",
        { action: this.test.bind(this), method: "post" },
        "Name:     ",
        React.createElement("input", { type: "text", id: "name", name: "user_name" }),
        React.createElement("br", null),
        "Email:    ",
        React.createElement("input", { type: "email", id: "email", name: "user_email" }),
        React.createElement("br", null),
        "Password: ",
        React.createElement("input", { type: "email", id: "password", name: "user_pass" }),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", id: "1", value: "next page", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "page2",
    value: function page2() {
      return React.createElement(
        "form",
        { action: "", method: "post" },
        "Address 1:    ",
        React.createElement("input", { type: "text", id: "name", name: "address_1" }),
        React.createElement("br", null),
        "Address 2:    ",
        React.createElement("input", { type: "text", id: "email", name: "address_2" }),
        React.createElement("br", null),
        "City:         ",
        React.createElement("input", { type: "text", id: "email", name: "address_city" }),
        React.createElement("br", null),
        "State:        ",
        React.createElement("input", { type: "text", id: "email", name: "address_state" }),
        React.createElement("br", null),
        "Zip Code:     ",
        React.createElement("input", { type: "text", id: "email", name: "address_zip" }),
        React.createElement("br", null),
        "Phone Number: ",
        React.createElement("input", { type: "email", id: "email", name: "user_phone" }),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", id: "2", value: "next page", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "page3",
    value: function page3() {
      return React.createElement(
        "form",
        { action: "", method: "post" },
        "Name:     ",
        React.createElement("input", { type: "text", id: "name", name: "user_name" }),
        React.createElement("br", null),
        "Email:    ",
        React.createElement("input", { type: "email", id: "email", name: "user_email" }),
        React.createElement("br", null),
        "Password: ",
        React.createElement("input", { type: "email", id: "password", name: "user_pass" }),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", id: "3", value: "next page", onClick: this.handleButtonClick })
      );
    }
  }, {
    key: "page4",
    value: function page4() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          null,
          "HELLOOOO 4"
        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJjdXJyUGFnZSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiYmluZCIsImUiLCJuZXh0UGFnZU51bSIsInVuZGVmaW5lZCIsIk51bWJlciIsInRhcmdldCIsImlkIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwidGVzdCIsInBhZ2UiLCJwYWdlMCIsInBhZ2UxIiwicGFnZTIiLCJwYWdlMyIsInBhZ2U0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVU7QUFEQyxLQUFiO0FBR0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCO0FBTGlCO0FBTWxCOzs7O3dDQUVtQjtBQUNsQixXQUFLRCxpQkFBTDtBQUNEOzs7c0NBRWlCRSxDLEVBQUc7QUFDbkIsVUFBSUMsY0FBYyxDQUFsQjtBQUNBLFVBQUdELE1BQU1FLFNBQVQsRUFBb0I7QUFDbEJELHNCQUFjRSxPQUFPSCxFQUFFSSxNQUFGLENBQVNDLEVBQWhCLElBQXNCLENBQXBDO0FBQ0Q7QUFDRCxXQUFLQyxRQUFMLENBQWM7QUFDWlQsa0JBQVVJO0FBREUsT0FBZDtBQUdEOzs7MEJBSUs7QUFBRTtBQUNOTSxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNEOzs7NEJBRU87QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFNLFFBQU8sRUFBYixFQUFnQixRQUFPLE1BQXZCO0FBQ0UsdUNBQU8sTUFBSyxRQUFaLEVBQXFCLElBQUcsR0FBeEIsRUFBNEIsT0FBTSxXQUFsQyxFQUE4QyxTQUFTLEtBQUtWLGlCQUE1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ZUFBTyxLQUFLSSxLQUFMLEVBQVA7QUFBcUIsT0FBckMsTUFDQSxJQUFHSixTQUFTLENBQVosRUFBZTtBQUFDLGVBQU8sS0FBS0ssS0FBTCxFQUFQO0FBQXFCO0FBQzNDOzs7O0VBckZlQyxNQUFNQyxTOztBQXdGeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyUGFnZTogMCxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2sgPSB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKCk7XG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljayhlKSB7XG4gICAgdmFyIG5leHRQYWdlTnVtID0gMDtcbiAgICBpZihlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5leHRQYWdlTnVtID0gTnVtYmVyKGUudGFyZ2V0LmlkKSArIDE7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VyclBhZ2U6IG5leHRQYWdlTnVtXG4gICAgfSk7XG4gIH1cblxuXG5cbiAgaGljKCkgeyAvL2hhbmRsZSBpbnB1dCBjaGFuZ2VcbiAgICBjb25zb2xlLmxvZygnaXQgd29ya3MhJyk7XG4gIH1cblxuICBwYWdlMCgpIHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCIwXCIgdmFsdWU9XCJuZXh0IHBhZ2VcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfT48L2lucHV0PlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuICBwYWdlMSgpIHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9ybSBhY3Rpb249e3RoaXMudGVzdC5iaW5kKHRoaXMpfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIE5hbWU6ICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwidXNlcl9uYW1lXCI+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgRW1haWw6ICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cInVzZXJfZW1haWxcIj48L2lucHV0PjxiciAvPlxuICAgICAgICBQYXNzd29yZDogPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlcl9wYXNzXCI+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaWQ9XCIxXCIgdmFsdWU9XCJuZXh0IHBhZ2VcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfT48L2lucHV0PlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuICBwYWdlMigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIEFkZHJlc3MgMTogICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cImFkZHJlc3NfMVwiPjwvaW5wdXQ+PGJyIC8+XG4gICAgICAgIEFkZHJlc3MgMjogICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJhZGRyZXNzXzJcIj48L2lucHV0PjxiciAvPlxuICAgICAgICBDaXR5OiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiYWRkcmVzc19jaXR5XCI+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgU3RhdGU6ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgbmFtZT1cImFkZHJlc3Nfc3RhdGVcIj48L2lucHV0PjxiciAvPlxuICAgICAgICBaaXAgQ29kZTogICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiYWRkcmVzc196aXBcIj48L2lucHV0PjxiciAvPlxuICAgICAgICBQaG9uZSBOdW1iZXI6IDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cInVzZXJfcGhvbmVcIj48L2lucHV0PjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaWQ9XCIyXCIgdmFsdWU9XCJuZXh0IHBhZ2VcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfT48L2lucHV0PlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuICBwYWdlMygpIHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIE5hbWU6ICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwidXNlcl9uYW1lXCI+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgRW1haWw6ICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cInVzZXJfZW1haWxcIj48L2lucHV0PjxiciAvPlxuICAgICAgICBQYXNzd29yZDogPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlcl9wYXNzXCI+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaWQ9XCIzXCIgdmFsdWU9XCJuZXh0IHBhZ2VcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfT48L2lucHV0PlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuICBwYWdlNCgpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uPkhFTExPT09PIDQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYWdlID0gdGhpcy5zdGF0ZS5jdXJyUGFnZTtcbiAgICBpZiAocGFnZSA9PT0gMCkge3JldHVybiB0aGlzLnBhZ2UwKCk7fVxuICAgIGVsc2UgaWYocGFnZSA9PT0gMSkge3JldHVybiB0aGlzLnBhZ2UxKCk7fVxuICAgIGVsc2UgaWYocGFnZSA9PT0gMikge3JldHVybiB0aGlzLnBhZ2UyKCk7fVxuICAgIGVsc2UgaWYocGFnZSA9PT0gMykge3JldHVybiB0aGlzLnBhZ2UzKCk7fVxuICAgIGVsc2UgaWYocGFnZSA9PT0gNCkge3JldHVybiB0aGlzLnBhZ2U0KCk7fVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4iXX0=