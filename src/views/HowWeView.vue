<script setup>
//import { onMounted, ref } from 'vue'
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import ButtonOutline from '@/components/Buttons/ButtonOutline.vue'
import WhyUsComponent from '@/components/Utils/WhyUsComponent.vue'
import SectionRC from '@/components/Utils/SectionRC.vue'
import { ref, onMounted } from 'vue'
import '@/assets/styles/variables.scss'

const rcBlue = ref('')
const rcWhite = ref('')

let div = undefined
let paddingTop = 0
let paddingBot = 0
let mitad = 0
let longitude = 0
let avance = ref(0)
const cardsContainer = ref(null)
const isEndReached = ref(false)

const widthCardContainer = ref(0)

onMounted(() => {
  rcBlue.value = getComputedStyle(document.documentElement).getPropertyValue('--rc-bluee').trim()
  rcWhite.value = getComputedStyle(document.documentElement).getPropertyValue('$rc-white').trim()

  div = document.getElementById('firstItem').getBoundingClientRect().top
  paddingTop = document.getElementById('firstItem').getBoundingClientRect().height / 2
  paddingBot = document.getElementById('lastItem').getBoundingClientRect().height / 2

  widthCardContainer.value = document.getElementById('infoContainer').getBoundingClientRect().width
  console.log(widthCardContainer.value)
  cardsContainer.value = document.getElementById('container')
})

window.addEventListener('scroll', function () {
  if (div) {
    div = document.getElementById('firstItem').getBoundingClientRect().top
    mitad = this.innerHeight / 2
    longitude = document.getElementById('heightBar').getBoundingClientRect().height

    if (mitad >= div && div >= 0) {
      avance.value = (Math.abs(mitad - div) / longitude) * 100
    } else if (mitad >= div && (div < 0) & (avance.value <= 100)) {
      avance.value = ((mitad + Math.abs(div)) / longitude) * 100
    }

    if (avance.value > 100) {
      avance.value = 100
    }

    console.log(avance.value)
  }
})

window.addEventListener('resize', function () {
  widthCardContainer.value = widthCardContainer.value - 10001
  widthCardContainer.value = document.getElementById('infoContainer').getBoundingClientRect().width

  console.log(widthCardContainer.value)
})

const scrollRight = () => {
  if (cardsContainer.value) {
    cardsContainer.value.scrollBy({
      left: 200,
      behavior: 'smooth'
    })

    // Verifica si has llegado al final
    const { scrollLeft, scrollWidth, clientWidth } = cardsContainer.value
    if (scrollLeft + clientWidth >= scrollWidth) {
      isEndReached.value = true
    }
  }
}

