<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'

import { useRouter } from 'vue-router'
import '@/assets/styles/variables.scss'

const router = useRouter()
const route = ref(null)

const dropmenu = ref(true)
const activatedScroll = ref(false)
const startColorText = ref('')

const actualScroll = ref(0)
const oldScroll = ref(0)
const upwards = ref(false)
const hidemenu = ref(false)
const sidebar_active = ref(false)
const prevScroll = ref(0)
const isStart = ref(true)

router.afterEach((to) => {
  route.value = to.name

  Object.keys(valueRoutes.value).forEach((key) => {
    valueRoutes.value[key] = false
  })
  valueRoutes.value[route.value] = true

  if (sidebar_active.value) {
    desactivateSidebar()
  }
})

const colors = ref({
  light: '',
  dark: '',
  blue: '',
  white: '',
  sky: '',
  gray: ''
})

const props = defineProps({
  primaryColor: {
    type: String,
    default: 'white'
  },

  text: {
    type: String,
    default: '363636'
  },

  iconPosition: {
    type: String,
    default: 'right'
  },
  startColor: {
    type: String,
    default: 'yellow'
  }
})

const valueRoutes = ref({
  home: false,
  aboutUs: false,
  services: false,
  whyUs: false,
  howDo: false,
  contact: false
})

const detectScreen = () => {
  if (window.innerWidth < 964) {
    dropmenu.value = false
  } else {
    dropmenu.value = true
  }
}

function setColors() {
  if (props.startColor === 'light') {
    colors.value.light = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-white')
      .trim()
    startColorText.value = colors.value.light
  } else {
    colors.value.dark = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-gray')
      .trim()
    startColorText.value = colors.value.dark
  }
}

const preventScroll = (e) => {
  e.preventDefault()
}

const disableScroll = () => {
  window.addEventListener('wheel', preventScroll, { passive: false })
  window.addEventListener('touchmove', preventScroll, { passive: false })
}

const enableScroll = () => {
  window.removeEventListener('wheel', preventScroll)
  window.removeEventListener('touchmove', preventScroll)
}

const activateSidebar = () => {
  sidebar_active.value = true
  hidemenu.value = true
  disableScroll()
}

const desactivateSidebar = () => {
  sidebar_active.value = false
  hidemenu.value = false

  enableScroll()
}

window.addEventListener('scroll', () => {
  // Actualizamos la posición actual del scroll en la variable `actualScroll`
  actualScroll.value = window.scrollY

  if (window.scrollY == 0) {
    hidemenu.value = false
  }

  if (window.scrollY <= 110) {
    isStart.value = true
  } else {
    isStart.value = false
  }

  // Detectar dirección del scroll
  if (actualScroll.value < oldScroll.value && upwards.value) {
    // Si el usuario está desplazándose hacia arriba y antes estaba desplazándose hacia abajo,
    // actualizamos la dirección a "arriba" (`upwards.value = false`)
    upwards.value = false
    // Guardamos la posición actual del scroll como `prevScroll`
    prevScroll.value = window.scrollY
  } else if (actualScroll.value > oldScroll.value && !upwards.value) {
    // Si el usuario está desplazándose hacia abajo y antes estaba desplazándose hacia arriba,
    // cambiamos la dirección a "abajo" (`upwards.value = true`)
    upwards.value = true
    // Guardamos la posición actual del scroll como `prevScroll`
    prevScroll.value = window.scrollY
  }

  // Activar o desactivar `activatedScroll` para indicar si el scroll está activo
  activatedScroll.value = window.scrollY > 0

  // Ocultar o mostrar el menú dependiendo de la distancia de desplazamiento
  const scrollDifference = Math.abs(actualScroll.value - prevScroll.value) // Diferencia entre la posición actual y la posición previa
  if (scrollDifference > 100) {
    // Si la diferencia es mayor a 100px, ocultamos o mostramos el menú
    // dependiendo de si el usuario está desplazándose hacia abajo o hacia arriba
    hidemenu.value = actualScroll.value > prevScroll.value
  }

  // Guardamos la posición actual del scroll como la posición anterior para la siguiente vez
  oldScroll.value = window.scrollY
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 480) {
    enableScroll()
  }
})

