<script setup>
//import ButtonItem from '@/components/ButtonItem.vue'
//import ButtonSkyItem from '@/components/ButtonSkyItem.vue'
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import SectionRC from '@/components/Utils/SectionRC.vue'
import WhyUsComponent from '@/components/Utils/WhyUsComponent.vue'

import { onMounted, ref } from 'vue'
const heightLeft = ref(null)
const heightRight = ref(null)
const mobile = ref(null)

// Variable reactiva para controlar el montaje del teleport
const isMounted = ref(false)

onMounted(() => {
  heightLeft.value = document.getElementById('firstItemL').offsetHeight
  heightRight.value = document.getElementById('firstItemR').offsetHeight
  updateHeight()
  window.addEventListener('resize', updateHeight)
  isMounted.value = true
})

// Función para actualizar la altura del contenedor
const updateHeight = () => {
  if (window.innerWidth >= 900) {
    mobile.value = false
  } else {
    mobile.value = true
  }
  if (window.innerWidth >= 720) {
    heightLeft.value = document.getElementById('firstItemL').offsetHeight
    heightRight.value = document.getElementById('firstItemR').offsetHeight
    mobile.value = false

    //window.addEventListener('resize', updateHeight)
  } else {
    heightLeft.value = 20
    heightRight.value = 20
    mobile.value = true
  }
}
</script>

