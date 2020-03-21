<template>
	<div class="field" :class="selector">
        <input class="field__input"
               autocomplete="off"
               v-model="input"
               :placeholder="placeholder"
               :class="filled"
               :type="type"
               :name="name"
               :id="inputId">
        <label class="field__label"
               :for="inputId">
            {{ placeholder }}
        </label>
        <div class="field__clear"
                @click="input = ''">
            <svg v-svg symbol="field-clear" class="svg"></svg>
        </div>
    </div>
</template>

<script>
    import {store} from '@/assets/js/store/index';

	export default {
		name: "InputCustom",
        props: {
            name: {
                type: String,
                required: true,
            },
            selector: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                default: 'text',
            },
        },
        mounted() {
        },
        data() {
		    return {
                filledLength: null,
            }
        },
        store,
        computed: {
          input: {
              get() {
                  let newVal = this.$store.getters[this.name];

                  this.filledLength = newVal.toString().length;
                  return newVal;
              },
              set(val) {
                  this.$store.dispatch(this.name, val);
              }
          },
          inputId() {
              return this.name + '-id';
          },
          filled() {
              return this.filledLength > 0 ? 'field__input--filled' : '';
          }
        }
	}
</script>

<style scoped>

</style>
