<template>
  <div>
    <b-form @submit @reset v-if="show">
      <b-form-group
        v-for="formInput in textFieldList"
        :key="formInput.index"
        :id="formInput.name"
        :label="formInput.label"
        :label-for="formInput.index"
        :description="formInput.description"
      >
        <b-form-input
          :id="formInput.name"
          :value="formInput.value"
          :type="formInput.type"
          :required="formInput.required"
          :placeholder="formInput.placeholder"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        v-for="formSelect in selectFieldList"
        :key="formSelect.index"
        :id="formSelect.name"
        :label="formSelect.label"
        :label-for="formSelect.index"
        :description="formSelect.description"
      >
        <b-form-select
          :id="formSelect.name"
          :options="formSelect.options"
          :required="formSelect.required"
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" 
        variant="primary"
        v-if="form.length">
        Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: this.showForm,
      form: this.formData
    };
  },
  props: {
    showForm: Boolean,
    formData: Array
  },
  computed: {
    textFieldList() {
      return this.form.filter(itemForm => {
        return itemForm.type !== "select";
      });
    },
    selectFieldList() {
      const selectFields = this.form.filter(itemForm => {
        return itemForm.type === "select" ? itemForm.options : null;
      });
      return selectFields;
    }
  }
};
</script>
