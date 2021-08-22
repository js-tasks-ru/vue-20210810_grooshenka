import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const Root = {
  name: 'Root',

  data() {
    return {
      oprnd1: null,
      oprnd2: null,
      operator: '',
    };
  },

  computed: {
    calcResult: function (e) {
      var op1 = this.oprnd1;
      var op2 = this.oprnd2;

      switch (this.operator) {
        case 'sum':
          return op1 + op2;
        case 'subtract':
          return op1 - op2;
        case 'multiply':
          return op1 * op2;
        case 'divide':
          return op1 / op2;
        default:
          return null;
      }
    },
  },
};

const app = createApp(Root);
const vm = app.mount('#app');

window.vm = vm;
