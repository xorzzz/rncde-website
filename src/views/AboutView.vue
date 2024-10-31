<script setup>
//import ButtonItem from '@/components/ButtonItem.vue'
//import ButtonSkyItem from '@/components/ButtonSkyItem.vue'
import { onMounted, ref } from 'vue'
const heightLeft = ref(null)
const heightRight = ref(null)

onMounted(() => {
  heightLeft.value = document.getElementById('firstItemL').offsetHeight
  heightRight.value = document.getElementById('firstItemR').offsetHeight

  window.addEventListener('resize', updateHeight)
})

// Función para actualizar la altura del contenedor
const updateHeight = () => {
  if (window.innerWidth >= 480) {
    heightLeft.value = document.getElementById('firstItemL').offsetHeight
    heightRight.value = document.getElementById('firstItemR').offsetHeight

    window.addEventListener('resize', updateHeight)
  } else {
    heightLeft.value = 10
    heightRight.value = 10
  }
}
</script>

<template>
  <div class="main-about">
    <!--LAND-->
    <div class="land-section">
      <div class="info-container">
        <h1 class="title rc-title-land">SOBRE NOSOTROS</h1>
        <p class="description">
          Somos una compañía colombiana dedicada al desarrollo de software, fundada en 2015. Nuestro
          principal objetivo es ofrecer soluciones inteligentes y personalizadas, adaptadas a las
          necesidades de nuestros clientes.
        </p>
      </div>
      <div class="img-container">
        <img src="@/assets/images/about/land-about-2.png" alt="land-about" />
      </div>
    </div>

    <!--MISION-->
    <div class="mision-section">
      <div class="info-container">
        <h2 class="title rc-title">NUESTRA MISIÓN</h2>
        <p class="paragraph rc-text">
          Creamos productos y servicios adaptables a sus operaciones. Centralizamos nuestros
          proyectos de desarrollo, en una idea de negocio.
        </p>
        <p class="paragraph rc-text">
          Sabemos que su empresa, necesita un tratamiento especial y personalizado, creamos
          productos y servicios adaptables a sus Centralizamos nuestros proyectos de desarrollo, en
          una idea de negocio.Sabemos que su empresa, necesita un tratamiento especial y
          personalizado
        </p>
      </div>
      <div class="img-container">
        <h2 class="title-mb rc-title">NUESTRA MISIÓN</h2>
        <img src="@/assets/images/about/mision.gif" alt="land-about" />
      </div>
    </div>

    <!--WE ARE-->
    <div class="we-are-sectinon">
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

    <!--OUR LEADERS-->
    <div class="leader-section">
      <div class="content-container">
        <h2 class="title rc-title">NUESTROS LIDERES</h2>
        <p class="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur magni sed repellendus
          dolores. Hic, ipsum.
        </p>
      </div>
      <!--Leader cards container-->
      <div class="cards-container">
        <!--card-->
        <div class="leader-card r-side">
          <!--Leader picture-->
          <div class="img-container">
            <img src="@/assets/images/about/leader-pic-1.png" alt="" />
          </div>

          <!--Description container-->
          <div class="info-container info">
            <div class="front-layer fl">
              <div>
                <div class="name">Carlos Urresty</div>
                <div class="job rc-text-light">Secretario General De Asuntos Sin Importancia</div>
              </div>

              <div class="description rc-text-light">
                Nuestro equipo cuenta con un gran talento para la resoluciòn de problemas, alcance
                de metas y garantìas.
              </div>
            </div>
            <div class="back-layer">
              <img src="@/assets/images/about/lines.svg" alt="" />
            </div>
          </div>
        </div>
        <!--card-->
        <div class="leader-card l-side">
          <!--Leader picture-->
          <div class="img-container">
            <img src="@/assets/images/about/leader-pic-2.png" alt="" />
          </div>

          <!--Description container-->
          <div class="info-container info">
            <div class="front-layer fl">
              <div>
                <div class="name">Chris Owenn</div>
                <div class="job rc-text-light">Representante legal</div>
              </div>

              <div class="description rc-text-light">
                Nuestro equipo cuenta con un gran talento para la resoluciòn de problemas, alcance
                de metas y garantìas.
              </div>
            </div>
            <div class="back-layer">
              <img src="@/assets/images/about/lines.svg" alt="" />
            </div>
          </div>
        </div>
        <!--card-->
        <div class="leader-card r-side">
          <!--Leader picture-->
          <div class="img-container">
            <img src="@/assets/images/about/leader-pic-3.png" alt="" />
          </div>

          <!--Description container-->
          <div class="info-container info">
            <div class="front-layer fl">
              <div>
                <div class="name">Daniel Buffa</div>
                <div class="job rc-text-light">Director de desarrollo</div>
              </div>

              <div class="description rc-text-light">
                Nuestro equipo cuenta con un gran talento para la resoluciòn de problemas, alcance
                de metas y garantìas.
              </div>
            </div>
            <div class="back-layer">
              <img src="@/assets/images/about/lines.svg" alt="" />
            </div>
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