try {
  // Registra el evento 'resize' al montar el componente para detectar cambios en la resolución
  onMounted(async () => {
    detectScreen()
    window.addEventListener('resize', detectScreen)
    colors.value.blue = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-blue')
      .trim()
    colors.value.sky = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-sky')
      .trim()
    colors.value.gray = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-white-2')
      .trim()
    colors.value.white = getComputedStyle(document.documentElement)
      .getPropertyValue('--rc-white')
      .trim()
  })

  // Asegúrate de quitar el evento 'resize' cuando el componente se destruye para evitar fugas de memoria
  onUnmounted(() => {
    window.removeEventListener('resize', detectScreen)
  })
} catch (err) {
  //console.log(err)
}

watch(() => props.startColor, setColors, { immediate: true })

//PARA DEFINIR EL COLOR SE DICE STARTCOLOR ES LIGHT TATATA añadamos una sentenica
//SI ES COLOR ES LIGHT Y SI ESTA AL INICIO ENTONCES COLORES LIGHT SINO OSCURITOS
//definir cuando esta al inicio o no con una variable
</script>

<template>
  <div class="navbar-item">
    <nav
      :style="hidemenu ? { marginTop: '-100px' } : { marginTop: '0' }"
      :class="activatedScroll && !isStart ? 'bg-color' : 'bg-transparent'"
    >
      <RouterLink to="/" style="width: 100%">
        <div class="logo">
          <!--LOGO-->
          <svg
            width="28"
            viewBox="0 0 99 109"
            class="icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1355_2)">
              <path
                d="M28.7231 6.74755C20.0606 10.5106 12.31 14.0142 11.6587 14.663C10.0955 16.0255 10.0955 18.8803 11.5935 20.697C12.1797 21.4106 17.3902 25.2386 23.0567 29.1315C32.5659 35.6196 33.5429 36.1386 34.7804 35.36C38.037 33.219 47.1554 29.8452 49.5652 29.8452C52.2356 29.8452 62.6567 33.738 64.5455 35.4249C65.3922 36.2035 66.6948 35.4898 74.6409 29.8452C84.3455 22.9029 87.9277 19.594 87.9277 17.5827C87.9277 15.0523 84.2804 12.6517 73.5337 8.17493C53.1475 -0.389357 54.3198 -6.93131e-05 49.2396 -6.93131e-05C44.8106 -6.93131e-05 43.9639 0.324333 28.7231 6.74755Z"
                :fill="startColor === 'light' && isStart ? colors.gray : colors.blue"
              />
              <path
                d="M93.2036 25.4333C92.3569 25.6928 88.1233 28.5476 83.7595 31.6619C79.4608 34.841 74.1852 38.6041 72.0358 40.0964L68.2582 42.7565L68.3233 51.775C68.3885 56.7059 68.1279 61.5071 67.8023 62.4803C67.151 64.1023 62.4615 67.9303 56.2089 71.8881L53.4733 73.6398L53.4082 90.3142V107.054L55.0365 108.092C56.3391 108.935 57.0556 109.065 58.2931 108.481C62.0056 106.794 92.8128 83.8262 94.5714 81.4904C98.0885 76.6244 98.349 74.5482 98.349 50.5422C98.349 35.6845 98.0885 28.0934 97.6325 26.9904C96.7858 25.1738 95.3529 24.6547 93.2036 25.4333Z"
                :fill="startColor === 'light' && isStart ? colors.gray : colors.blue"
              />
              <path
                d="M5.74574 23.7154C6.61086 23.9808 10.9364 26.8998 15.3951 30.0843C19.7873 33.335 25.1776 37.1829 27.3737 38.7088L31.2334 41.4288L31.1669 50.6504C31.1003 55.6924 31.3665 60.6017 31.6993 61.5969C32.3647 63.2554 37.1561 67.1696 43.5447 71.2165L46.3397 73.0078L46.4062 90.0577V107.174L44.7426 108.236C43.4116 109.098 42.6796 109.231 41.4152 108.634C37.622 106.909 6.14502 83.4235 4.34824 81.0352C0.754677 76.0595 0.488487 73.9366 0.488487 49.3899C0.488487 34.1975 0.754677 26.4354 1.22051 25.3076C2.08563 23.45 3.54967 22.9193 5.74574 23.7154Z"
                :fill="startColor === 'light' && isStart ? colors.white : colors.sky"
              />
              <path
                d="M36.1479 52.3589C36.1479 56.0571 36.4085 59.366 36.669 59.7553C37.2552 60.6636 45.3966 66.5029 46.0479 66.5029C46.3085 66.5029 46.569 63.4535 46.569 59.6904V52.9428L41.6841 49.3095C39.0137 47.363 36.669 45.741 36.4736 45.741C36.2782 45.741 36.1479 48.7255 36.1479 52.3589Z"
                :fill="startColor === 'light' && isStart ? colors.gray : colors.blue"
              />
              <path
                d="M63.9917 52.0791C63.9917 55.8929 63.723 59.3052 63.4544 59.7067C62.8499 60.6434 54.454 66.6652 53.7823 66.6652C53.5137 66.6652 53.245 63.5205 53.245 59.6398V52.6813L58.2825 48.9344C61.0364 46.9272 63.4544 45.2544 63.6559 45.2544C63.8574 45.2544 63.9917 48.3322 63.9917 52.0791Z"
                :fill="startColor === 'light' && isStart ? colors.white : colors.sky"
              />
              <path
                d="M49.3299 47.5056L41.3079 42.5487C39.9436 41.7057 40.0766 39.6804 41.5394 39.023L49.5681 35.415C50.1034 35.1744 50.7173 35.1811 51.2473 35.4332L58.8224 39.0377C60.2318 39.7083 60.3641 41.6628 59.0581 42.5173L51.4762 47.4778C50.8268 47.9027 49.9902 47.9135 49.3299 47.5056Z"
                :fill="startColor === 'light' && isStart ? colors.white : colors.sky"
              />
            </g>
            <defs>
              <clipPath id="clip0_1355_2">
                <rect width="99" height="109" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <!--RUNCODE-->
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 1866.000000 295.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,295.000000) scale(0.100000,-0.100000)"
              :fill="startColor === 'light' && isStart ? colors.gray : colors.blue"
              stroke="none"
            >
              <path
                d="M180 1456 l0 -1296 345 0 345 0 0 376 0 375 263 -3 c256 -3 263 -4
