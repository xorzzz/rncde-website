<script setup>
import SectionRC from '@/components/Utils/SectionRC.vue'
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import ButtonOutline from '@/components/Buttons/ButtonOutline.vue'
import ButtonColor from '@/components/Buttons/ButtonColor.vue'
</script>

<template>
  <div class="contact-main">
    <SectionRC class="content">
      <form class="form-container">
        <div class="title">CONTACTANOS</div>
        <div class="name-container">
          <input type="text" placeholder="Nombre" name="name" required />
          <input type="text" placeholder="Apellido" name="lastname" required />
        </div>
        <input type="email" placeholder="Correo" name="email" required />
        <textarea placeholder="Your message" name="message" required> </textarea>
        <div class="button-container">
          <ButtonSolid primaryColor="sky" type="submit"> Enviar </ButtonSolid>
          <ButtonOutline primaryColor="sky" textColor="blue" type="reset"> Borrar </ButtonOutline>
        </div>
      </form>
      <div class="info-container">
        <div class="title-container">
          <div class="icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 99 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1355_2)">
                <path
                  d="M28.7231 6.74755C20.0606 10.5106 12.31 14.0142 11.6587 14.663C10.0955 16.0255 10.0955 18.8803 11.5935 20.697C12.1797 21.4106 17.3902 25.2386 23.0567 29.1315C32.5659 35.6196 33.5429 36.1386 34.7804 35.36C38.037 33.219 47.1554 29.8452 49.5652 29.8452C52.2356 29.8452 62.6567 33.738 64.5455 35.4249C65.3922 36.2035 66.6948 35.4898 74.6409 29.8452C84.3455 22.9029 87.9277 19.594 87.9277 17.5827C87.9277 15.0523 84.2804 12.6517 73.5337 8.17493C53.1475 -0.389357 54.3198 -6.93131e-05 49.2396 -6.93131e-05C44.8106 -6.93131e-05 43.9639 0.324333 28.7231 6.74755Z"
                  fill="#979797"
                />
                <path
                  d="M93.2036 25.4333C92.3569 25.6928 88.1233 28.5476 83.7595 31.6619C79.4608 34.841 74.1852 38.6041 72.0358 40.0964L68.2582 42.7565L68.3233 51.775C68.3885 56.7059 68.1279 61.5071 67.8023 62.4803C67.151 64.1023 62.4615 67.9303 56.2089 71.8881L53.4733 73.6398L53.4082 90.3142V107.054L55.0365 108.092C56.3391 108.935 57.0556 109.065 58.2931 108.481C62.0056 106.794 92.8128 83.8262 94.5714 81.4904C98.0885 76.6244 98.349 74.5482 98.349 50.5422C98.349 35.6845 98.0885 28.0934 97.6325 26.9904C96.7858 25.1738 95.3529 24.6547 93.2036 25.4333Z"
                  fill="#979797"
                />
                <path
                  d="M5.74574 23.7154C6.61086 23.9808 10.9364 26.8998 15.3951 30.0843C19.7873 33.335 25.1776 37.1829 27.3737 38.7088L31.2334 41.4288L31.1669 50.6504C31.1003 55.6924 31.3665 60.6017 31.6993 61.5969C32.3647 63.2554 37.1561 67.1696 43.5447 71.2165L46.3397 73.0078L46.4062 90.0577V107.174L44.7426 108.236C43.4116 109.098 42.6796 109.231 41.4152 108.634C37.622 106.909 6.14502 83.4235 4.34824 81.0352C0.754677 76.0595 0.488487 73.9366 0.488487 49.3899C0.488487 34.1975 0.754677 26.4354 1.22051 25.3076C2.08563 23.45 3.54967 22.9193 5.74574 23.7154Z"
                  fill="#979797"
                />
                <path
                  d="M36.1479 52.3589C36.1479 56.0571 36.4085 59.366 36.669 59.7553C37.2552 60.6636 45.3966 66.5029 46.0479 66.5029C46.3085 66.5029 46.569 63.4535 46.569 59.6904V52.9428L41.6841 49.3095C39.0137 47.363 36.669 45.741 36.4736 45.741C36.2782 45.741 36.1479 48.7255 36.1479 52.3589Z"
                  fill="#979797"
                />
                <path
                  d="M63.9917 52.0791C63.9917 55.8929 63.723 59.3052 63.4544 59.7067C62.8499 60.6434 54.454 66.6652 53.7823 66.6652C53.5137 66.6652 53.245 63.5205 53.245 59.6398V52.6813L58.2825 48.9344C61.0364 46.9272 63.4544 45.2544 63.6559 45.2544C63.8574 45.2544 63.9917 48.3322 63.9917 52.0791Z"
                  fill="#979797"
                />
                <path
                  d="M49.3299 47.5056L41.3079 42.5487C39.9436 41.7057 40.0766 39.6804 41.5394 39.023L49.5681 35.415C50.1034 35.1744 50.7173 35.1811 51.2473 35.4332L58.8224 39.0377C60.2318 39.7083 60.3641 41.6628 59.0581 42.5173L51.4762 47.4778C50.8268 47.9027 49.9902 47.9135 49.3299 47.5056Z"
                  fill="#979797"
                />
              </g>
              <defs>
                <clipPath id="clip0_1355_2">
                  <rect width="99" height="109" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="text">INFORMACIÓN DE CONTÁCTO</div>
        </div>
        <div class="cnt">
          <div class="info-text">
            <div class="item">
              <i class="fi fi-rr-envelope icon"></i>
              <div class="text">contacto@runcode.co</div>
            </div>
            <div class="item">
              <i class="fi fi-rr-phone-flip icon"></i>
              <div class="text">+57 312 312 3333</div>
            </div>
            <div class="item">
              <i class="fi fi-rr-land-layer-location icon"></i>
              <div class="text">Bogotá D.C</div>
            </div>
          </div>
          <div class="whatsapp-content">
            <div class="text">¿Prefieres enviarnos un mensaje por whatsapp?</div>
            <div class="button-container">
              <div class="button-container">
                <ButtonColor primary-color="#25d366">
                  <div class="icon">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8125 4.13751C20.6663 2.98014 19.3013 2.06246 17.7969 1.43796C16.2925 0.813455 14.6789 0.49461 13.05 0.500006C6.225 0.500006 0.6625 6.06251 0.6625 12.8875C0.6625 15.075 1.2375 17.2 2.3125 19.075L0.5625 25.5L7.125 23.775C8.9375 24.7625 10.975 25.2875 13.05 25.2875C19.875 25.2875 25.4375 19.725 25.4375 12.9C25.4375 9.58751 24.15 6.47501 21.8125 4.13751ZM13.05 23.1875C11.2 23.1875 9.3875 22.6875 7.8 21.75L7.425 21.525L3.525 22.55L4.5625 18.75L4.3125 18.3625C3.28443 16.7213 2.73866 14.8241 2.7375 12.8875C2.7375 7.21251 7.3625 2.58751 13.0375 2.58751C15.7875 2.58751 18.375 3.66251 20.3125 5.61251C21.272 6.56734 22.0324 7.70318 22.5495 8.95417C23.0667 10.2051 23.3302 11.5464 23.325 12.9C23.35 18.575 18.725 23.1875 13.05 23.1875ZM18.7 15.4875C18.3875 15.3375 16.8625 14.5875 16.5875 14.475C16.3 14.375 16.1 14.325 15.8875 14.625C15.675 14.9375 15.0875 15.6375 14.9125 15.8375C14.7375 16.05 14.55 16.075 14.2375 15.9125C13.925 15.7625 12.925 15.425 11.75 14.375C10.825 13.55 10.2125 12.5375 10.025 12.225C9.85 11.9125 10 11.75 10.1625 11.5875C10.3 11.45 10.475 11.225 10.625 11.05C10.775 10.875 10.8375 10.7375 10.9375 10.5375C11.0375 10.325 10.9875 10.15 10.9125 10C10.8375 9.85001 10.2125 8.32501 9.9625 7.70001C9.7125 7.10001 9.45 7.17501 9.2625 7.16251H8.6625C8.45 7.16251 8.125 7.23751 7.8375 7.55001C7.5625 7.86251 6.7625 8.61251 6.7625 10.1375C6.7625 11.6625 7.875 13.1375 8.025 13.3375C8.175 13.55 10.2125 16.675 13.3125 18.0125C14.05 18.3375 14.625 18.525 15.075 18.6625C15.8125 18.9 16.4875 18.8625 17.025 18.7875C17.625 18.7 18.8625 18.0375 19.1125 17.3125C19.375 16.5875 19.375 15.975 19.2875 15.8375C19.2 15.7 19.0125 15.6375 18.7 15.4875Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="text">Whatsapp</div>
                </ButtonColor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionRC>
    <div class="background">
      <div class="section-container f-blue-container">
        <div class="row-container c-blue-container">
          <div class="img-container">
            <img src="@/assets/images/contact/contact-image.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="white-container"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/sections/contact-section.scss';
@import '@/assets/styles/variables.scss';
</style>
