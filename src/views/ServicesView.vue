<script setup>
import ButtonOutline from '@/components/Buttons/ButtonOutline.vue'
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import SectionRC from '@/components/Utils/SectionRC.vue'
import ServiceCard from '@/components/Cards/ServiceCard.vue'

import serviceImg1 from '@/assets/images/services/service-1.png' // Importar la imagen directamente
import serviceImg2 from '@/assets/images/services/service-2.png' // Importar la imagen directamente
import serviceImg3 from '@/assets/images/services/service-3.png' // Importar la imagen directamente
import serviceImg4 from '@/assets/images/services/service-4.png' // Importar la imagen directamente
import serviceImg5 from '@/assets/images/services/service-5.png' // Importar la imagen directamente
import serviceImg6 from '@/assets/images/services/service-6.png' // Importar la imagen directamente+

//import okicon from '@/assets/images/items/okicon.vue
</script>

<template>
  <div class="main-services">
    <!--LAND-->
    <div class="land">
      <SectionRC class="content">
        <div class="first-section">
          <div class="title rc-title">
            CONOCE NUESTROS
            <div class="rc-title" style="color: skyblue">SERVICIOS</div>
          </div>
          <div class="img-container-mb" style="background-color: red">
            <img src="@/assets/images/services/land-img.png" alt="land-services" />
          </div>
          <div class="info-container">
            <div class="paragraph">
              Transformamos sus ideas en realidad, creando un código robusto y altamente
              personalizado que no solo se adapta a las necesidades específicas de su negocio, sino
              que también optimiza cada uno de sus procesos y operaciones.
            </div>
            <div class="buttons-container">
              <RouterLink to="/contact-us" class="no-deco">
                <ButtonSolid primaryColor="sky">
                  Explorar
                  <i class="fi fi-rr-arrow-small-right"></i>
                </ButtonSolid>
              </RouterLink>
              <RouterLink to="/services" class="no-deco">
                <ButtonOutline primaryColor="sky" textColor="white"> Ver más </ButtonOutline>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="img-container">
          <img src="@/assets/images/services/land-img.png" alt="land-services" /></div
      ></SectionRC>
    </div>
    <!--CARDS SERVICES-->
    <SectionRC class="services-container">
      <ServiceCard
        :imgUrl="serviceImg1"
        primaryColor="#2F80ED"
        secondaryColor="#F0F8FF"
        orientation="row-reverse"
        id="service-1"
      >
        <h2 class="title">DESARROLLO WEB</h2>
        <p class="description">
          Creamos sitios web modernos, funcionales y adaptados a las necesidades de tu negocio,
          asegurando una experiencia de usuario óptima.
        </p>

        <ul>
          <li>Compatibilidad multiplataforma (iOS, Android, Windows)</li>
          <li>Interfaces intuitivas y amigables para el usuario</li>
          <li>Integración con sistemas internos y externos</li>
          <li>Soporte y mantenimiento continuos</li>
        </ul>
        <article>
          <p>
            Nuestro objetivo es crear plataformas que no solo destaquen visualmente, sino que
            también proporcionen una experiencia de usuario excepcional. Ya sea un sitio
            corporativo, una tienda en línea o una solución única, integramos las últimas
            tecnologías para garantizar rendimiento, seguridad y escalabilidad
          </p>
          <p>
            Entendemos que un sitio web es más que una presencia en línea; es una herramienta clave
            para conectar con tus clientes, fortalecer tu marca y alcanzar tus objetivos
            empresariales. Por eso, nuestro enfoque combina diseño intuitivo, funcionalidades
            avanzadas e integración con herramientas de marketing y análisis para maximizar el
            impacto de tu plataforma digital.
          </p>
        </article>
      </ServiceCard>

      <div class="container">
        <ServiceCard
          :imgUrl="serviceImg2"
          primaryColor="#4CAF50"
          secondaryColor="#4caf4f0d"
          orientation="column"
        >
          <h2 class="title">DESARROLLO DE APLICACIONES</h2>
          <p class="description">
            Diseñamos y desarrollamos aplicaciones móviles y de escritorio personalizadas para
            potenciar tus operaciones y conectar con tus usuarios.
          </p>

          <ul>
            <li>Servicio adaptable a sus operaciones.</li>
            <li>Servicio adaptable a sus operaciones.</li>
            <li>Servicio adaptable a sus operaciones.</li>
          </ul>
          <article>
            <p>
              Nuestros productos robustos, escalables y seguros, están diseñados para transformar la
              manera en que interactúas con tus clientes y optimizas tus procesos internos. Cada
              desarrollo es completamente personalizado, pensado para resolver los desafíos
              específicos de tu negocio mientras ofrece una experiencia de usuario fluida y moderna.
            </p>
            <p>
              Nuestro enfoque combina diseño intuitivo, integración con sistemas empresariales y el
              uso de tecnologías avanzadas para garantizar un producto que evolucione con las
              necesidades de tu empresa.
            </p>
          </article>
        </ServiceCard>
        <ServiceCard
          :imgUrl="serviceImg3"
          primaryColor="#7C68FF"
          secondaryColor="#7a66ff0d"
          orientation="column"
        >
          <h2 class="title">SERVICIOS SAP</h2>
          <p class="description">
            Ofrecemos soluciones SAP que optimizan la gestión empresarial, ayudando a integrar y
            automatizar procesos clave.
          </p>

          <ul>
            <li>Implementación y personalización de módulos SAP</li>
            <li>Integración con sistemas heredados y externos</li>
            <li>Capacitación para equipos internos</li>
            <li>Soporte técnico especializado y continuo</li>
          </ul>
          <article>
            <p>
              En RUNCODE, ofrecemos soluciones SAP que impulsan la transformación digital de tu
              empresa, integrando y automatizando procesos clave para optimizar la gestión de
              recursos y operaciones. Adaptamos cada implementación a las necesidades específicas de
              tu negocio, asegurando que obtengas el máximo valor de esta potente herramienta
              empresarial.
            </p>
            <p>
              Nuestra experiencia incluye la personalización de módulos SAP, la integración con
              sistemas heredados y externos, y la capacitación a tus equipos para que aprovechen al
              máximo la plataforma. Con un enfoque en la escalabilidad y la eficiencia, nuestras
              soluciones SAP están diseñadas para crecer junto a tu empresa y fortalecer tu ventaja
              competitiva.
            </p>
          </article>
        </ServiceCard>
      </div>

      <ServiceCard
        :imgUrl="serviceImg4"
        primaryColor="#FFCC68"
        secondaryColor="#ffcd680d"
        orientation="row"
      >
        <h2 class="title">CONSULTORÍAS TIC</h2>
        <p class="description">
          Asesoramos estratégicamente a empresas para implementar soluciones tecnológicas que
          mejoren su eficiencia operativa.
        </p>

        <ul>
          <li>Diagnóstico de necesidades tecnológicas empresariales</li>
          <li>Elaboración de estrategias personalizadas</li>
          <li>Optimización de recursos tecnológicos existentes</li>
          <li>Acompañamiento en la implementación</li>
        </ul>
        <article>
          <p>
            Entendemos que cada empresa enfrenta desafíos tecnológicos únicos. Por eso, ofrecemos
            servicios de consultoría TIC personalizados, diseñados para identificar las
            oportunidades y necesidades específicas de tu negocio. Nuestro enfoque estratégico te
            ayuda a implementar soluciones tecnológicas que optimicen tus operaciones y potencien
            tus resultados.
          </p>
          <p>
            Nuestra metodología incluye un análisis profundo de tu infraestructura tecnológica, la
            elaboración de estrategias personalizadas y el acompañamiento en su implementación.
            Trabajamos contigo para garantizar que las soluciones adoptadas sean sostenibles,
            escalables y alineadas con los objetivos estratégicos de tu empresa.
          </p>
        </article>
      </ServiceCard>
      <div class="container">
        <ServiceCard
          :imgUrl="serviceImg5"
          primaryColor="#FF6868"
          secondaryColor="#ff66660d"
          orientation="column"
        >
          <h2 class="title">VIGILANCIA Y TRANSFERENCIA ELECTRÓNICA</h2>
          <p class="description">
            Ayudamos a las empresas a mantenerse a la vanguardia identificando y adoptando
            tecnologías emergentes que aporten valor.
          </p>

          <ul>
            <li>Análisis de tendencias tecnológicas globales</li>
            <li>Identificación de oportunidades de innovación</li>
            <li>Transferencia de conocimientos tecnológicos clave</li>
            <li>Creación de roadmaps para la implementación</li>
          </ul>
          <article>
            <p>
              Ayudamos a las empresas a mantenerse al día en un entorno tecnológico en constante
              evolución. Nuestro servicio de vigilancia tecnológica identifica y analiza tendencias
              emergentes, brindándote información estratégica para adoptar soluciones innovadoras
              que impulsen tu negocio.
            </p>
            <p>
              Además, facilitamos la transferencia de tecnologías avanzadas, asegurándonos de que
              las herramientas implementadas se adapten perfectamente a tus necesidades y objetivos.
              Con nuestra experiencia, puedes anticiparte a los cambios del mercado y garantizar que
              tu empresa siempre esté a la vanguardia de la innovación tecnológica.
            </p>
          </article>
        </ServiceCard>
        <ServiceCard
          :imgUrl="serviceImg6"
          primaryColor="#60BFFF"
          secondaryColor="#61c0ff0d"
          orientation="column"
          :imgRight="false"
        >
          <h2 class="title">AUTOMATIZACIÓN DE PROCESOS EMPRESARIALES</h2>
          <p class="description">
            Desarrollamos sistemas personalizados para automatizar tareas repetitivas, mejorando la
            productividad y reduciendo costos operativos.
          </p>

          <ul>
            <li>Integración con sistemas ERP, CRM y más</li>
            <li>Reducción de errores y optimización del tiempo</li>
            <li>Interfaces personalizadas para el flujo de trabajo</li>
            <li>Escalabilidad para crecer con tu negocio</li>
          </ul>
          <article>
            <p>
              Transformamos tus operaciones con soluciones diseñadas para optimizar la eficiencia,
              reducir errores y mejorar la productividad. El enfoque está en simplificar los flujos
              de trabajo, permitiéndote concentrarte en las actividades estratégicas que impulsan el
              valor de tu negocio.
            </p>
            <p>
              Integrando herramientas como ERP, CRM y sistemas clave, adaptamos cada solución a tus
              procesos específicos. Con prioridad en la escalabilidad y la innovación, garantizamos
              que tu empresa mantenga su competitividad en un entorno en constante evolución.
            </p>
          </article>
        </ServiceCard>
      </div>
    </SectionRC>
  </div>
</template>

<style lang="scss">
@import url('@/assets/styles/sections/services-section.scss');
@import url('@/assets/styles/variables.scss');
</style>
