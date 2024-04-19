import Header from "./Header.vue";
import FeedBackBtn from "./FeedBackBtn.vue";
import HeaderBtn from "./HeaderBtn.vue";
import MainBlock from "./MainBlock.vue";
import InfoBlock from "./InfoBlock.vue";

const components = [
  { name: "Header", component: Header },
  { name: "HeaderBtn", component: HeaderBtn },
  { name: "FeedBackBtn", component: FeedBackBtn },
  { name: "MainBlock", component: MainBlock },
  { name: "InfoBlock", component: InfoBlock },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
