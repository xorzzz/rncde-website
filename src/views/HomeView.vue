<script setup>
import { ref } from 'vue'
// eslint-disable-next-line no-unused-vars
import ButtonItem from '@/components/ButtonItem.vue'
// eslint-disable-next-line no-unused-vars
import ButtonSkyItem from '@/components/ButtonSkyItem.vue'
// eslint-disable-next-line no-unused-vars
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import ButtonOutline from '@/components/Buttons/ButtonOutline.vue'

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
      <div class="info-container">
        <h1 class="rc-title">
          MÁS QUE SOFTWARE CALIDAD HECHA <span class="text-sky">CÓDIGO</span>
        </h1>
        <p class="paragraph rc-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ratione neque vero
          eligendi eum fugit unde quas ab. Vero molestias nostrum a saepe perspiciatis official.
        </p>
        <div class="aling-y">
          <RouterLink to="/about-us" class="no-deco">
            <ButtonSolid primaryColor="bg-sky">
              Explorar más
              <i class="fi fi-rr-arrow-small-right"></i>
            </ButtonSolid>
          </RouterLink>
        </div>
      </div>
      <div class="image-container">
        <img src="@/assets/images/home/land.svg" alt="home-land" />
      </div>
    </div>

    <!--ABOUT US-->
    <div class="about-section">
      <div class="info-container">
        <h2 class="rc-title title-lg">SOBRE NOSOTROS</h2>
        <p class="rc-text paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero at veritatis, accusamus
          soluta sunt asperiores obcaecati, necessitatibus, voluptate expedita rem autem! Eius
          minima voluptatem provident quod, molestias at fugiat! Aliquam.
        </p>
        <div class="aling-y">
          <RouterLink to="/about-us" class="no-deco">
            <ButtonSolid primaryColor="bg-sky" iconPosition="left">
              ¡Conócenos!
              <i class="fi fi-rr-clipboard-user"></i>
            </ButtonSolid>
          </RouterLink>
        </div>
      </div>
      <div class="image-container">
        <img src="@/assets/images/home/about.png" alt="home-about" />
      </div>
      <h2 class="rc-title title-mb">SOBRE NOSOTROSS</h2>
    </div>

    <!--SERVICES-->
    <div class="services-section">
      <h2 class="title rc-title title-lg">NUESTROS SERVICIOS</h2>
      <div class="container">
        <!--V-FOR SERVICES, CALLING FROM A JSON FILE OR SOMETHING SIMILAR -->
        <div class="card-container">
          <div class="top-side">
            <h3 class="title-item rc-subtitle">Vigilancia y Transferencia Tecnológica</h3>
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
            <h3 class="title-item rc-subtitle">Vigilancia y Transferencia Tecnológica</h3>
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
            <h3 class="title-item rc-subtitle">Vigilancia y Transferencia Tecnológica</h3>
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
            <h3 class="title-item rc-subtitle">Vigilancia y Transferencia Tecnológica</h3>
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
            <h3 class="title-item rc-subtitle">Vigilancia y Transferencia Tecnológica</h3>
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
            <h3 class="title-item rc-subtitle">Vigilancia y Transferencia Tecnológica</h3>
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
          <ButtonOutline primaryColor="bg-sky" textColor="text-blue">
            Ver más
            <i class="fi fi-rr-arrow-small-right"></i>
          </ButtonOutline>
        </RouterLink>
      </div>
    </div>

    <!--WHY RUNCODE?-->
    <div class="why-section">
      <div class="main-container">
        <div class="left">
          <!--checked-->
          <div class="header">
            <div class="img-container">
              <img src="@/assets/images/home/why-runcode-title.png" alt="image-service" />
            </div>
            <div class="txt-container">
              <h2 class="rc-title text-white">
                ¿POR QUE <span class="rc-title text-sky">RUNCODE</span>?
              </h2>
            </div>
          </div>

          <div class="sep-container">
            <div class="separator"></div>
            <div class="separator"></div>
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
            <div>
              <div class="paragraph rc-text">
                La eficiencia y la eficacia de nuestras soluciones, son producto de nuestro
                compromiso con valores sólidos corporativos y con cada objetivo de nuestros
                clientes. <br />
                Luchamos por relaciones a largo plazo fundamentadas en la calidad de servicio y
                visión del futuro
              </div>
              <div class="button-container">
                <div class="aling-y">
                  <RouterLink to="/why-runcode" class="no-deco">
                    <ButtonSolid primaryColor="bg-blue">
                      Explorar más
                      <i class="fi fi-rr-arrow-small-right"></i>
                    </ButtonSolid>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="phrase-container">
              <h2 class="rc-subtitle">“SU EMPRESA LO NECESITA NOSOTROS LO DESARROLLAMOS”</h2>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="image-container">
            <img src="@/assets/images/home/why-runcode-mb.png" alt="img-mb" />
          </div>
          <div class="phrase-container">
            <h2 class="rc-subtitle">“SU EMPRESA LO NECESITA NOSOTROS LO DESARROLLAMOS”</h2>
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
    </div>

    <!--HOW DO WE DO IT?-->
    <div class="do-section">
      <div class="side-a">
        <div class="title-cont">
          <h2 class="rc-title">¿COMO LO HACEMOS?</h2>
        </div>
        <div class="info-sec">
          <div class="img-cont">
            <img src="@/assets/images/home/how-do.svg" alt=" a" />
          </div>
          <p class="pharagraph rc-text">
            La eficiencia y la eficacia de nuestras soluciones, son producto de nuestro compromiso
            con valores sólidos.
          </p>
          <div class="button-container-md">
            <RouterLink to="/how-do-we-do" class="no-deco">
              <ButtonSolid primaryColor="bg-sky">
                Explorar más
                <i class="fi fi-rr-arrow-small-right"></i>
              </ButtonSolid>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="side-b">
        <div class="items-sec">
          <div class="item" @mouseenter="how_do.item_1 = true" @mouseleave="how_do.item_1 = false">
            <div class="icon-cont">
              <i class="fi fi-rr-case-study icon"></i>
              <div class="circle-1"></div>
              <div class="circle-2" style="background-color: #aceeb7"></div>
            </div>
            <div class="text-cont">
              <h3 class="title rc-text">Análisis de requerimientos requerimientos</h3>

              <p :class="['p', { 'p--visible': how_do.item_1 }]" class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam placeat modi accusamus
                eveniet numquam cupiditate!
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
              <h3 class="title rc-text">Diseño y arquitectura de la solución</h3>
              <p :class="['p', { 'p--visible': how_do.item_2 }]" class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam placeat modi accusamus
                eveniet numquam cupiditate!
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
              <h3 class="title rc-text">Desarrollo y codificación de la solución</h3>
              <p :class="['p', { 'p--visible': how_do.item_3 }]" class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam placeat modi accusamus
                eveniet numquam cupiditate!
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
              <h3 class="title rc-text">Pruebas de calidad</h3>
              <p :class="['p', { 'p--visible': how_do.item_4 }]" class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam placeat modi accusamus
                eveniet numquam cupiditate!
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
              <h3 class="title rc-text">Despliegue e implementación</h3>
              <p :class="['p', { 'p--visible': how_do.item_5 }]" class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam placeat modi accusamus
                eveniet numquam cupiditate!
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
              <h3 class="title rc-text">Mantenimiento y soporte</h3>
              <p :class="['p', { 'p--visible': how_do.item_6 }]" class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam placeat modi accusamus
                eveniet numquam cupiditate!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="button-container-mb">
        <RouterLink to="/how-we-do">
          <ButtonItem>Conoce más</ButtonItem>
        </RouterLink>
      </div>
    </div>

    <!--DO YOU HAVE A PROJECT IN MIND?-->
    <div class="project-section">
      <div class="info">
        <h2 class="title rc-title text-white">¿TIENES UN PROYECTO EN MENTE?</h2>
        <p class="pharagraph">
          Cuentanos tu idea, nosotros la perfeccionamos en tiempo y espacio. Existe un contexto en
          el que todo es posible y nosotros sabemos hacerlo.
        </p>
        <RouterLink to="/contact-us" class="no-deco">
          <ButtonSolid primaryColor="bg-sky">
            Explorar más
            <i class="fi fi-rr-arrow-small-right"></i>
          </ButtonSolid>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/sections/home-section.scss';
@import '@/assets/styles/variables.scss';
</style>