312 -28 40 -20 55 -35 75 -75 25 -49 25 -53 28 -347 l3 -298 355 0 354 0 0
318 c0 247 -4 331 -15 381 -46 193 -168 304 -400 361 -63 16 -67 18 -40 24
255 59 393 188 441 417 22 104 15 535 -10 624 -75 269 -239 385 -622 442 -88
13 -234 17 -771 20 l-663 5 0 -1296z m1202 703 c80 -17 117 -44 147 -108 24
-53 26 -65 26 -211 0 -210 -22 -271 -114 -314 -43 -19 -66 -21 -308 -24 l-263
-3 0 335 0 336 230 0 c129 0 252 -5 282 -11z"
              />
              <path
                d="M2690 1948 c0 -1076 10 -1220 99 -1401 122 -249 316 -370 653 -406
54 -6 240 -11 415 -11 440 0 585 19 748 99 167 82 284 218 345 400 50 148 52
210 57 1199 l5 922 -346 0 -346 0 0 -767 c0 -423 -5 -819 -10 -880 -17 -211
-57 -290 -168 -335 -54 -22 -69 -23 -292 -23 -199 1 -242 3 -279 18 -97 38
-137 90 -168 214 -14 59 -16 176 -20 921 l-4 852 -345 0 -344 0 0 -802z"
              />
              <path
                d="M5500 1455 l0 -1295 330 0 330 0 2 960 3 961 219 -528 c121 -290 300
-723 399 -960 l180 -433 518 0 519 0 0 1295 0 1295 -335 0 -335 0 0 -957 0
-958 -402 958 -401 957 -514 0 -513 0 0 -1295z"
              />
              <path
                :fill="startColor === 'light' && isStart ? colors.white : colors.sky"
                d="M13730 1455 l0 -1295 713 0 c757 0 864 5 1027 46 355 90 508 293 560
739 17 151 13 911 -6 1056 -32 250 -94 400 -213 519 -84 84 -153 125 -276 163
-191 61 -293 67 -1112 67 l-693 0 0 -1295z m1360 704 c79 -12 154 -52 180 -94
11 -17 27 -63 37 -101 16 -61 18 -120 18 -509 0 -336 -3 -454 -14 -500 -25
-112 -57 -154 -140 -187 -53 -21 -72 -23 -398 -26 l-343 -3 0 715 0 716 298 0
c163 0 326 -5 362 -11z"
              />

              <path
                :fill="startColor === 'light' && isStart ? colors.white : colors.sky"
                d="M9215 2769 c-230 -24 -425 -102 -538 -213 -108 -105 -184 -290 -218
