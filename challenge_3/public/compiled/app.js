'use strict';

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
      currentRender: 0,
      f1Data: {},
      f2Data: {},
      f3Data: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchData();
      //use.hide();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      // console.log('first', this.state.currentRender);
      this.setState({ currentRender: ++currentRender });
      // console.log('second', this.state.currentRender);
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      //do something with get (axios?)
    }
  }, {
    key: 'form0',
    value: function form0() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handleClick.bind(this) },
          'START CHECKOUT'
        )
      );
    }
  }, {
    key: 'form1',
    value: function form1() {}
  }, {
    key: 'form2',
    value: function form2() {}
  }, {
    key: 'form3',
    value: function form3() {}
  }, {
    key: 'form4',
    value: function form4() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.state.currentRender === 0) {
        return this.form0();
      }
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50UmVuZGVyIiwiZjFEYXRhIiwiZjJEYXRhIiwiZjNEYXRhIiwiZmV0Y2hEYXRhIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJmb3JtMCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlLENBREo7QUFFWEMsY0FBUSxFQUZHO0FBR1hDLGNBQVEsRUFIRztBQUlYQyxjQUFRO0FBSkcsS0FBYjtBQUZpQjtBQVFsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsU0FBTDtBQUNBO0FBQ0Q7OztrQ0FFYTtBQUNaO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUNMLGVBQWUsRUFBRUEsYUFBbEIsRUFBZDtBQUNBO0FBQ0Q7OztnQ0FFVztBQUNWO0FBQ0Q7Ozs0QkFHTztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQVEsU0FBUyxLQUFLTSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFqQjtBQUFBO0FBQUE7QUFERixPQURGO0FBS0Q7Ozs0QkFDTyxDQUVQOzs7NEJBQ08sQ0FFUDs7OzRCQUNPLENBRVA7Ozs0QkFDTyxDQUVQOzs7NkJBU1E7QUFDUCxVQUFHLEtBQUtSLEtBQUwsQ0FBV0MsYUFBWCxLQUE2QixDQUFoQyxFQUFtQztBQUNqQyxlQUFPLEtBQUtRLEtBQUwsRUFBUDtBQUNEO0FBQ0Y7Ozs7RUExRGVDLE1BQU1DLFM7O0FBNkR4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRSZW5kZXI6IDAsXG4gICAgICBmMURhdGE6IHt9LFxuICAgICAgZjJEYXRhOiB7fSxcbiAgICAgIGYzRGF0YToge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIC8vdXNlLmhpZGUoKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaXJzdCcsIHRoaXMuc3RhdGUuY3VycmVudFJlbmRlcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFJlbmRlcjogKytjdXJyZW50UmVuZGVyfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlY29uZCcsIHRoaXMuc3RhdGUuY3VycmVudFJlbmRlcik7XG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgLy9kbyBzb21ldGhpbmcgd2l0aCBnZXQgKGF4aW9zPylcbiAgfVxuXG5cbiAgZm9ybTAoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9PlNUQVJUIENIRUNLT1VUPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgZm9ybTEoKSB7XG5cbiAgfVxuICBmb3JtMigpIHtcblxuICB9XG4gIGZvcm0zKCkge1xuXG4gIH1cbiAgZm9ybTQoKSB7XG5cbiAgfVxuXG5cblxuXG5cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudFJlbmRlciA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybTAoKTtcbiAgICB9XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbiJdfQ==