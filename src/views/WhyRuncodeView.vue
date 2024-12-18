<script setup>
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import ButtonOutline from '@/components/Buttons/ButtonOutline.vue'
import SectionRC from '@/components/Utils/SectionRC.vue'
</script>

<template>
  <div class="why-runcode-container">
    <div class="land-section">
      <SectionRC>
        <div class="info-container">
          <div class="rc-title text-white">
            ¿POR QUE ELEGIR A RUN<span class="rc-title text-sky">CODE</span>?
          </div>
          <div class="container">
            <div class="description">
              La eficiencia y la eficacia de nuestras soluciones, son producto de nuestro compromiso
              con valores sólidos corporativos y con cada objetivo de nuestros clientes.
            </div>
            <div class="buttons-container">
              <ButtonOutline @click="scrollLeft" primaryColor="sky" textColor="white">
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

              <RouterLink to="/why-us" y class="no-deco">
                <ButtonSolid @click="scrollRight" primaryColor="sky">
                  Siguiente
                  <i class="fi fi-rr-arrow-small-right"></i>
                </ButtonSolid>
              </RouterLink>
            </div>
          </div>
        </div>
      </SectionRC>
    </div>

    <SectionRC bg-class="features-section" class="content">
      <article class="description-container">
        <div class="img-container">
          <img src="@/assets/images/why-runcode/vision.png" alt="" />
        </div>

        <div>
          <p class="rc-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro maiores numquam quae
            odit dolorum sit quaerat laboriosam sunt esse accusamus aut nemo aspernatur ut rerum
            maxime deleniti, odio, fuga necessitatibus.
          </p>

          <p class="rc-text">
            dolor sit amet consectetur adipisicing elit. Porro maiores numquam quae odit dolorum sit
            quaerat laboriosam sunt esse accusamus aut nemo aspernatur ut rerum maxime deleniti,
            odio, fuga necessitatibus.
          </p>
        </div>
      </article>
      <div class="cards-container">
        <div class="container">
          <div class="card" style="background-color: #35bb6d1a">
            <div class="top">
              <div class="icon" style="background-color: #35bb6d">
                <i class="fi fi-rr-compass-alt i" style="color: white"></i>
              </div>
              <div class="title">Orientacion al cliente</div>
            </div>
            <div class="rc-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum nemo officiis
              aperiam quae amet itaque aut tempora illum accusantium?
            </div>

            <div class="container">
              <div class="features-container">
                <div class="feature">
                  <div class="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                        fill="#35bb6d"
                        fondo="si"
                      />
                      <path
                        d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="rc-text-light">Servicio adaptable a sus operaciones.</div>
                </div>
                <div class="feature">
                  <div class="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                        fill="#35bb6d"
                        fondo="si"
                      />
                      <path
                        d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="rc-text-light">Servicio adaptable a sus operaciones.</div>
                </div>
              </div>
              <div class="button-container">
                <button class="buttonsa" style="border: 2px solid #35bb6d; color: #35bb6d">
                  <i class="fi fi-rr-angle-small-down icon"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="card" style="background-color: #2e81ed1a">
            <div class="top">
              <div class="icon" style="background-color: #2f80ed">
                <i class="fi-rr-chart-mixed-up-circle-dollar i" style="color: white"></i>
              </div>
              <div class="title">Proyección</div>
            </div>
            <div class="rc-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum nemo officiis
              aperiam quae amet itaque aut tempora illum accusantium?
            </div>

            <div class="container">
              <div class="features-container">
                <div class="feature">
                  <div class="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                        fill="#2F80ED"
                        fondo="si"
                      />
                      <path
                        d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="rc-text-light">Servicio adaptable a sus operaciones.</div>
                </div>
                <div class="feature">
                  <div class="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                        fill="#2F80ED"
                        fondo="si"
                      />
                      <path
                        d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="rc-text-light">Servicio adaptable a sus operaciones.</div>
                </div>
              </div>
              <div class="button-container">
                <button class="buttonsa" style="border: 2px solid #2f80ed; color: #2f80ed">
                  <i class="fi fi-rr-angle-small-down icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card" style="background-color: #7c68ff1a">
            <div class="top">
              <div class="icon" style="background-color: #7c68ff">
                <i class="fi fi-rr-assessment i" style="color: white"></i>
              </div>
              <div class="title">Transparencia</div>
            </div>
            <div class="rc-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum nemo officiis
              aperiam quae amet itaque aut tempora illum accusantium?
            </div>

            <div class="container">
              <div class="features-container">
                <div class="feature">
                  <div class="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                        fill="#7C68FF"
                        fondo="si"
                      />
                      <path
                        d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="rc-text-light">Servicio adaptable a sus operaciones.</div>
                </div>
                <div class="feature">
                  <div class="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                        fill="#7C68FF"
                        fondo="si"
                      />
                      <path
                        d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="rc-text-light">Servicio adaptable a sus operaciones.</div>
                </div>
              </div>
              <div class="button-container">
                <button class="buttonsa" style="border: 2px solid #7c68ff; color: #7c68ff">
                  <i class="fi fi-rr-angle-small-down icon"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="card" style="background-color: #ff79791a">
            <div class="top">
              <div class="icon" style="background-color: #ff7979">
                <i class="fi fi-rr-trust-alt i" style="color: white"></i>
              </div>
              <div class="title">Confianza</div>
            </div>
            <div class="rc-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum nemo officiis
              aperiam quae amet itaque aut tempora illum accusantium?
            </div>

            <div class="container">
              <div class="features-container">
                <div class="feature">
                  <div class="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                        fill="#FF7979"
                        fondo="si"
                      />
                      <path
                        d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="rc-text-light">Servicio adaptable a sus operaciones.</div>
                </div>
                <div class="feature">
                  <div class="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                        fill="#FF7979"
                        fondo="si"
                      />
                      <path
                        d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="rc-text-light">Servicio adaptable a sus operaciones.</div>
                </div>
              </div>
              <div class="button-container">
                <button class="buttonsa" style="border: 2px solid #ff7979; color: #ff7979">
                  <i class="fi fi-rr-angle-small-down icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionRC>

    <div class="waranty-section">
      <SectionRC class="first-section">
        <div class="title-mb rc-title">GARANTÍA RUNCODE</div>
        <div class="img-container">
          <img src="@\assets\images\home\why-runcode-mb.png" alt="" />
        </div>
        <div class="content">
          <div class="title-md rc-title">GARANTÍA RUNCODE</div>
          <div class="paragraph rc-text">
            Nuestro compromiso con cada proyecto, nos convierte en una empresa capaz de sostener la
            garantía a través del ciclo de vida de nuestros productos. Nuestro compromiso con cada
            proyecto, nos convierte en una empresa capaz de sostener la garantía a través del ciclo
            de vida de nuestros productos.
          </div>
        </div>
      </SectionRC>

      <SectionRC class="second-section">
        <div class="card-container">
          <div class="card">
            <div class="top-section">
              <div class="title rc-subtitle-2">Soporte Garantizado</div>
            </div>
            <div class="content">
              <div class="img-container">
                <img src="@/assets/images/why-runcode/pl-1.png" alt="land-services" />
              </div>
              <div class="info-container">
                <div class="title-mb rc-subtitle-2">Soporte Garantizado</div>
                <div class="features-container">
                  <div class="item">
                    <div class="icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                          fill="#05c1ff"
                          fondo="si"
                        />
                        <path
                          d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="text rc-text-light">Servicio adaptable a sus operaciones.</div>
                  </div>
                  <div class="item">
                    <div class="icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                          fill="#05c1ff"
                          fondo="si"
                        />
                        <path
                          d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="text rc-text-light">Servicio adaptable a sus operaciones.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paragraph rc-text">
              Transformamos sus procesos de negocio en ventajas competitivas, en alineación con la
              rentabilidad y la eficiencia de sus operaciones. Protegemos su inversión y nos
              preocupamos por los indicadores económicos de su negocio.
            </div>
          </div>
          <div class="card">
            <div class="top-section">
              <div class="title rc-subtitle-2">Soporte Garantizado</div>
            </div>
            <div class="content">
              <div class="img-container">
                <img src="@/assets/images/why-runcode/pl-1.png" alt="land-services" />
              </div>
              <div class="info-container">
                <div class="title-mb rc-subtitle-2">Soporte Garantizado</div>
                <div class="features-container">
                  <div class="item">
                    <div class="icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                          fill="#05c1ff"
                          fondo="si"
                        />
                        <path
                          d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="text rc-text-light">Servicio adaptable a sus operaciones.</div>
                  </div>
                  <div class="item">
                    <div class="icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                          fill="#05c1ff"
                          fondo="si"
                        />
                        <path
                          d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="text rc-text-light">Servicio adaptable a sus operaciones.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paragraph rc-text">
              Transformamos sus procesos de negocio en ventajas competitivas, en alineación con la
              rentabilidad y la eficiencia de sus operaciones. Protegemos su inversión y nos
              preocupamos por los indicadores económicos de su negocio.
            </div>
          </div>
          <div class="card">
            <div class="top-section">
              <div class="title rc-subtitle-2">SOPORTE GARANTIZADO</div>
            </div>
            <div class="content">
              <div class="img-container">
                <img src="@/assets/images/why-runcode/pl-1.png" alt="land-services" />
              </div>
              <div class="info-container">
                <div class="title-mb rc-subtitle-2">Soporte Garantizad</div>
                <div class="features-container">
                  <div class="item">
                    <div class="icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                          fill="#05c1ff"
                          fondo="si"
                        />
                        <path
                          d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="text rc-text-light">Servicio adaptable a sus operaciones.</div>
                  </div>
                  <div class="item">
                    <div class="icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.8947C8.8995 11.8947 11.25 9.54422 11.25 6.64472C11.25 3.74523 8.8995 1.39472 6 1.39472C3.10051 1.39472 0.75 3.74523 0.75 6.64472C0.75 9.54422 3.10051 11.8947 6 11.8947Z"
                          fill="#05c1ff"
                          fondo="si"
                        />
                        <path
                          d="M8.6499 4.29472L5.2499 7.69472L3.8499 6.29472L3.1499 6.99472L5.2499 9.09472L9.3499 4.99472L8.6499 4.29472Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="text rc-text-light">Servicio adaptable a sus operaciones.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paragraph rc-text">
              Transformamos sus procesos de negocio en ventajas competitivas, en alineación con la
              rentabilidad y la eficiencia de sus operaciones. Protegemos su inversión y nos
              preocupamos por los indicadores económicos de su negocio.
            </div>
          </div>
        </div>
      </SectionRC>
    </div>

    <div class="contact-section">
      <SectionRC class="content">
        <div class="info-container">
          <div class="title rc-title">¿Empezamos?</div>
          <div class="paragraph rc-text text-white">
            Creamos productos y servicios adaptables a sus operaciones. Centralizamos nuestros
            proyectos de desarrollo, en una idea de negocio.Sabemos que su empresa, necesita un
            tratamiento especial y personalizado
          </div>
          <div class="button-container">
            <RouterLink to="/contact" class="no-deco">
              <ButtonSolid primaryColor="sky">
                <i class="fi fi-rr-envelope"></i>
                Contáctanos
              </ButtonSolid>
            </RouterLink>
          </div>
        </div>
        <div class="img-container">
          <img src="@/assets/images/why-runcode/contact.svg" alt="" />
        </div>
      </SectionRC>
    </div>
  </div>
</template>

<style lang="scss">
@import url('@/assets/styles/sections/why-section.scss');
</style>
