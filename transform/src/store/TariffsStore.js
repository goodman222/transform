import { defineStore } from "pinia";

export const useTariffsStore = defineStore("TariffsStore", {
  state: () => ({
    tariffs: [
      // {
      //   name: "Базовая программа",
      //   contnet: [
      //     "Тренировки с командой 3 раза в неделю (12 тренировок за проект)",
      //     "Фото профессионального фотографа до и после проекта",
      //     "Коуч-сессия для постановки целей",
      //     "Ежедневный чат контроля и отчётности",
      //     "Чат поддержки, помощь наставника и общение с командой",
      //     "Замеры и оценка результата",
      //     "Подарки и получение призов за лучшие результаты",
      //   ],
      //   cost: 4000,
      //   bgColor: "#F6F3EF",
      // },
      // {
      //   name: "Расширенная программа",
      //   contnet: [
      //     "Тренировки с командой 3 раза в неделю (12 тренировок за проект)",
      //     "Фото профессионального фотографа до и после проекта",
      //     "Коуч-сессия для постановки целей",
      //     "Ежедневный чат контроля и отчётности",
      //     "Чат поддержки, помощь наставника и общение с командой",
      //     "Замеры и оценка результата",
      //     "Подарки и получение призов за лучшие результаты",
      //     "Ежедневный контроль питания с нутрициологом",
      //     "Работа с пищевым поведением под контролем специалиста",
      //     "Авторский журнал с рецептами в подарок",
      //     "Очные лекции с полезными знаниями про работу организма",
      //   ],
      //   cost: 5000,
      //   bgColor: "#EFE8DF",
      // },
      // {
      //   name: "Индивидуальное наставничество",
      //   contnet: [
      //     "Список обследований с последующим разбором и расшифровкой",
      //     "Расчёт БЖУ с рекомендациями по подбору продуктов",
      //     "Персональная программа питания под нужную цель",
      //     "Рекомендации по режиму дня и питьевому режиму",
      //     "Ежедневный контроль соблюдения рациона",
      //     "Поддержка и регулярные рекомендации",
      //   ],
      //   cost: 7000,
      //   bgColor: "#F6F3EF",
      // },
    ],
  }),

  actions: {
    async getTariffs() {
      const response = await fetch("./back/db/tariffs.json");
      const data = await response.json();
      this.tariffs = data;
    },
  },

  getters: {
    namesArray: (state) => state.tariffs.map((item) => item.name),
  },
});