<template>
  <div class="main-about">
    <!--LAND-->
    <SectionRC class="land-section">
      <div class="info-container">
        <h1 class="rc-title title-land">SOBRE NOSOTROS</h1>
        <p class="description">
          Somos una compañía colombiana con más de <strong>9 años de experiencia</strong> en el
          desarrollo de software, creada con el propósito de brindar soluciones innovadoras a
          empresas de diferentes sectores. A lo largo de los años, hemos logrado consolidarnos como
          un aliado estratégico para nuestros clientes, ofreciendo productos y servicios que se
          ajustan a sus necesidades específicas y les permiten optimizar sus procesos. Nuestro
          enfoque se basa en la personalización, la calidad y la excelencia, buscando siempre el
          mejor aprovechamiento de las tecnologías disponibles.
        </p>
      </div>
      <div class="img-container">
        <img src="@/assets/images/about/land-about.gif" alt="land-about" />
      </div>
    </SectionRC>

    <!--MISION-->

    <div class="mision-section">
      <SectionRC class="info-container">
        <h2 class="title rc-subtitle">NUESTRA MISIÓN</h2>
        <p class="paragraph rc-text">
          Liderar la transformación digital de las empresas desarrollando soluciones a la medida que
          combinan innovación, calidad y adaptabilidad para enfrentar los retos del futuro,
          ayudándolas a optimizar sus operaciones, mejorar la experiencia del cliente y alcanzar sus
          objetivos de negocio en la era digital.
        </p>
      </SectionRC>
    </div>

    <!--WE ARE-->

    <SectionRC class="we-section">
      <h2 class="title rc-subtitle">SOMOS</h2>
      <div class="container">
        <div class="cards-container">
          <!--ITEM LEFT SIDE-->
          <div class="left-side">
            <div class="item left" id="firstItemL">
              <div class="text rc-text-light">
                <span class="bolder">Innovación y Tecnología:</span> Nos especializamos en la
                creación de soluciones tecnológicas innovadoras que se adaptan a las necesidades
                específicas de cada cliente, utilizando las últimas tendencias y herramientas del
                mercado.
              </div>
              <div class="vignette">
                <i class="fi fi-rr-head-vr icon"></i>
                <div class="circle-1"></div>
                <div class="circle-2"></div>
              </div>
            </div>
            <div class="item left" :style="{ marginTop: heightRight + 'px' }">
              <div class="text rc-text-light">
                <span class="bolder">Experiencia y Calidad:</span> Con más de una década en el
                mercado, nuestro equipo está compuesto por profesionales altamente capacitados y
                certificados, comprometidos con la excelencia y la calidad en cada proyecto.
              </div>
              <div class="vignette">
                <i class="fi fi-rr-badge icon"></i>
                <div class="circle-1"></div>
                <div class="circle-2"></div>
              </div>
            </div>
            <div class="item left" :style="{ marginTop: heightRight + 'px' }">
              <div class="text rc-text-light">
                <span class="bolder">Desarrollo a Medida:</span> Ofrecemos servicios personalizados
                de desarrollo de software, asegurándonos de que cada solución esté perfectamente
                alineada con los objetivos y requerimientos del cliente.
              </div>
              <div class="vignette">
                <i class="fi fi-rr-blueprint icon"></i>
                <div class="circle-1"></div>
                <div class="circle-2"></div>
              </div>
            </div>
          </div>
          <!--ITEM RIGHT SIDE-->
          <div class="right-side">
            <div class="item right" id="firstItemR" :style="{ marginTop: heightLeft + 'px' }">
              <div class="text rc-text-light">
                <span class="bolder">Enfoque al Cliente:</span> Nuestra filosofía de trabajo se
                centra en la satisfacción del cliente, proporcionando soporte continuo y soluciones
                flexibles que se ajustan a los cambios y desafíos del negocio.
              </div>
              <div class="vignette">
                <i class="fi fi-rr-review icon"></i>
                <div class="circle-1"></div>
                <div class="circle-2"></div>
              </div>
            </div>
            <div class="item right" :style="{ marginTop: heightLeft + 'px' }">
              <div class="text rc-text-light">
                <span class="bolder">Alcance Global::</span> Aunque somos una empresa local, hemos
                trabajado con clientes internacionales, ofreciendo nuestras soluciones a empresas de
                diversos sectores en todo el mundo.
              </div>
              <div class="vignette">
                <i class="fi fi-rr-world icon"></i>
                <div class="circle-1"></div>
                <div class="circle-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionRC>

    <!--CUSTOMERS-->
    <div class="customers-section">
      <SectionRC class="content">
        <div class="title rc-subtitle">CLIENTES</div>
        <div class="brands">
          <div class="icon"><img src="@/assets/images/about/brand-1.png" alt="" /></div>
          <div class="icon"><img src="@/assets/images/about/brand-1.png" alt="" /></div>
          <div class="icon"><img src="@/assets/images/about/brand-1.png" alt="" /></div>
          <div class="icon"><img src="@/assets/images/about/brand-1.png" alt="" /></div>
        </div>
      </SectionRC>
    </div>

    <!--VALUES-->
    <SectionRC class="values-section">
      <div class="title rc-subtitle">NUESTROS VALORES</div>
      <div class="cards-container">
        <div class="card">
          <div class="description">
            <span class="mdi mdi-format-quote-open"></span>Nos impulsa una profunda motivación por
            la creación de soluciones que no solo satisfagan las necesidades de nuestros clientes,
            sino que las excedan ampliamente. Esta motivación se manifiesta en un compromiso
            inquebrantable con la calidad, la precisión y la creatividad, valores que consideramos
            pilares fundamentales en cada etapa de nuestros desarrollos<span
              class="mdi mdi-format-quote-close"
            ></span>
          </div>
          <div class="content">
            <div class="title">EXCELENCIA CONSTANTE</div>
            <div class="img-container">
              <img src="@/assets/images/about/value-1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="description">
            <span class="mdi mdi-format-quote-open"></span>Nos comprometemos a mantenernos
            constantemente a la vanguardia de las tendencias tecnológicas y del mercado, lo que nos
            permite ofrecer soluciones innovadoras y adaptables que evolucionan al mismo ritmo que
            las necesidades de nuestros clientes. Esta dedicación a la vanguardia se traduce en una
            búsqueda continua de conocimiento, experimentación con nuevas tecnologías y una profunda
            comprensión del cambiante panorama empresarial<span
              class="mdi mdi-format-quote-close"
            ></span>
          </div>
          <div class="content">
            <div class="title">ADAPTABILIDAD TECNOLÓGICA</div>
            <div class="img-container">
              <img src="@/assets/images/about/value-2.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="description">
            <span class="mdi mdi-format-quote-open"></span>Construimos alianzas sólidas y duraderas
            con nuestros clientes, cimentadas en la confianza mutua, la comunicación abierta y un
            genuino espíritu de colaboración. No nos limitamos a ser proveedores externos, sino que
            nos convertimos en una extensión de su propio equipo, trabajando codo a codo para
            convertir sus ideas y visiones en realidades innovadoras que generen un impacto
            tangible<span class="mdi mdi-format-quote-close"></span>
          </div>
          <div class="content">
            <div class="title">COLABORACIÓN ESTRATÉGICA</div>
            <div class="img-container">
              <img src="@/assets/images/about/value-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </SectionRC>

    <!--OUR TEAM-->
    <SectionRC class="team-section">
      <div class="content-container">
        <h2 class="rc-subtitle text-white">
          CONÓCE NUESTRO <span class="rc-subtitle text-sky">EQUIPO</span>
        </h2>
        <p class="paragraph">
          En RunCode contamos con un equipo altamente capacitado, un verdadero motor de innovación
          compuesto por profesionales apasionados por la tecnología. Este equipo no solo posee una
          sólida formación y experiencia en sus respectivas áreas, sino que también comparte una
          profunda vocación por la búsqueda de soluciones creativas y de vanguardia.
        </p>
        <p>
          Nuestro talento humano combina experticia técnica con una mentalidad abierta y un enfoque
          colaborativo, entendiendo que la verdadera innovación surge del intercambio de ideas y la
          sinergia entre diferentes perspectivas.
        </p>

        <P>
          Trabajamos unidos, con dedicación y compromiso inquebrantables, impulsados por la
          convicción de que la excelencia se logra a través del esfuerzo conjunto y la atención al
          detalle. Para nosotros, cada proyecto es una oportunidad para demostrar nuestra pasión por
          la tecnología y nuestro compromiso con la calidad. Nos esforzamos para que cada desarrollo
          no solo cumpla con los requisitos planteados, sino que los supere con creces, ofreciendo
          un valor añadido que marque la diferencia.
        </P>
        <div>
          <div>cuadros</div>
          <div>cuadros</div>
          <div>cuadros</div>
        </div>

        <div class="aling-y">
          <RouterLink to="/contact" class="no-deco">
            <ButtonSolid primaryColor="sky">
              Contáctanos
              <i class="fi fi-rr-arrow-small-right"></i>
            </ButtonSolid>
          </RouterLink>
        </div>
      </div>

      <div class="cards-container">
        <div class="card">
          <div class="top-side">
            <div class="img-container">
              <img src="@/assets/images/about/leader-pic-1.png" alt="" />
            </div>
            <Teleport :to="mobile ? '#title-mb' + '-1' : '#title-md' + '-1'" v-if="isMounted">
              <div class="title">Carlos</div>
              <div class="position">Secretario General de Asuntos sin Importancia</div>
            </Teleport>
            <div class="info-container" id="title-mb-1"></div>
          </div>
          <div class="bot-side">
            <div class="info-container" id="title-md-1"></div>
            <p class="description">
              Nuestro equipo cuenta con un gran talento para la resoluciòn de problemas, alcance de
              metas y garantìas, Nuestro equipo cuenta con un gran talento.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="top-side">
            <div class="img-container">
              <img src="@/assets/images/about/leader-pic-2.png" alt="" />
            </div>
            <Teleport :to="mobile ? '#title-mb' + '-2' : '#title-md' + '-2'" v-if="isMounted">
              <div class="title">Chris Owwen</div>
              <div class="position">Director de desarrollo</div>
            </Teleport>
            <div class="info-container" id="title-mb-2"></div>
          </div>
          <div class="bot-side">
            <div class="info-container" id="title-md-2"></div>
            <p class="description">
              Nuestro equipo cuenta con un gran talento para la resoluciòn de problemas, alcance de
              metas y garantìas, Nuestro equipo cuenta con un gran talento.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="top-side">
            <div class="img-container">
              <img src="@/assets/images/about/leader-pic-3.png" alt="" />
            </div>
            <Teleport :to="mobile ? '#title-mb' + '-3' : '#title-md' + '-3'" v-if="isMounted">
              <div class="title">Bryan Owwen</div>
              <div class="position"></div>
            </Teleport>
            <div class="info-container" id="title-mb-3"></div>
          </div>
          <div class="bot-side">
            <div class="info-container" id="title-md-3"></div>
            <p class="description">
              Nuestro equipo cuenta con un gran talento para la resoluciòn de problemas, alcance de
              metas y garantìas, Nuestro equipo cuenta con un gran talento.
            </p>
          </div>
        </div>
      </div>
    </SectionRC>

    <SectionRC>
      <WhyUsComponent />
    </SectionRC>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/sections/about-section.scss';
@import '@/assets/styles/variables.scss';
</style>
