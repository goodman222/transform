import Header from "./Header.vue";
import FeedBackBtn from "./FeedBackBtn.vue";
import HeaderBtn from "./HeaderBtn.vue";
import MainBlock from "./MainBlock.vue";
import InfoBlock from "./InfoBlock.vue";
import Advantages from "./Advantages.vue";
import AdvantageTile from "./AdvantageTile.vue";
import SectionHeader from "./SectionHeader.vue";
import FeedBackForm from "./FeedBackForm.vue";
import Input from "./Input.vue";

const components = [
  { name: "Header", component: Header },
  { name: "HeaderBtn", component: HeaderBtn },
  { name: "FeedBackBtn", component: FeedBackBtn },
  { name: "MainBlock", component: MainBlock },
  { name: "InfoBlock", component: InfoBlock },
  { name: "Advantages", component: Advantages },
  { name: "AdvantageTile", component: AdvantageTile },
  { name: "SectionHeader", component: SectionHeader },
  { name: "FeedBackForm", component: FeedBackForm },
  { name: "Input", component: Input },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
