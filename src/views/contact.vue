<template>
  <div>
    <h1>Contact us</h1>
    <contact-form :showForm="true" :formData="formData" />
  </div>
</template>

<script>
import contactForm from "../components/contact-form/contact-form.vue";
export default {
  data() {
    return {
      formData: [
        {
          value: "",
          name: "name",
          placeholder: "Please provide us your name",
          description: "We swear we won't tell nobody about you",
          label: "Your Name",
          type: "text",
          required: true
        },
        {
          value: "",
          name: "email",
          placeholder: "Please tell us your e-mail",
          description: "Don't use hotmail fields!",
          label: "Your e-mail",
          type: "email",
          required: true
        },
        {
          value: "",
          name: "age",
          placeholder: "How old are you?",
          description: "Please input your age",
          label: "Your age",
          type: "number",
          required: true
        },
        {
          value: "",
          name: "country",
          placeholder: "Select your country",
          label: "Your country",
          type: "select",
          required: true,
          options: [
            {
              text: "Select One",
              value: null,
              selected: true
            },
            "Uruguay",
            "Argentina",
            "Brazil",
            "Cuba"
          ]
        }
      ]
    };
  },
  components: {
    contactForm
  }
};
</script>