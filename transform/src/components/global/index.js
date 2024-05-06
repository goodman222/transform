import AppHeader from "./AppHeader.vue";
import FeedBackBtn from "./FeedBackBtn.vue";
import NavBtn from "./NavBtn.vue";
import MainBlock from "./MainBlock.vue";
import InfoBlock from "./InfoBlock.vue";
import AdvantagesBlock from "./AdvantagesBlock.vue";
import AdvantageTile from "./AdvantageTile.vue";
import SectionHeader from "./SectionHeader.vue";
import FeedBackForm from "./FeedBackForm.vue";
import AppInput from "./AppInput.vue";
import TariffsBlock from "./TariffsBlock.vue";
import TariffItem from "./TariffItem.vue";
import AppFooter from "./AppFooter.vue";
import FooterLink from "./FooterLink.vue";
import MainPage from "./MainPage.vue";
import AboutUsPage from "./AboutUsPage.vue";
import TariffsPage from "./TariffsPage.vue";
import ResultsPage from "./ResultsPage.vue";
import ContactsPage from "./ContactsPage.vue";
import CoachesBlock from "./CoachesBlock.vue";
import CoachesItem from "./CoachesItem.vue";
import ResultsBlock from "./ResultsBlock.vue";
import ResultsItem from "./ResultsItem.vue";
import ContactsBlock from "./ContactsBlock.vue";
import ContactsTile from "./ContactsTile.vue";
import PopUp from "./PopUp.vue";
import DropDown from "./DropDown.vue";
import AdminPage from "./AdminPage.vue";

const components = [
  { name: "AppHeader", component: AppHeader },
  { name: "NavBtn", component: NavBtn },
  { name: "FeedBackBtn", component: FeedBackBtn },
  { name: "MainBlock", component: MainBlock },
  { name: "InfoBlock", component: InfoBlock },
  { name: "AdvantagesBlock", component: AdvantagesBlock },
  { name: "AdvantageTile", component: AdvantageTile },
  { name: "SectionHeader", component: SectionHeader },
  { name: "FeedBackForm", component: FeedBackForm },
  { name: "AppInput", component: AppInput },
  { name: "TariffsBlock", component: TariffsBlock },
  { name: "TariffItem", component: TariffItem },
  { name: "AppFooter", component: AppFooter },
  { name: "FooterLink", component: FooterLink },
  { name: "MainPage", component: MainPage },
  { name: "AboutUsPage", component: AboutUsPage },
  { name: "TariffsPage", component: TariffsPage },
  { name: "ResultsPage", component: ResultsPage },
  { name: "ContactsPage", component: ContactsPage },
  { name: "CoachesBlock", component: CoachesBlock },
  { name: "CoachesItem", component: CoachesItem },
  { name: "ResultsItem", component: ResultsItem },
  { name: "ResultsBlock", component: ResultsBlock },
  { name: "ContactsBlock", component: ContactsBlock },
  { name: "ContactsTile", component: ContactsTile },
  { name: "PopUp", component: PopUp },
  { name: "DropDown", component: DropDown },
  { name: "AdminPage", component: AdminPage },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
