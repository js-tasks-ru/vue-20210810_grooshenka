import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const Root = {
  name: 'Root',

  data() {
    return {
      searchstring: '',
      item: {
        emailAddress: '',
        matchesFilter: false,
      },
      filteredArray: [],
    };
  },

  computed: {
    filterEmails: function (e) {
      if (this.searchstring.length > 0) {
        for (let index = 0; index < this.filteredArray.length; index++) {
          this.filteredArray[index].matchesFilter = this.filteredArray[index].emailAddress
            .toLowerCase()
            .includes(this.searchstring)
            ? true
            : false;
        }
      } else { //пустая строка запроса, обнулим маркеры
        for (let index = 0; index < this.filteredArray.length; index++) {
          this.filteredArray[index].matchesFilter = false;
        }
      }
      return this.filteredArray;
    },
  },

  beforeMount() {
    //наполним filteredArray имейлами
    for (let index = 0; index < emails.length; index++) {
      let emailObject = {
        emailAddress: emails[index],
        matchesFilter: false,
      };
      this.filteredArray.push(emailObject);
    }
  },
};

const app = createApp(Root);
const vm = app.mount('#app');

window.vm = vm;
