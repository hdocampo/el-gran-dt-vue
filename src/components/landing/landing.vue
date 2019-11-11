<template>
  <div>
    <b-jumbotron>
      <template slot="header">{{ title }}</template>

      <template slot="lead">
        {{ lead }}
      </template>

      <hr class="my-4" />

      <b-button :variant="button.class" :href="button.url"> {{ button.text }} </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: this.mainMessage || 'BootstrapVue',
            lead: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
            button: {
                text: this.buttonText || 'Start now!',
                class: this.buttonClass || 'primary',
                url: this.buttonUrl
            }
        }
    },
    props: {
        mainMessage: String,
        buttonUrl: String,
        buttonText: String,
        buttonClass: String
    }
}
</script>