-524 -6 -42 -13 -255 -16 -473 -9 -635 17 -843 130 -1064 101 -197 294 -309
604 -350 129 -17 576 -20 703 -5 450 55 667 266 725 706 8 63 15 160 15 215
l0 99 -352 -2 -353 -3 -6 -105 c-10 -193 -68 -269 -226 -300 -84 -17 -282 -8
-346 15 -150 54 -172 156 -164 758 5 394 11 449 54 528 47 87 167 126 357 116
135 -7 200 -28 251 -81 49 -50 64 -95 72 -203 l6 -83 343 0 344 0 0 108 c-1
258 -56 465 -163 608 -86 117 -255 201 -478 240 -112 19 -603 28 -744 13z"
              />
              <path
                :fill="startColor === 'light' && isStart ? colors.white : colors.sky"
                d="M11742 2770 c-343 -35 -557 -156 -660 -371 -47 -98 -75 -187 -98
-319 -22 -123 -32 -949 -14 -1130 55 -538 259 -755 765 -810 161 -18 770 -8
885 14 454 87 627 321 660 893 12 214 12 600 0 813 -20 343 -88 549 -229 691
-107 106 -236 166 -441 204 -76 14 -163 18 -440 21 -190 1 -382 -2 -428 -6z
m588 -611 c88 -14 159 -53 187 -104 42 -78 54 -179 60 -495 6 -315 -6 -536
-32 -635 -21 -81 -58 -124 -131 -155 -57 -24 -66 -25 -289 -25 -198 0 -237 3
-283 18 -156 55 -177 146 -169 758 4 403 9 449 54 535 23 46 100 90 178 103
73 13 350 13 425 0z"
              />
              <path
                :fill="startColor === 'light' && isStart ? colors.white : colors.sky"
                d="M16490 1455 l0 -1295 985 0 985 0 0 290 0 290 -640 0 -640 0 0 240 0
240 610 0 610 0 0 250 0 250 -610 0 -610 0 0 225 0 225 628 2 627 3 0 285 0
285 -972 3 -973 2 0 -1295z"
              />
            </g>
          </svg>

          <!--INGENIERÍA-->
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            height="28"
            viewBox="0 0 1863.000000 404.000000"
            preserveAspectRatio="xMidYMid meet"
            style="margin-top: -4px"
          >
            <g
              transform="translate(0.000000,404.000000) scale(0.100000,-0.100000)"
              :fill="colors.gray"
              stroke="none"
            >
              <path
                d="M15833 3351 c-90 -148 -163 -272 -163 -275 0 -4 32 -6 72 -4 l72 3
199 255 c109 140 202 263 208 273 9 16 1 17 -108 17 l-118 0 -162 -269z"
              />
              <path
                d="M4090 2884 c-14 -2 -63 -9 -110 -15 -105 -14 -232 -55 -306 -100
-113 -68 -191 -189 -236 -364 -23 -89 -23 -96 -23 -735 l0 -645 27 -96 c64
-234 178 -355 393 -417 145 -42 205 -47 580 -47 298 0 376 3 450 17 365 70
507 234 544 629 6 63 11 214 11 337 l0 222 -465 0 -465 0 0 -120 0 -120 330 0
330 0 0 -102 c0 -150 -17 -323 -37 -387 -23 -76 -105 -159 -186 -189 -102 -38
-178 -44 -540 -40 -371 5 -407 10 -511 66 -97 52 -150 126 -177 247 -20 87
-20 1213 0 1300 36 159 123 246 292 292 56 16 111 18 429 18 313 0 375 -2 432
-17 197 -51 266 -133 291 -345 l11 -93 134 0 135 0 -6 113 c-10 181 -47 285
-135 380 -88 94 -203 151 -382 189 -82 17 -140 21 -440 23 -190 2 -356 1 -370
-1z"
              />
              <path d="M120 1670 l0 -1190 135 0 135 0 0 1190 0 1190 -135 0 -135 0 0 -1190z" />
              <path
                d="M970 1675 l0 -1185 130 0 130 0 2 1053 3 1054 639 -1054 640 -1053
