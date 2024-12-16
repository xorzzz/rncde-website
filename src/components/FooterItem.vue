<script setup>
import { ref, watch } from 'vue'
import '@/assets/styles/variables.scss'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'white'
  }
})

const colors = ref({
  background: '',
  title: '',
  text: ''
})

// Función para establecer los colores basados en backgroundColor
function setColors() {
  if (props.backgroundColor === 'blue') {
    colors.value.background = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-blue')
      .trim()
    colors.value.title = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-white-1')
      .trim()
    colors.value.text = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-white-2')
      .trim()
  } else {
    colors.value.background = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-white')
      .trim()
    colors.value.title = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-gray')
      .trim()
    colors.value.text = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-gray-2')
      .trim()
  }
}

watch(() => props.backgroundColor, setColors, { immediate: true })
</script>

<template>
  <footer class="footer-class" :style="{ backgroundColor: colors.background }">
    <div class="main-container">
      <div class="brand-section">
        <div class="logo-container">
          <RouterLink to="/">
            <svg
              width="99"
              height="109"
              viewBox="0 0 99 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1355_2)">
                <path
                  d="M28.7231 6.74755C20.0606 10.5106 12.31 14.0142 11.6587 14.663C10.0955 16.0255 10.0955 18.8803 11.5935 20.697C12.1797 21.4106 17.3902 25.2386 23.0567 29.1315C32.5659 35.6196 33.5429 36.1386 34.7804 35.36C38.037 33.219 47.1554 29.8452 49.5652 29.8452C52.2356 29.8452 62.6567 33.738 64.5455 35.4249C65.3922 36.2035 66.6948 35.4898 74.6409 29.8452C84.3455 22.9029 87.9277 19.594 87.9277 17.5827C87.9277 15.0523 84.2804 12.6517 73.5337 8.17493C53.1475 -0.389357 54.3198 -6.93131e-05 49.2396 -6.93131e-05C44.8106 -6.93131e-05 43.9639 0.324333 28.7231 6.74755Z"
                  :fill="colors.text"
                  name="top-cover"
                />
                <path
                  d="M93.2036 25.4333C92.3569 25.6928 88.1233 28.5476 83.7595 31.6619C79.4608 34.841 74.1852 38.6041 72.0358 40.0964L68.2582 42.7565L68.3233 51.775C68.3885 56.7059 68.1279 61.5071 67.8023 62.4803C67.151 64.1023 62.4615 67.9303 56.2089 71.8881L53.4733 73.6398L53.4082 90.3142V107.054L55.0365 108.092C56.3391 108.935 57.0556 109.065 58.2931 108.481C62.0056 106.794 92.8128 83.8262 94.5714 81.4904C98.0885 76.6244 98.349 74.5482 98.349 50.5422C98.349 35.6845 98.0885 28.0934 97.6325 26.9904C96.7858 25.1738 95.3529 24.6547 93.2036 25.4333Z"
                  :fill="colors.text"
                  name="right-cover"
                />
                <path
                  d="M5.74574 23.7154C6.61086 23.9808 10.9364 26.8998 15.3951 30.0843C19.7873 33.335 25.1776 37.1829 27.3737 38.7088L31.2334 41.4288L31.1669 50.6504C31.1003 55.6924 31.3665 60.6017 31.6993 61.5969C32.3647 63.2554 37.1561 67.1696 43.5447 71.2165L46.3397 73.0078L46.4062 90.0577V107.174L44.7426 108.236C43.4116 109.098 42.6796 109.231 41.4152 108.634C37.622 106.909 6.14502 83.4235 4.34824 81.0352C0.754677 76.0595 0.488487 73.9366 0.488487 49.3899C0.488487 34.1975 0.754677 26.4354 1.22051 25.3076C2.08563 23.45 3.54967 22.9193 5.74574 23.7154Z"
                  :fill="colors.text"
                  name="left-cover"
                />
                <path
                  d="M36.1479 52.3589C36.1479 56.0571 36.4085 59.366 36.669 59.7553C37.2552 60.6636 45.3966 66.5029 46.0479 66.5029C46.3085 66.5029 46.569 63.4535 46.569 59.6904V52.9428L41.6841 49.3095C39.0137 47.363 36.669 45.741 36.4736 45.741C36.2782 45.741 36.1479 48.7255 36.1479 52.3589Z"
                  :fill="colors.text"
                  name="inside-left-cover"
                />
                <path
                  d="M63.9917 52.0791C63.9917 55.8929 63.723 59.3052 63.4544 59.7067C62.8499 60.6434 54.454 66.6652 53.7823 66.6652C53.5137 66.6652 53.245 63.5205 53.245 59.6398V52.6813L58.2825 48.9344C61.0364 46.9272 63.4544 45.2544 63.6559 45.2544C63.8574 45.2544 63.9917 48.3322 63.9917 52.0791Z"
                  :fill="colors.text"
                  name="inside-right-cover"
                />
                <path
                  d="M49.3299 47.5056L41.3079 42.5487C39.9436 41.7057 40.0766 39.6804 41.5394 39.023L49.5681 35.415C50.1034 35.1744 50.7173 35.1811 51.2473 35.4332L58.8224 39.0377C60.2318 39.7083 60.3641 41.6628 59.0581 42.5173L51.4762 47.4778C50.8268 47.9027 49.9902 47.9135 49.3299 47.5056Z"
                  :fill="colors.text"
                  name="inside-top-cover"
                />
              </g>
              <defs>
                <clipPath id="clip0_1355_2">
                  <rect width="99" height="109" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </RouterLink>

          <!--
          <img src="@\assets\images\components\footer\runcode_cubo.png" alt="logo runcode" />
          -->
        </div>
        <div class="text-container" :style="{ color: colors.text }">
          <div class="title" :style="{ color: colors.title }">RUNCODE</div>
          <div class="slogan">Más que software, cálidad hecha código</div>
          <div class="social-icons">
            <div class="icon">
              <RouterLink to="/" style="text-decoration: none" :style="{ color: colors.text }">
                <span class="mdi mdi-facebook zc"></span>
              </RouterLink>
            </div>

            <div class="icon">
              <RouterLink to="/" style="text-decoration: none" :style="{ color: colors.text }">
                <span class="mdi mdi-instagram zc"></span>
              </RouterLink>
            </div>
            <div class="icon">
              <RouterLink to="/" style="text-decoration: none" :style="{ color: colors.text }">
                <span class="mdi mdi-twitter zc"></span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="lists-section" :style="{ color: colors.text }">
        <div class="f-c">
          <div class="title" :style="{ color: colors.title }">SERVICIOS</div>
          <div class="items-container">
            <div class="item">
              <a href="/services" :style="{ color: colors.text }">Desarrollo web</a>
            </div>
            <div class="item">
              <a href="/services" :style="{ color: colors.text }">Desarrollo de apps</a>
            </div>
            <div class="item">
              <a href="/services" :style="{ color: colors.text }">Servicios SAP</a>
            </div>
            <div class="item">
              <a href="/services" :style="{ color: colors.text }">Explorar más</a>
            </div>
          </div>
        </div>
        <div class="f-c">
          <div class="title" :style="{ color: colors.title }">CONTACTO</div>
          <div class="items-container">
            <div class="item">contacto@runcode.co</div>
            <div class="item">+57 317 812 7429</div>
            <div class="item">Bogotá D.C</div>
          </div>
        </div>
        <div class="f-c">
          <div class="title" :style="{ color: colors.title }">NOSOTROS</div>
          <div class="items-container">
            <div class="item">
              <a href="/services" :style="{ color: colors.text }">Sobre nosotros</a>
            </div>
            <div class="item">
              <a href="/services" :style="{ color: colors.text }">Misión</a>
            </div>
            <div class="item">
              <a href="/services" :style="{ color: colors.text }">Nuestro Equipo</a>
            </div>
          </div>
        </div>
        <div class="f-c">
          <div class="title" :style="{ color: colors.title }">LEGAL</div>
          <div class="items-container">
            <div class="item">
              <a href="/terms" :style="{ color: colors.text }">Términos de servicios</a>
            </div>
            <div class="item">
              <a href="/privacity" :style="{ color: colors.text }">Políticas de privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright" :style="{ color: colors.text }">@2024 RUNCODE INGENIERÍA</div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/styles/components/footer-item.scss';
@import '@/assets/styles/variables.scss';

.blue-footer-bg {
  background-color: $rc-blue;
}
.sky-footer-bg {
  background-color: $rc-sky;
}
.white-footer-bg {
  background-color: $rc-white;
}
.gray-footer-bg {
  background-color: #797979;
}

//-----------
.blue-footer-color {
  color: $rc-blue;
}
.sky-footer-color {
  color: $rc-sky;
}
.white-footer-color {
  color: $rc-white;
}
.gray-footer-color {
  color: #797979;
}
</style>
