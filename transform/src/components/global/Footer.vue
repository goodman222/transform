<template>
  <div class="bg-beige100 px-20 pt-10 h-[400px] flex flex-col justify-between">
    <div class="flex flex-row justify-between">
      <div>
        <NavBtn>О нас</NavBtn>
        <NavBtn>Программы</NavBtn>
        <NavBtn>Результаты</NavBtn>
        <NavBtn>Контакты</NavBtn>
      </div>
      <div class="grid grid-cols-3 grid-rows-1 gap-16 justify-items-end">
        <FooterLink :link="'tel:+79231113515'">+79231113515</FooterLink>
        <FooterLink :link="'https://vk.com'">Вконтакте</FooterLink>
        <FooterLink :link="'https://web.telegram.org/'">Телеграм</FooterLink>
      </div>
    </div>

    <div><img src="./../../assets/img/Logo.png" alt="" /></div>
  </div>
</template>
