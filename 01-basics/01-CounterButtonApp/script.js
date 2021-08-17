import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const Root = {
  name: 'Root',

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count += 1;
    },
  },
};

const app = createApp(Root);
const vm = app.mount('#app');

window.vm = vm;
