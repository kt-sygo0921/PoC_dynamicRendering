import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import i18n from "i18next";
import logo from './logo.svg';
import './App.css';

i18n.init({
  fallbackLng: 'ja',
  debug: true,
  resources: {
      en: {
          translation: {
              "key": "Hello World"
          }
      },
      ja: {
          translation: {
              "key": "こんにちは、世界"
          }
      }
  }
});

class FooElement extends HTMLElement {
  constructor() {
    super()
  }
  // コンポーネントの初期化が終わり、配置された後に発火するコールバック関数
  connectedCallback() {
    // ShadowDOMと併用可能
    var shadow = this.attachShadow({mode: 'open'});
 
    // ShadowDOMにHTMLをsetする
    shadow.innerHTML = `
      <style>
        a{ font-size: 24px; color: white }
      </style>
    `;
 
    // appendChildを使えばShadowDOMにHTMLを後から追加できる
    var link = document.createElement('a');
    link.innerText = this.getAttribute('data-name');
    link.href = this.getAttribute('data-url');
    shadow.appendChild(link);
  }
}
window.customElements.define('foo-element', FooElement);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoge: 'ああああ',
    }
  }
  componentDidMount() {
    axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res => {
      this.setState({
        hoge: res.headers.expires //適当な値です
      })
    })
  }
  render() {
    const {hoge} = this.state;
    console.log(hoge);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/About.js</code> and save to reload.
          </p>
          <Link
            className="App-link"
            to={"/"}
          >
            Appへ遷移
          </Link>
          <p>{i18n.t('key')}</p>
          <p>{hoge}</p>
          <foo-element class="hideDis" data-name="カスタム要素のリンク" data-url="#hoge"></foo-element>
        </header>
      </div>
    );
  }
}

export default App;