203 0 203 0 0 1185 0 1185 -130 0 -130 0 -2 -1056 -3 -1056 -640 1053 -641
1054 -202 3 -202 2 0 -1185z"
              />
              <path
                d="M5900 1675 l0 -1185 830 0 830 0 0 125 0 125 -700 0 -700 0 0 425 0
425 680 0 680 0 0 120 0 120 -680 0 -680 0 0 390 0 390 700 0 700 0 0 125 0
125 -830 0 -830 0 0 -1185z"
              />
              <path
                d="M7980 1675 l0 -1185 130 0 130 0 0 1057 c0 895 2 1055 14 1043 7 -8
298 -484 646 -1057 l632 -1043 204 0 204 0 0 1185 0 1185 -130 0 -130 0 -2
-1057 -3 -1058 -641 1055 -642 1055 -206 3 -206 2 0 -1185z"
              />
              <path
                d="M10510 1670 l0 -1190 135 0 135 0 0 1190 0 1190 -135 0 -135 0 0
-1190z"
              />
              <path
                d="M11350 1675 l0 -1185 835 0 835 0 0 125 0 125 -700 0 -700 0 0 425 0
425 680 0 680 0 0 120 0 120 -680 0 -680 0 0 390 0 390 700 0 700 0 0 125 0
125 -835 0 -835 0 0 -1185z"
              />
              <path
                d="M13440 1675 l0 -1185 130 0 130 0 0 460 0 460 476 0 c528 0 576 -4
654 -61 50 -36 84 -105 99 -199 6 -36 11 -199 11 -362 l0 -298 140 0 140 0 0
298 c0 321 -9 442 -40 530 -34 97 -103 163 -207 198 l-53 18 61 22 c74 27 123
65 166 128 63 93 77 199 70 526 -6 258 -16 329 -58 413 -50 97 -112 148 -228
187 -131 44 -235 50 -883 50 l-608 0 0 -1185z m1300 911 c93 -24 136 -56 168
-124 l27 -57 0 -265 c0 -198 -3 -275 -14 -303 -16 -47 -63 -102 -105 -124 -81
-43 -122 -46 -628 -50 l-488 -5 0 477 0 477 488 -5 c415 -3 497 -6 552 -21z"
              />
              <path
                d="M15730 1675 l0 -1185 130 0 130 0 0 1185 0 1185 -130 0 -130 0 0
-1185z"
              />
              <path
                d="M17190 2856 c0 -2 -196 -533 -435 -1180 -239 -647 -435 -1179 -435
