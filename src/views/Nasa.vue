<script setup>
import {useStore} from "vuex";
import {computed, onMounted, reactive, ref} from "vue";

const store = useStore()
const time = ref(Math.floor(Math.random() * 4501))
const nasa = computed(() => {
      return {
        url: store.getters['nasa/hdurl'],
        video: store.getters['nasa/url'],
        title: store.getters['nasa/title'],
        date: store.getters['nasa/date'],
        media_type: store.getters['nasa/media_type'],
      }
    }
)

const activeTab = ref('Uno')
const start = async () => {
  await store.dispatch('nasa/getNasa')
}

const setActiveTab = (tab) => {
  activeTab.value = tab;
}

    onMounted(() => {
      start()
    })

</script>

<template>

  <div class="container p-5 ">
    <!--    <button class="button is-link is-outlined " style="width: 100%" v-on:click="start">Ver</button>-->

    <!--    <audio src="/music.m4a" autoplay></audio>-->
    <div class="card ">
      <div class="card-header">
        <div class="card-header-title">
          <h1 style="font-size: 25px; font-weight: 700;">Nuestra Nasa: {{ nasa.title }}</h1>
        </div>

      </div>
      <div class="">
        <iframe height="60px" width="100%"
                :src="`https://www.youtube.com/embed/IqDzJbrPxYA?autoplay=1&controls=0&start=${time}`"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen @load="carga"></iframe>
      </div>
      <div class="container">
        <div class="tabs">
          <ul>
          <li :class="{ 'is-active': activeTab === 'Uno' }" @click="setActiveTab('Uno')"><a>Uno</a></li>
          <li :class="{ 'is-active': activeTab === 'Dos' }" @click="setActiveTab('Dos')"><a>Dos</a></li>
          <li :class="{ 'is-active': activeTab === 'Tres' }" @click="setActiveTab('Tres')"><a>Tres</a></li>
          </ul>
        </div>
        <div v-if="activeTab === 'Uno'" class="columns is-centered">
          <div class="column">
            <div class="fb-post"
                 data-href="https://www.facebook.com/carlosbrayan.ramilachorens.5/posts/pfbid02ho64mdvUreH4tAH8kk1xLByW2TfSN38knCQ1erzmzQYYn9A6q5K4jZvhANDEnYC1l"
                 data-width="500" data-show-text="true">
              <blockquote cite="https://www.facebook.com/carlosbrayan.ramilachorens.5/posts/1367031807089309"
                          class="fb-xfbml-parse-ignore">Publicada por <a
                  href="https://www.facebook.com/carlosbrayan.ramilachorens.5">Carlos Brayan Rámila Chorens</a> en&nbsp;<a
                  href="https://www.facebook.com/carlosbrayan.ramilachorens.5/posts/1367031807089309">Miércoles, 2 de
                febrero de 2022</a></blockquote>
            </div>
          </div>
          <div class="column is-centered">
            <div class="fb-post"
                 data-href="https://www.facebook.com/susana.puente.129/posts/pfbid038B97KnEMPMwGhp66ksXLnkwKh7mnV8pgyTydqB6Gg6VqDE3zgMKP2RzjJe9cpgxol"
                 data-show-text="true">
              <blockquote cite="https://www.facebook.com/susana.puente.129/posts/1134343230508761"
                          class="fb-xfbml-parse-ignore"><p>Hoy te deseo lo mejor del mundo, te deseo toda la felicidad
                que emana el universo, deseo que todas tus metas y sueños se...</p>Publicada por <a
                  href="https://www.facebook.com/susana.puente.129">Susana Puente</a> en&nbsp;<a
                  href="https://www.facebook.com/susana.puente.129/posts/1134343230508761">Jueves, 13 de octubre de
                2022</a></blockquote>
            </div>

          </div>
        </div>
        <div v-if="activeTab === 'Dos'" class="columns is-centered">
          <div class="column">
            <div class="fb-post"
                 data-href="https://www.facebook.com/susana.puente.129/posts/pfbid0YLXWQrnh65dJ5TW6B6haxJwU9Cq93fbF36Qy5Jm2mruHC5jUFsTcD5Y2teNdD6nkl"
                 data-show-text="true">
              <blockquote cite="https://www.facebook.com/susana.puente.129/posts/1216213238988426"
                          class="fb-xfbml-parse-ignore"><p>Muchas felicidades amor de mi vida, te amo 😘😘😘😘</p>Publicada
                por <a href="https://www.facebook.com/susana.puente.129">Susana Puente</a> en&nbsp;<a
                    href="https://www.facebook.com/susana.puente.129/posts/1216213238988426">Martes, 14 de febrero de
                  2023</a></blockquote>
            </div>

          </div>
          <div class="column">
            <div class="fb-post"
                 data-href="https://www.facebook.com/photo.php?fbid=962143287728757&amp;set=a.100665877209840&amp;type=3"
                 data-width="500" data-show-text="true">
              <blockquote cite="https://www.facebook.com/susana.puente.129/posts/962143287728757:2267820576699500"
                          class="fb-xfbml-parse-ignore">Publicada por <a
                  href="https://www.facebook.com/susana.puente.129">Susana Puente</a> en&nbsp;<a
                  href="https://www.facebook.com/susana.puente.129/posts/962143287728757:2267820576699500">Sábado, 8 de
                enero de 2022</a></blockquote>
            </div>

          </div>

        </div>
        <div v-if="activeTab === 'Tres'" class="columns is-centered">

          <div class="column">
            <div class="fb-post"
                 data-href="https://www.facebook.com/photo.php?fbid=1087057015237383&amp;set=a.100665877209840&amp;type=3"
                 data-width="500" data-show-text="true">
              <blockquote cite="https://www.facebook.com/susana.puente.129/posts/1087057015237383:1201221307110856"
                          class="fb-xfbml-parse-ignore">Publicada por <a
                  href="https://www.facebook.com/susana.puente.129">Susana Puente</a> en&nbsp;<a
                  href="https://www.facebook.com/susana.puente.129/posts/1087057015237383:1201221307110856">Jueves, 4 de
                agosto de 2022</a></blockquote>
            </div>

          </div>
          <div class="column">
            <div class="fb-post"
                 data-href="https://www.facebook.com/photo/?fbid=1441121399680349&amp;set=pob.100017992831763"
                 data-width="500" data-show-text="true">
              <blockquote cite="https://www.facebook.com/carlosbrayan.ramilachorens.5/posts/1441122526346903"
                          class="fb-xfbml-parse-ignore"><p>Nice Shot Laser Tag</p>Publicada por <a
                  href="https://www.facebook.com/carlosbrayan.ramilachorens.5">Carlos Brayan Rámila Chorens</a> en&nbsp;<a
                  href="https://www.facebook.com/carlosbrayan.ramilachorens.5/posts/1441122526346903">Martes, 24 de mayo
                de 2022</a></blockquote>
            </div>

          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <p class="title is-4">CarSus</p>
            <p class="subtitle is-6">@carlosbrc</p>
          </div>
        </div>

        <div class="content has-text-justified">
          "Mi amor, cada día que pasa nos acerca más, y aunque a veces la distancia pueda separarnos físicamente,
          siempre estaremos mirando hacia el mismo cielo.
          En cada atardecer, en cada amanecer y en cada momento intermedio, sabremos que estamos observando el mismo
          cielo que nos cobija a ambos.
          Por eso, he creado esta web donde puedes ver la foto diaria (TODOS LOS DÍAS SERÁ UNA NUEVA FOTO) del cielo,
          capturada por la NASA, como un recordatorio de que, a pesar de la distancia, estamos conectados por la belleza
          y la grandeza del universo. Además, te encantará saber que cada día la imagen cambiará, mostrándote un nuevo
          pedazo del cielo para que juntos descubramos su infinita variedad y lo hermoso que puede ser. Cada día, al ver
          esta imagen, recuérdame que, aunque estemos separados físicamente, nuestros corazones estarán alineados bajo
          el mismo cielo. Te amo y nos veremos cada día, reflejados en la inmensidad del cosmos."
          <br>

          <time datetime="2016-1-1">{{ nasa.date }}</time>
        </div>
      </div>
      <div class="card-image" v-if="nasa.media_type == 'video'">

        <figure class="image ">
          <iframe width="100%" height="500px" :src="nasa.video" :title="nasa.title"></iframe>
        </figure>
      </div>
      <div class="card-image" v-else>
        <figure class="image is-4by3">
          <img :src="nasa.url" alt="Placeholder image">
        </figure>
      </div>

    </div>


  </div>

</template>

<style scoped>

</style>