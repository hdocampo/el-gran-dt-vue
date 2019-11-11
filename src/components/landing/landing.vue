<template>
  <div>
    
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
