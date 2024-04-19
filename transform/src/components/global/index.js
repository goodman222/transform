import Header from "./Header.vue";
import FeedBackBtn from "./FeedBackBtn.vue";
import HeaderBtn from "./HeaderBtn.vue";

const components = [
  { name: "Header", component: Header },
  { name: "HeaderBtn", component: HeaderBtn },
  { name: "FeedBackBtn", component: FeedBackBtn },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
