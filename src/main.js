import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./styles/spacing-utils.scss"
import "./styles/main.scss"
import VueI18n from "vue-i18n";
import AppHeader from './components/AppHeader.vue';
import PowerPoints from './components/PowerPoints.vue';
import CountryStats from './components/CountryStats.vue';
import IconFist from './assets/icon-fist.svg';
import IconNext from './assets/icon-next.svg';
import FlexBox from './components/styled/FlexBox.js';
import VBox from './components/styled/VBox.js';
import StyledTable from './components/styled/StyledTable.js';
import CountryFlag from './components/styled/CountryFlag.js';
import VueCurrencyFilter from 'vue-currency-filter'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import PolicySlider from "./components/PolicySlider";

Vue.use(VueCurrencyFilter, {
    symbol: '$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
});
Vue.component('app-header', AppHeader);
Vue.component('power-points', PowerPoints);
Vue.component('icon-fist', IconFist);
Vue.component('icon-next', IconNext);
Vue.component('v-box', VBox);
Vue.component('flex-box', FlexBox);
Vue.component('country-flag', CountryFlag);
Vue.component('country-stats', CountryStats);
Vue.component('styled-table', StyledTable);
Vue.component('vue-slider', VueSlider);
Vue.component('policy-slider', PolicySlider);
Vue.config.productionTip = false;
Vue.use(VueI18n);
import { extendNumber } from "./extends";

extendNumber();
import { Game } from "./logic/game.js";

const i18n = new VueI18n({
    locale: 'pl',
    messages: {
        pl: {
            income: "Dochód",
            expenditure: "Wydatki",
            policies: {
                income_tax: "Podatek dochodowy",
                value_added_tax: "Podatek od towarów i usług"
            },
            stats: {
                population: "Populacja",
                urban_population: "Populacja miejska",
                unemployment: "Bezrobotni",
                unemployment_ratio: "Stopa bezrobocia",
                inflation: "Inflacja",
                consumption: "Konsumpcja",
                investment: "Inwestycje",
                life_expectancy: "Długość życia",
                births: "Urodzenia",
                deaths: "Zgony",
                education_ratio: "Wykształcenie",
                GDP: "PKB",
                GDP_per_capita: "PKB per capita",
            }
        },
        en: {
            income: "Income",
            expenditure: "Expenditure",
            policies: {
                income_tax: "Income tax",
                value_added_tax: "Value added Tax"
            },
            stats: {
                population: "Population",
                unemployment: "Unemployment",
                unemployment_ratio: "Unemployment rate",
                inflation: "Inflation",
                GDP: "GDP",
                GDP_per_capita: "GDP per capita",
            }
        }
    }
});

Vue.prototype.$game = new Game(store);
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
