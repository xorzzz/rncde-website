<script setup>
import { ref } from 'vue'
// eslint-disable-next-line no-unused-vars
import ButtonItem from '@/components/ButtonItem.vue'
// eslint-disable-next-line no-unused-vars
import ButtonSkyItem from '@/components/ButtonSkyItem.vue'
// eslint-disable-next-line no-unused-vars
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import ButtonOutline from '@/components/Buttons/ButtonOutline.vue'
import SectionRC from '@/components/Utils/SectionRC.vue'

const how_do = ref({
  item_1: false,
  item_2: false,
  item_3: false,
  item_4: false,
  item_5: false,
  item_6: false
})
</script>

<template>
  <div class="main-home">
    <!--HOME-->

    <div class="land-section">
      <SectionRC class="info-container">
        <h1 class="rc-title text-blue">
          MÁS QUE SOFTWARE CALIDAD HECHA <span class="rc-title text-sky">CÓDIGO</span>
        </h1>
        <p class="paragraph rc-text">
          En un mundo digital en constante evolución, creamos herramientas que transforman ideas en
          realidades tangibles. Nos especializamos en diseñar soluciones innovadoras que no solo
          resuelven problemas, sino que impulsan el crecimiento y generan impacto a largo plazo.
        </p>
        <div class="aling-y">
          <RouterLink to="/about-us" class="no-deco">
            <ButtonSolid primaryColor="sky" textColor="white  ">
              Explorar más
              <i class="fi fi-rr-arrow-small-right"></i>
            </ButtonSolid>
          </RouterLink>
        </div>
      </SectionRC>

      <div class="image-container">
        <img src="@/assets/images/home/land.svg" alt="home-land" />
      </div>
    </div>

    <!--ABOUT US-->
    <SectionRC class="about-section">
      <div class="info-container">
        <h2 class="rc-subtitle title-lg">SOBRE NOSOTROS</h2>
        <p class="rc-text paragraph">
          Nos destacamos por ofrecer un enfoque integral y estratégico que responde a las
          necesidades específicas de cada cliente. Nuestro equipo multidisciplinar, altamente
          capacitado y con experiencia certificada, trabaja en áreas clave como finanzas, gestión de
          relaciones con clientes, recursos humanos, gestión de proyectos, compras y cadena de
          suministro, con un enfoque especial en el mercado colombiano.
        </p>
        <div class="aling-y">
          <RouterLink to="/about-us" class="no-deco">
            <ButtonSolid primaryColor="blue" textColor="white">
              <i class="fi fi-rr-clipboard-user"></i>
              ¡Conócenos!
            </ButtonSolid>
          </RouterLink>
        </div>
      </div>
      <div class="image-container">
        <img src="@/assets/images/home/about.png" alt="home-about" />
      </div>
      <h2 class="rc-subtitle title-mb">SOBRE NOSOTROSS</h2>
    </SectionRC>

    <!--SERVICES-->
    <div class="services-section">
      <SectionRC class="content">
        <h2 class="rc-subtitle rc-title title-lg">NUESTROS SERVICIOS</h2>
        <div class="container">
          <!--V-FOR SERVICES, CALLING FROM A JSON FILE OR SOMETHING SIMILAR -->
          <div class="card-container">
            <div class="top-side">
              <h3 class="title-item rc-subtitle-2">DESARROLLO WEB</h3>
            </div>
            <div class="bot-side">
              <div class="img-container">
                <img src="@/assets/images/home/services/1.png" alt="image-service" />
              </div>
              <p class="paragraph">
                Asesoramos cada estrategia y le damos el diseño adecuado para afrontar los desafíos
                empresariales reales. Contemplamos las soluciones que oscilan entre el producto y el
                servicio.
              </p>
            </div>
          </div>

          <div class="card-container">
            <div class="top-side">
              <h3 class="title-item rc-subtitle-2">DESARROLLO DE APLICACIONES</h3>
            </div>
            <div class="bot-side">
              <div class="img-container">
                <img src="@/assets/images/home/services/1.png" alt="image-service" />
              </div>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, tenetur odit
                eaque optio sed eveniet? Eos repellat soluta autem itaque?
              </p>
            </div>
          </div>
          <div class="card-container">
            <div class="top-side">
              <h3 class="title-item rc-subtitle-2">CONSULTORÍAS TIC</h3>
            </div>
            <div class="bot-side">
              <div class="img-container">
                <img src="@/assets/images/home/services/1.png" alt="image-service" />
              </div>
              <p class="paragraph">
                Ofrecemos soluciones inteligentes, a la medida de sus necesidades. Nuestro sello de
                garantía son sus ideas plasmadas en un desarrollo innovador.
              </p>
            </div>
          </div>
          <div class="card-container mb">
            <div class="top-side">
              <h3 class="title-item rc-subtitle-2">VIGILANCIA Y TRANSFERENCIA ELECTRÓNICA</h3>
            </div>
            <div class="bot-side">
              <div class="img-container">
                <img src="@/assets/images/home/services/1.png" alt="image-service" />
              </div>
              <p class="paragraph">
                Estamos a la vanguardia de las últimas tendencias y nuestro propósito es consolidar
                ese objetivo, como un objetivo común.
              </p>
            </div>
          </div>
          <div class="card-container mb">
            <div class="top-side">
              <h3 class="title-item rc-subtitle-2">SERVICIOS SAP</h3>
            </div>
            <div class="bot-side">
              <div class="img-container">
                <img src="@/assets/images/home/services/1.png" alt="image-service" />
              </div>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, tenetur odit
                eaque optio sed eveniet? Eos repellat soluta autem itaque?
              </p>
            </div>
          </div>
          <div class="card-container mb">
            <div class="top-side">
              <h3 class="title-item rc-subtitle-2">SERVICIO ADICIONAL</h3>
            </div>
            <div class="bot-side">
              <div class="img-container">
                <img src="@/assets/images/home/services/1.png" alt="image-service" />
              </div>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, tenetur odit
                eaque optio sed eveniet? Eos repellat soluta autem itaque?
              </p>
            </div>
          </div>
        </div>
        <div class="button-container">
          <RouterLink to="/services" class="no-deco">
            <ButtonOutline primaryColor="sky" textColor="blue">
              Ver más
              <i class="fi fi-rr-arrow-small-right"></i>
            </ButtonOutline>
          </RouterLink>
        </div>
      </SectionRC>
    </div>

    <!--WHY RUNCODE?-->
    <SectionRC class="why-section">
      <div class="main-container">
        <div class="left">
          <!--checked-->
          <div class="header">
            <h2 class="rc-subtitle">¿POR QUE RUN<span class="rc-subtitle text-sky">CODE</span>?</h2>
          </div>
          <div class="items-container">
            <div class="item" style="background-color: #5a46d799">
              <div class="icon">
                <i class="fi fi-rr-chart-histogram xorz"></i>
              </div>
              <div class="text">Proyección</div>
            </div>
            <div class="item" style="background-color: #469ad799">
              <div class="icon">
                <i class="fi fi-rr-compass-alt xorz"></i>
              </div>
              <div class="text">Orientación al cliente</div>
            </div>
            <div class="item" style="background-color: #a946d799">
              <div class="icon">
                <i class="fi fi-rr-overview xorz"></i>
              </div>
              <div class="text">Transparencia</div>
            </div>
            <div class="item" style="background-color: #d7464699">
              <div class="icon">
                <i class="fi fi-rr-trust-alt xorz"></i>
              </div>
              <div class="text">Confianza</div>
            </div>
          </div>
          <div class="info-container">
            <div class="paragraph">
              <p class="rc-text">
                Trabajamos para ofrecer respuestas adaptadas a cada necesidad, asegurándonos de que
                cada solución sea precisa, innovadora y sostenible. Nos enfocamos en construir
                relaciones a largo plazo basadas en la confianza, la calidad del servicio y una
                visión compartida hacia el futuro, creando alianzas estratégicas que marquen la
                diferencia.
              </p>
              <p class="rc-text">
                La eficiencia y la eficacia de nuestras soluciones son el reflejo de un profundo
                compromiso con valores corporativos sólidos y con el cumplimiento de los objetivos
                de nuestros clientes.
              </p>
            </div>
            <div class="button-container">
              <div class="aling-y">
                <RouterLink to="/why-us" y class="no-deco">
                  <ButtonSolid primaryColor="sky" textColor="white">
                    Explorar más
                    <i class="fi fi-rr-arrow-small-right"></i>
                  </ButtonSolid>
                </RouterLink>
              </div>
            </div>
            <div class="phrase-container">
              <h2 class="rc-subtitle-2">“SU EMPRESA LO NECESITA NOSOTROS LO DESARROLLAMOS”</h2>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="image-container">
            <img src="@/assets/images/home/why-runcode-mb.png" alt="img-mb" />
          </div>
          <div class="phrase-container">
            <h2 class="rc-subtitle-2">“SU EMPRESA LO NECESITA NOSOTROS LO DESARROLLAMOS”</h2>
          </div>
        </div>
      </div>

      <div class="items-container-mb">
        <div class="item" style="background-color: #5a46d799">
          <div class="icon">
            <i class="fi fi-rr-chart-histogram xorz"></i>
          </div>
          <div class="text">Proyección</div>
        </div>
        <div class="item" style="background-color: #469ad799">
          <div class="icon">
            <i class="fi fi-rr-compass-alt xorz"></i>
          </div>
          <div class="text">Orientación al cliente</div>
        </div>
        <div class="item" style="background-color: #a946d799">
          <div class="icon">
            <i class="fi fi-rr-overview xorz"></i>
          </div>
          <div class="text">Transparencia</div>
        </div>
        <div class="item" style="background-color: #d7464699">
          <div class="icon">
            <i class="fi fi-rr-trust-alt xorz"></i>
          </div>
          <div class="text">Confianza</div>
        </div>
      </div>
    </SectionRC>

    <!--HOW DO WE DO IT?-->
    <SectionRC class="do-section">
      <div class="side-a">
        <div class="info-sec">
          <div class="img-cont">
            <img src="@/assets/images/home/how-do.svg" alt=" a" />
          </div>
          <p class="pharagraph rc-text">
            La eficiencia y la eficacia de nuestras soluciones son el resultado directo de nuestro
            compromiso con valores corporativos sólidos y con el cumplimiento de cada uno de los
            objetivos de nuestros clientes. Nos dedicamos a entender sus necesidades y diseñar
            estrategias que no solo cumplan con sus expectativas, sino que también las superen.
          </p>
          <div class="button-container-md">
            <RouterLink to="/how-do-we-do" class="no-deco">
              <ButtonSolid primaryColor="blue" textColor="white">
                Explorar más
                <i class="fi fi-rr-arrow-small-right"></i>
              </ButtonSolid>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="side-b" style="display: flex; flex-direction: column">
        <div class="title-cont" style="margin-bottom: 30px">
          <h2 class="rc-subtitle">¿COMO LO HACEMOS?</h2>
        </div>
        <div class="items-sec">
          <div class="item" @mouseenter="how_do.item_1 = true" @mouseleave="how_do.item_1 = false">
            <div class="icon-cont">
              <i class="fi fi-rr-case-study icon"></i>
              <div class="circle-1"></div>
              <div class="circle-2" style="background-color: #aceeb7"></div>
            </div>
            <div class="text-cont">
              <h3 class="title rc-text-2">Análisis de requerimientos requerimientos</h3>

              <p :class="['p', { 'p--visible': how_do.item_1 }]" class="paragraph">
                Estudiamos a fondo las necesidades del cliente para definir los objetivos y desafíos
                del proyecto, asegurando que cada solución esté alineada con sus expectativas
              </p>
            </div>
          </div>

          <div class="item" @mouseenter="how_do.item_2 = true" @mouseleave="how_do.item_2 = false">
            <div class="icon-cont">
              <i class="fi fi-rr-drafting-compass icon"></i>
              <div class="circle-1"></div>
              <div class="circle-2" style="background-color: #aceaee"></div>
            </div>
            <div class="text-cont">
              <h3 class="title rc-text-2">Diseño y arquitectura de la solución</h3>
              <p :class="['p', { 'p--visible': how_do.item_2 }]" class="paragraph">
                Diseñamos una solución escalable y eficiente, creando una arquitectura flexible que
                se adapte a las necesidades presentes y futuras del cliente
              </p>
            </div>
          </div>

          <div class="item" @mouseenter="how_do.item_3 = true" @mouseleave="how_do.item_3 = false">
            <div class="icon-cont">
              <i class="fi fi-rr-display-code icon"></i>
              <div class="circle-1"></div>
              <div class="circle-2" style="background-color: #acbbee"></div>
            </div>
            <div class="text-cont">
              <h3 class="title rc-text-2">Desarrollo y codificación de la solución</h3>
              <p :class="['p', { 'p--visible': how_do.item_3 }]" class="paragraph">
                Desarrollamos y codificamos utilizando las mejores tecnologías y estándares de
                calidad, asegurando soluciones confiables y fáciles de mantener.
              </p>
            </div>
          </div>

          <div class="item" @mouseenter="how_do.item_4 = true" @mouseleave="how_do.item_4 = false">
            <div class="icon-cont">
              <i class="fi fi-rr-tachometer-alt-fastest icon"></i>
              <div class="circle-1"></div>
              <div class="circle-2" style="background-color: #cdacee"></div>
            </div>
            <div class="text-cont">
              <h3 class="title rc-text-2">Pruebas de calidad</h3>
              <p :class="['p', { 'p--visible': how_do.item_4 }]" class="paragraph">
                Realizamos pruebas rigurosas para verificar el rendimiento, la seguridad y la
                usabilidad, asegurando que la solución funcione perfectamente en todos los
                escenarios.
              </p>
            </div>
          </div>

          <div class="item" @mouseenter="how_do.item_5 = true" @mouseleave="how_do.item_5 = false">
            <div class="icon-cont">
              <i class="fi fi-rr-rocket-lunch icon"></i>
              <div class="circle-1"></div>
              <div class="circle-2" style="background-color: #eeace0"></div>
            </div>
            <div class="text-cont">
              <h3 class="title rc-text-2">Despliegue e implementación</h3>
              <p :class="['p', { 'p--visible': how_do.item_5 }]" class="paragraph">
                Implementamos la solución de manera fluida, garantizando una transición sin
                problemas y una integración exitosa con los sistemas existentes.
              </p>
            </div>
          </div>
          <div class="item" @mouseenter="how_do.item_6 = true" @mouseleave="how_do.item_6 = false">
            <div class="icon-cont">
              <i class="fi fi fi-rr-holding-hand-gear icon"></i>
              <div class="circle-1"></div>
              <div class="circle-2" style="background-color: #eeacac"></div>
            </div>
            <div class="text-cont">
              <h3 class="title rc-text-2">Mantenimiento y soporte</h3>
              <p :class="['p', { 'p--visible': how_do.item_6 }]" class="paragraph">
                Ofrecemos soporte continuo y mantenimiento regular para asegurar que la solución
                siga operando eficientemente y se adapte a las necesidades cambiantes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="button-container-mb">
        <RouterLink to="/how-do-we-do" class="no-deco">
          <ButtonSolid primaryColor="blue" textColor="white">
            Explorar más
            <i class="fi fi-rr-arrow-small-right"></i>
          </ButtonSolid>
        </RouterLink>
      </div>
    </SectionRC>

    <!--DO YOU HAVE A PROJECT IN MIND?-->
    <SectionRC bg-class="project-section" class="content">
      <div class="info">
        <h2 class="title rc-title text-white">¿TIENES UN PROYECTO EN MENTE?</h2>
        <p class="pharagraph">
          Cuentanos tu idea, nosotros la perfeccionamos en tiempo y espacio. Existe un contexto en
          el que todo es posible y nosotros sabemos hacerlo.
        </p>
        <RouterLink to="/contact" class="no-deco">
          <ButtonSolid primaryColor="sky" textColor="blue">
            Explorar más
            <i class="fi fi-rr-arrow-small-right"></i>
          </ButtonSolid>
        </RouterLink>
      </div>
    </SectionRC>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/sections/home-section.scss';
@import '@/assets/styles/variables.scss';
</style>
