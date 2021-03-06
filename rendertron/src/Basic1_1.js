import React, { Component } from 'react';

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Element.attachShadow()によって、シャドウ DOM ツリーを特定の要素に追加できるか？
var HogeElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(HogeElement, _HTMLElement);
  function HogeElement() {
    _classCallCheck(this, HogeElement);
    return _possibleConstructorReturn(this, _getPrototypeOf(HogeElement).call(this));
  }
  _createClass(HogeElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var shadow = this.attachShadow({
        mode: 'closed'
      });
      shadow.innerHTML = "\n      <style>\n        a{ font-size: 24px; }\n      </style>\n      <slot>\u30C7\u30D5\u30A9\u30EB\u30C8slot</slot>\n    ";
      var link = document.createElement('a');
      link.innerText = this.getAttribute('data-name');
      link.href = this.getAttribute('data-url');
      shadow.appendChild(link); // mode: 'open'のときに外部からシャドウルートにJavaScript経由でアクセスできるか？
      var hoge = document.querySelector("hoge-element");
      console.log(hoge.shadowRoot);
    }
  }]);
  return HogeElement;
}(_wrapNativeSuper(HTMLElement));
window.customElements.define('hoge-element', HogeElement);

class App extends Component {
  render() {
    return (
      <div>
        <div>
            <p>LightDOMの見栄え　<a href="#">リンク</a></p>
        </div>

        <div className="App">
          <div>
            <p>slotなし</p>
            <hoge-element data-name="カスタム要素のリンク slotなし" data-url="#hoge"></hoge-element>
          </div>

          <div>
              <p>slotあり</p>
              <hoge-element data-name="カスタム要素のリンク slotあり" data-url="#hoge"><span>slotに送る</span></hoge-element>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
