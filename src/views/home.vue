<template>
    <div>
        <landing-home 
          :main-message="message"
          :button-url="buttonUrl"
          :button-text="buttonText"
          :button-class="buttonClass"
        />
    </div>
</template>

<script>
    // we can name the module as we want!
    import landingHome from '../components/landing/landing.vue'

    export default {
      data() {
        return {
          message: 'Hello Javascripters of Endava!',
          buttonUrl: '#/products',
          buttonText: 'Let see the products',
          buttonClass: 'success'
        };
      },
      components: {
        landingHome,
      }
    };
</script>