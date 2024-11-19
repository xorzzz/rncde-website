<script setup>
//import ButtonItem from '@/components/ButtonItem.vue'
//import ButtonSkyItem from '@/components/ButtonSkyItem.vue'
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
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
    <div class="land-section">
      <div class="info-container">
        <h1 class="rc-title title-land">SOBRE NOSOTROS</h1>
        <p class="description">
          Somos una compañía colombiana dedicada al desarrollo de software, fundada en 2015. Nuestro
          principal objetivo es ofrecer soluciones inteligentes y personalizadas, adaptadas a las
          necesidades de nuestros clientes.
        </p>
      </div>
      <div class="img-container">
        <img src="@/assets/images/about/land-about.gif" alt="land-about" />
      </div>
    </div>

    <!--MISION-->
    <div class="mision-section">
      <div class="info-container">
        <h2 class="title">NUESTRA MISIÓN</h2>
        <p class="paragraph rc-text">
          "Queremos acompañar a su empresa en el proceso de transformación digital, el mundo avanza
          y las estrategias tecnológicas, son la mejor opción para actuar a la velocidad de los
          cambios"
        </p>
      </div>
    </div>

    <!--WE ARE-->
    <div class="we-section">
      <h2 class="title rc-title">SOMOS</h2>

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
    </div>

    <!--CUSTOMERS-->
    <div class="customers-section">
      <div class="title rc-title">CLIENTES</div>
      <div class="brands">
        <div class="icon"><img src="@/assets/images/about/brand-1.png" alt="" /></div>
        <div class="icon"><img src="@/assets/images/about/brand-1.png" alt="" /></div>
        <div class="icon"><img src="@/assets/images/about/brand-1.png" alt="" /></div>
        <div class="icon"><img src="@/assets/images/about/brand-1.png" alt="" /></div>
      </div>
    </div>

    <!--VALUES-->
    <div class="values-section">
      <div class="title rc-title">NUESTROS VALORES</div>
      <div class="cards-container">
        <div class="card">
          <div class="description">
            Transformamos sus ideas en realidad, creando un código robusto y personalizado que se
            adapta perfectamente a sus operaciones. creamos productos y servicios adaptables a sus
            operaciones.
          </div>
          <div class="content">
            <div class="title">SIMPLICIDAD</div>
            <div class="img-container">
              <img src="@/assets/images/about/value-1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="description">
            Transformamos sus ideas en realidad, creando un código robusto y personalizado que se
            adapta perfectamente a sus operaciones. creamos productos y servicios adaptables a sus
            operaciones.
          </div>
          <div class="content">
            <div class="title">SIMPLICIDAD</div>
            <div class="img-container">
              <img src="@/assets/images/about/value-2.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="description">
            Transformamos sus ideas en realidad, creando un código robusto y personalizado que se
            adapta perfectamente a sus operaciones. creamos productos y servicios adaptables a sus
            operaciones.
          </div>
          <div class="content">
            <div class="title">SIMPLICIDAD</div>
            <div class="img-container">
              <img src="@/assets/images/about/value-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--OUR TEAM-->
    <div class="team-section">
      <div class="content-container">
        <h2 class="rc-title">CONÓCE NUESTRO EQUIPO</h2>
        <p class="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur magni sed repellendus
          dolores. Hic, ipsum.
        </p>
        <div>
          <div>cuadros</div>
          <div>cuadros</div>
          <div>cuadros</div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet sapiente nesciunt
          iusto ipsum illum ea esse quaerat, fugit voluptate illo non libero deserunt, quas
          doloremque saepe dolorem delectus soluta. Ea, atque eaque tempore consequuntur voluptatum
          optio omnis. Culpa a, placeat ad quas praesentium nam fuga deserunt incidunt debitis
          architecto!
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, nesciunt! Fuga ut
          fugiat optio explicabo delectus distinctio quam inventore magnam.
        </p>
        <div class="aling-y">
          <RouterLink to="/contact" class="no-deco">
            <ButtonSolid primaryColor="bg-blue">
              Contáctanos
              <i class="fi fi-rr-arrow-small-right"></i>
            </ButtonSolid>
          </RouterLink>
        </div>
      </div>
      <!--Leader cards container-->

      <!--TAREAS CARD MOBILE
      +imagen cuadrada, establecer su radio aspecto
      +establecer maximo
      -separar todo a 20px gap
      -establecer tamaño de los titulos     
      
      -->
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
              <div class="title">Carlos</div>
              <div class="position">Secretario General de Asuntos sin Importancia</div>
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
              <div class="title">Carlos</div>
              <div class="position">Secretario General de Asuntos sin Importancia</div>
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
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/sections/about-section.scss';
@import '@/assets/styles/variables.scss';
</style>
