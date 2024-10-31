<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import ButtonSolid from './Buttons/ButtonSolid.vue'
import { useRouter } from 'vue-router'
import '@/assets/styles/variables.scss'

const router = useRouter()
const route = ref(null)

const class_text = ref('/icons/text_white.png')
const dropmenu = ref(true)
const isDivVisible = ref(false)
//const prevScrollY = ref(0)
const activatedScroll = ref(false)
const startColorText = ref('')

const colors = ref({
  light: '',
  dark: ''
})

//const isHome = ref(false)

// eslint-disable-next-line no-unused-vars
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
  services: false
})

router.afterEach((to) => {
  route.value = to.name

  Object.keys(valueRoutes.value).forEach((key) => {
    valueRoutes.value[key] = false
  })
  valueRoutes.value[route.value] = true
})

window.addEventListener('scroll', () => {
  if (window.scrollY != 0) {
    activatedScroll.value = true
  }

  //sea menor o igual a 100px y 0
  if (window.scrollY <= 200) {
    activatedScroll.value = false
  }
  //const currentScrollY = window.scrollY

  //console.log('scroll current:', currentScrollY)
  //console.log('scroll prev:', prevScrollY.value)

  /*

  if (currentScrollY > prevScrollY.value) {
    console.log('baja')
    prevScrollY.value = currentScrollY
  }

  if (currentScrollY < prevScrollY.value) {
    console.log('sube:', prevScrollY.value - currentScrollY)
    if (prevScrollY.value - currentScrollY < 200) {
      //isDivVisible.value = false
    }
  }

  */

  console.log(isDivVisible.value)
})

const detectScreen = () => {
  if (window.innerWidth < 620) {
    class_text.value =
      'https://ik.imagekit.io/xorz/Ing.%20D.%20Salcedo/text_white.png?updatedAt=1719330531323'
    dropmenu.value = false
  } else {
    class_text.value =
      'https://ik.imagekit.io/xorz/Ing.%20D.%20Salcedo/text_white.png?updatedAt=1719330531323'
    dropmenu.value = true
  }
}

function toggleDiv() {
  isDivVisible.value = !isDivVisible.value
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

try {
  // Registra el evento 'resize' al montar el componente para detectar cambios en la resolución
  onMounted(async () => {
    detectScreen()
    window.addEventListener('resize', detectScreen)
  })

  // Asegúrate de quitar el evento 'resize' cuando el componente se destruye para evitar fugas de memoria
  onUnmounted(() => {
    window.removeEventListener('resize', detectScreen)
  })
} catch (err) {
  console.log(err)
}

watch(() => props.startColor, setColors, { immediate: true })

watch(() => props.startColor, setColors, { immediate: true })
</script>

<template>
  <div class="navbar-item">
    <nav
      :style="dropmenu ? 'padding: 0 5%' : 'padding: 0 1rem'"
      :class="activatedScroll ? 'bg-color' : 'bg-transparent'"
    >
      <div class="logo">
        <RouterLink to="/">
          <a><img class="a" src="@/assets/images/components/navbar/runcode_cubo.png" alt="" /></a>
          <img
            class="b"
            src="@/assets/images/components/navbar/runcode-title.png"
            style="width: 80%; max-width: 300px"
            alt=""
          />
        </RouterLink>
      </div>
      <div class="options" v-if="dropmenu">
        <RouterLink to="/">
          <div class="rc-text text" :style="{ color: startColorText }">Inicio</div>
          <div class="line" :class="valueRoutes.home ? 'line-active' : ''"></div>
        </RouterLink>
        <RouterLink to="/about-us">
          <span class="rc-text text" :style="{ color: startColorText }">Nosotros</span>
          <div class="line" :class="valueRoutes.aboutUs ? 'line-active' : ''"></div>
        </RouterLink>
        <RouterLink to="/services">
          <span class="rc-text text" :style="{ color: startColorText }">Servicios</span>
          <div class="line" :class="valueRoutes.services ? 'line-active' : ''"></div>
        </RouterLink>
        <RouterLink to="/contact-us" class="no-deco">
          <ButtonSolid primaryColor="bg-blue">
            Explorar
            <i class="fi fi-rr-headset"></i>
          </ButtonSolid>
        </RouterLink>
      </div>
      <div v-else>
        <div class="dropmenu" @click="toggleDiv">
          <span class="mdi mdi-menu" style="font-size: 24px"></span>
        </div>
      </div>
    </nav>
    <transition name="slide-fade">
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
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/navbar-item.scss';
</style>
