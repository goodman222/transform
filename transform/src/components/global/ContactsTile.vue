<template>
  <div class="bg-beige100 h-60 p-8 flex flex-col justify-between">
    <p class="font-main font-normal text-grey text-base">
      <slot name="header"></slot>
    </p>
    <div class="font-main font-normal text-grey text-3xl uppercase">
      <slot name="content"></slot>
    </div>
  </div>
</template>
