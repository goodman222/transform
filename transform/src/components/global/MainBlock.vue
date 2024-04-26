<template>
  <section
    class="background w-full flex flex-col justify-between items-center bg-[url('./assets/img/main.png')] bg-cover pb-20"
  >
    <div class="flex flex-col items-center">
      <h1
        class="font-main uppercase mb-14 mt-52 text-white text-5xl text-center font-medium max-w-2xl"
      >
        4 недели путшествия к улучшению своего тела
      </h1>
      <FeedBackBtn />
    </div>
    <div>
      <p
        class="font-main uppercase text-white text-base font-normal text-center max-w-xl"
      >
        Очные тренировки, еженедельные лекции, контроль рациона и журнал с
        вдохновляющими рецептами – все для вашего здоровья и красоты
      </p>
    </div>
  </section>
</template>

<style scoped>
.background {
  height: calc(100vh - 6rem);
}
</style>