-1181 0 -3 60 -5 134 -5 l133 0 111 302 110 303 600 3 600 2 30 -77 c16 -43
67 -180 113 -305 l84 -228 136 0 136 0 -334 898 c-183 493 -381 1026 -440
1185 l-106 287 -219 0 c-120 0 -218 -2 -218 -4z m492 -866 c125 -338 231 -625
234 -637 l6 -23 -511 0 c-281 0 -511 2 -511 5 0 7 460 1257 466 1267 3 5 24 8
47 6 l41 -3 228 -615z"
              />
            </g>
          </svg>
        </div>
      </RouterLink>
      <div class="options" v-if="dropmenu">
        <RouterLink to="/">
          <div
            class="rc-text text"
            :style="{ color: startColor === 'light' && isStart ? colors.white : colors.dark }"
          >
            Inicio
          </div>
          <div class="line" :class="valueRoutes.home ? 'line-active' : ''"></div>
        </RouterLink>
        <RouterLink to="/about-us">
          <span
            class="rc-text text"
            :style="{ color: startColor === 'light' && isStart ? colors.white : colors.dark }"
          >
            Nosotros</span
          >
          <div class="line" :class="valueRoutes.aboutUs ? 'line-active' : ''"></div>
        </RouterLink>
        <RouterLink to="/services">
          <span
            class="rc-text text"
            :style="{ color: startColor === 'light' && isStart ? colors.white : colors.dark }"
            >Servicios</span
          >
          <div class="line" :class="valueRoutes.services ? 'line-active' : ''"></div>
        </RouterLink>
        <RouterLink to="/contact">
          <span
            class="rc-text text"
            :style="{ color: startColor === 'light' && isStart ? colors.white : colors.dark }"
            >Contáctanos</span
          >
          <div class="line" :class="valueRoutes.contact ? 'line-active' : ''"></div>
        </RouterLink>
        <RouterLink to="/contact" class="no-deco" style="display: none">
          <ButtonSolid primaryColor="bg-blue"> Contáctanos </ButtonSolid>
        </RouterLink>
      </div>
      <div
        v-else
        class="dropmenu"
        @click="sidebar_active ? desactivateSidebar() : activateSidebar()"
      >
        <span
          class="mdi mdi-menu"
          style="font-size: 24px"
          :style="
            startColor === 'light' && isStart ? { color: colors.white } : { color: colors.black }
          "
        ></span>
      </div>
    </nav>

    <Transition name="sidebar">
      <div class="side-bar" v-if="sidebar_active">
        <div class="content" v-if="sidebar_active">
          <div class="img-container">
            <img src="@/assets/images/components/navbar/runcode_sidebar.svg" alt="" />
          </div>
          <div class="options">
            <span class="separator"> </span>
            <div class="container">
              <RouterLink to="/">
                <div class="link" :class="valueRoutes.home ? 'active' : ''">Inicio</div>
              </RouterLink>
              <RouterLink to="/services">
                <div class="link" :class="valueRoutes.services ? 'active' : ''">Servicios</div>
              </RouterLink>
              <RouterLink to="/about-us">
                <div class="link" :class="valueRoutes.aboutUs ? 'active' : ''">Sobre nosotros</div>
              </RouterLink>
            </div>
            <div class="container">
              <RouterLink to="/why-us">
                <div class="link" :class="valueRoutes.whyUs ? 'active' : ''">
                  ¿Por qué nosotros?
                </div>
              </RouterLink>
              <RouterLink to="/how-do-we-do">
                <div class="link" :class="valueRoutes.howDo ? 'active' : ''">¿Como lo hacemos?</div>
              </RouterLink>
            </div>
          </div>

          <div>
            <RouterLink to="/contact">
              <ButtonSolid primaryColor="sky" text-color="blue">
                Contáctanos
                <i class="fi fi-rr-arrow-small-right"></i>
              </ButtonSolid>
            </RouterLink>
          </div>
        </div>
        <div v-if="sidebar_active" class="background" @click="desactivateSidebar()"></div>
      </div>
    </Transition>

    <!--

    
    <div class="side-bar" :style="sidebar_active ? { opacity: '100%' } : { opacity: '0' }">
      <div class="content" :class="sidebar_active ? 'in' : 'out'">
        <div class="img-container">
          <img src="@/assets/images/components/navbar/runcode_sidebar.svg" alt="" />
        </div>
        <div>
          <span class="separator"> </span>
          <div>
            <div>Inicio</div>
            <div>Servicios</div>
            <div>Sobre nosotros</div>
          </div>
          <div>
            <div>¿Por qué nosotros?</div>
            <div>¿Como lo hacemos?</div>
          </div>
        </div>

        <div>
          <ButtonSolid primaryColor="bg-sky">
            Explorar más
            <i class="fi fi-rr-arrow-small-right"></i>
          </ButtonSolid>
        </div>
      </div>
      <div
        class="background"
        :style="sidebar_active ? { opacity: '100%' } : { opacity: '0' }"
        @click="desactivateSidebar()"
      ></div>
    </div>
    
    -->

    <!--
    <transition name="slide-fade">
      <p>loli</p>
      
      <div
        v-if="isDivVisible"
        class="menu-mb"
        style="width: 100%; display: flex; justify-content: end"
      >
        <div class="drop-menu-active">
          <a href="/contacto" @click="toggleDiv">
            <RouterLink to="/contacto">
              <span class="mdi mdi-email-outline"></span>Contáctame
            </RouterLink>
          </a>
          <a href="/sobre-mi"><span class="mdi mdi-account-hard-hat-outline"></span>Sobre mí</a>
          <a href="/experiencia"><span class="mdi mdi-briefcase-outline"></span>Experiencia</a>
        </div>
      </div>
      
    </transition>
    -->
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/navbar-item.scss';

.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.5s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(100%); /* Comienza fuera del viewport (a la derecha) */
}

.sidebar-enter-to {
  transform: translateX(0); /* Termina en su posición original */
}
</style>
