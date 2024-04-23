import Header from "./Header.vue";
import FeedBackBtn from "./FeedBackBtn.vue";
import NavBtn from "./NavBtn.vue";
import MainBlock from "./MainBlock.vue";
import InfoBlock from "./InfoBlock.vue";
import Advantages from "./Advantages.vue";
import AdvantageTile from "./AdvantageTile.vue";
import SectionHeader from "./SectionHeader.vue";
import FeedBackForm from "./FeedBackForm.vue";
import Input from "./Input.vue";
import Tariffs from "./Tariffs.vue";
import TariffItem from "./TariffItem.vue";
import Footer from "./Footer.vue";
import FooterLink from "./FooterLink.vue";
import MainPage from "./MainPage.vue";
import AboutUsPage from "./AboutUsPage.vue";
import TariffsPage from "./TariffsPage.vue";
import ResultsPage from "./ResultsPage.vue";
import ContactsPage from "./ContactsPage.vue";
import CoachesBlock from "./CoachesBlock.vue";
import CoachesItem from "./CoachesItem.vue";

const components = [
  { name: "Header", component: Header },
  { name: "NavBtn", component: NavBtn },
  { name: "FeedBackBtn", component: FeedBackBtn },
  { name: "MainBlock", component: MainBlock },
  { name: "InfoBlock", component: InfoBlock },
  { name: "Advantages", component: Advantages },
  { name: "AdvantageTile", component: AdvantageTile },
  { name: "SectionHeader", component: SectionHeader },
  { name: "FeedBackForm", component: FeedBackForm },
  { name: "Input", component: Input },
  { name: "Tariffs", component: Tariffs },
  { name: "TariffItem", component: TariffItem },
  { name: "Footer", component: Footer },
  { name: "FooterLink", component: FooterLink },
  { name: "MainPage", component: MainPage },
  { name: "AboutUsPage", component: AboutUsPage },
  { name: "TariffsPage", component: TariffsPage },
  { name: "ResultsPage", component: ResultsPage },
  { name: "ContactsPage", component: ContactsPage },
  { name: "CoachesBlock", component: CoachesBlock },
  { name: "CoachesItem", component: CoachesItem },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