const scrollLeft = () => {
  console.log('izquierda')
  if (cardsContainer.value) {
    cardsContainer.value.scrollBy({
      left: -200,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="main-hwd">
    <div class="bg-blue">
      <SectionRC class="land-container">
        <div class="top-info-mb" id="original">
          <div class="title rc-title">¿COMO LO HACEMOS ?</div>
          <div class="separator"></div>
        </div>
        <div class="main-container">
          <div class="cards-container" id="container" dir="ltr">
            <div class="card">
              <div class="img-container">
                <img src="@/assets/images/how/step-1.png" alt="" />
              </div>
              <div class="rb-container">
                <div class="title">1. Análisis de Requerimientos</div>
                <div class="description">
                  Realizamos un análisis detallado y personalizado, identificando cada aspecto clave
                  de su negocio y los procesos involucrados. Esto nos permite diseñar estrategias
                  precisas que respondan a sus desafíos específicos y garantizar que las soluciones
                  propuestas se integren de manera efectiva con sus operaciones actuales.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="img-container">
                <img src="@/assets/images/how/step-2.png" alt="" />
              </div>
              <div class="rb-container">
                <div class="title">2. Diseño y Arquitectura de la Solución</div>
                <div class="description">
                  Definimos la estructura y los componentes clave de la solución, asegurando que sea
                  funcional, escalable y eficiente. Cada diseño está cuidadosamente planeado para
                  integrar las mejores prácticas tecnológicas y adaptarse perfectamente a las
                  necesidades del cliente.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="img-container">
                <img src="@/assets/images/how/step-3.png" alt="" />
              </div>
              <div class="rb-container">
                <div class="title">3. Desarrollo y Codificación</div>
                <div class="description">
                  Implementamos cada solución con un enfoque riguroso en la calidad del código,
                  priorizando la eficiencia, la seguridad y la escalabilidad. Nuestro equipo combina
                  experiencia y las últimas tecnologías para garantizar resultados robustos que se
                  alineen con los objetivos del cliente.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="img-container">
                <img src="@/assets/images/how/step-4.png" alt="" />
              </div>
              <div class="rb-container">
                <div class="title">4. PRUEBAS DE CALIDAD</div>
                <div class="description">
                  Aplicamos metodologías de prueba exhaustivas para identificar y corregir cualquier
                  posible inconveniente. Nuestro enfoque asegura que cada solución cumpla con los
                  más altos estándares de calidad, brindando confianza y estabilidad en su
                  implementación final.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="img-container">
                <img src="@/assets/images/how/step-5.png" alt="" />
              </div>
              <div class="rb-container">
                <div class="title">5. Despliegue e implementación</div>
                <div class="description">
                  Coordinamos cada etapa del despliegue para asegurar que la solución esté operativa
                  en el momento adecuado. Nuestro enfoque minimiza interrupciones, maximizando la
                  eficiencia y garantizando que todo funcione de forma óptima desde el primer día
                </div>
              </div>
            </div>
            <div class="card">
              <div class="img-container">
                <img src="@/assets/images/how/step-6.png" alt="" />
              </div>
              <div class="rb-container">
                <div class="title">6. Mantenimiento y soporte</div>
                <div class="description">
                  Monitoreamos constantemente el rendimiento de la solución, solucionando cualquier
                  inconveniente de forma proactiva. Nuestro equipo está disponible para realizar
                  mejoras y ajustes, garantizando que la tecnología evolucione junto con tu negocio.
                </div>
              </div>
            </div>
          </div>

          <div class="info-container" id="infoContainer">
            <div class="img-container">
              <img src="@/assets/images/how/land-image.png" alt="land image" />
            </div>
            <div class="section">
              <div class="top-info-md" id="original">
                <div class="title rc-title">¿COMO LO HACEMOS ?</div>
                <div class="separator"></div>
              </div>
              <div class="description">
                Prestamos un servicio ágil, seguro y eficaz a los clientes de base instalada, con el
                fin de convertirnos en aliados estratégicos en sus procesos de negocio.
              </div>
              <div class="button-container" style="transition: all ease-in-out 1s">
                <ButtonOutline @click="scrollLeft" primary-color="sky">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1"
                      stroke="#27DCE8"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </ButtonOutline>
                <ButtonSolid
                  primary-color="sky"
                  text-color="blue"
                  @click="scrollRight"
                  :disabled="isEndReached"
                  >Siguiente</ButtonSolid
                >
              </div>
            </div>
          </div>
        </div>
      </SectionRC>

      <SectionRC class="idea-container">
        <div class="info-container">
          <div class="img-container">
            <img src="@/assets/images/how/idea.png" alt="" />
          </div>
          <div class="title rc-title">¿Tienes una idea por desarollar?</div>

          <div class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nulla facere consectetur
            vero sit magni adipisci facilis iure voluptatum optio.
          </div>
          <div class="button-container">
            <RouterLink to="/contact" class="no-deco">
              <ButtonSolid primary-color="sky" text-color="blue">Contáctanos</ButtonSolid>
            </RouterLink>
          </div>
        </div>

        <div class="steps-container">
          <div
            class="layer-1"
            id="heightBar"
            :style="{ marginTop: paddingTop + 'px', marginBottom: paddingBot + 'px' }"
          >
            <div class="gray-sky" :style="{ height: avance + '%' }"></div>
          </div>

          <div class="layer-2">
            <div class="item" id="firstItem">
              <div class="dot" id="d1"></div>
              <div class="card">
                <div class="left-side">
                  <div class="label">paso #1</div>
                  <div class="emoji">🤝</div>
                </div>
                <div class="right-side">
                  <div class="title">QUEREMOS CONOCERTE</div>
                  <div class="description">
                    Garantizamos una respuesta oportuna, conocemos la importancia de optimizar
                    procesos.
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="dot"></div>
              <div class="card">
                <div class="left-side">
                  <div class="label">paso #2</div>
                  <div class="emoji">🤳</div>
                </div>
                <div class="right-side">
                  <div class="title">EN BREVE TE CONTACTAMOS</div>
                  <div class="description">
                    Garantizamos una respuesta oportuna, conocemos la importancia de optimizar
                    procesos.
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="dot"></div>
              <div class="card">
                <div class="left-side">
                  <div class="label">paso #3</div>
                  <div class="emoji">💡</div>
                </div>
                <div class="right-side">
                  <div class="title">CUÉNTANOS TU IDEA</div>
                  <div class="description">
                    Tús ideas son únicas y valiosas, nosotros nos encargamos de lo demás.
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="dot"></div>
              <div class="card">
                <div class="left-side">
                  <div class="label">paso #4</div>
                  <div class="emoji">🪄</div>
                </div>
                <div class="right-side">
                  <div class="title">¡QUE EMPIECE LA MÁGIA!</div>
                  <div class="description">
                    Prometemos un diseño a la medida de tus necesidades.
                  </div>
                </div>
              </div>
            </div>

            <div class="item" id="lastItem">
              <div class="dot"></div>
              <div class="card">
                <div class="left-side">
                  <div class="label">paso #5</div>
                  <div class="emoji">📦</div>
                </div>
                <div class="right-side">
                  <div class="title">DISFRUTA DEL PRODUCTO</div>
                  <div class="description">
                    Conozca la información de su empresa en tiempo real, disminuya márgenes de error
                    en sus procesos, reconozca la calidad hecha código.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionRC>
    </div>
    <div class="bg-wt">
      <div class="top-section">
        <div class="container">
          <div class="corner-left"></div>
        </div>
        <div class="title rc-title">¿POR QUÉ ELEGIRNOS?</div>
        <div class="container">
          <div class="corner-right"></div>
        </div>
      </div>
      <WhyUsComponent />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/sections/how-section.scss';
</style>
