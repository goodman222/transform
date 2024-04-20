<template>
  <div class="bg-beige100 p-8 relative min-h-64 overflow-hidden">
    <div class="text-grey text-xl text-left font-normal relative z-10">
      <slot name="tileText"></slot>
    </div>
    <div class="tileNumber text-beige200 absolute -bottom-4 -right-5 z-0">
      <slot name="tileNumber"></slot>
    </div>
  </div>
</template>

<style>
.tileNumber {
  font-size: 10rem;
  line-height: 10rem;
}
</style>
