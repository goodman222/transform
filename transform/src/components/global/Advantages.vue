<template>
  <div class="px-12">
    <SectionHeader>Почему нас выбирают</SectionHeader>

    <div class="plate-container">
      <AdvantageTile class="plate-1">
        <template v-slot:tileText>
          Персональные рекомендации по питанию и ежедневный контроль от
          профессионального нутрициолога
        </template>
        <template v-slot:tileNumber>
          <p>01</p>
        </template>
      </AdvantageTile>

      <AdvantageTile class="plate-2">
        <template v-slot:tileText>
          Позитивная и мотивирующая обстановка в кругу единомышленников
        </template>
        <template v-slot:tileNumber>
          <p>02</p>
        </template>
      </AdvantageTile>

      <div class="plate-3">
        <img
          src="./../../assets/img/tile.png"
          class="object-cover w-full h-full"
          alt=""
        />
      </div>

      <AdvantageTile class="plate-4">
        <template v-slot:tileText>
          Успешное сочетание эффективных тренировок и сбалансированного рациона
          для достижения гарантированного результата
        </template>
        <template v-slot:tileNumber>
          <p>03</p>
        </template>
      </AdvantageTile>

      <AdvantageTile class="plate-5">
        <template v-slot:tileText>
          Минус 6-8 кг лишнего веса за 4 недели, а также Подарки от проекта за
          лучшие результаты
        </template>
        <template v-slot:tileNumber>
          <p>04</p>
        </template>
      </AdvantageTile>
    </div>
  </div>
</template>

<style>
.plate-container {
  display: grid;
  grid-template-areas:
    "A A B C"
    "D E E C";
  gap: 24px;
}

.plate-1 {
  grid-area: A;
}
.plate-2 {
  grid-area: B;
}
.plate-3 {
  grid-area: D;
}
.plate-4 {
  grid-area: E;
}
.plate-5 {
  grid-area: C;
}
</style>
