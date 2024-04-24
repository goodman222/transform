<template>
  <div class="px-20">
    <SectionHeader>Контакты</SectionHeader>
    <div class="grid grid-cols-3 gap-5">
      <ContactsTile>
        <template v-slot:header>Телефон</template>
        <template v-slot:content>+7 (923) 111-35-15</template>
      </ContactsTile>

      <ContactsTile>
        <template v-slot:header>Социальные сети и мессенджеры</template>
        <template v-slot:content>
          <a href="https://vk.com" class="mr-5 underline">Вконтакте</a>
          <a href="https://web.telegram.org/k/" class="underline">Телеграм</a>
        </template>
      </ContactsTile>

      <ContactsTile>
        <template v-slot:header>Адрес</template>
        <template v-slot:content>г. Болотное, ...</template>
      </ContactsTile>
    </div>
  </div>
</template>
