<template>
    <ValidationProvider
            style="display: block"
            :name="fieldName"
            :rules="rules"
            :class="selector"
            :vid="vid"
            v-slot="{ classes }">
	    <div class="field">
            <input class="field__input"
                   autocomplete="off"
                   v-model="input"
                   v-mask="mask"
                   @input="justTry(input)"
                   :placeholder="placeholder"
                   :class="filled"
                   :type="type"
                   :name="name"
                   :id="inputId">
            <label class="field__label"
                   :class="classes"
                   :for="inputId">
                {{ placeholder }}
            </label>
            <div class="field__clear"
                    @click="input = ''">
                <svg v-svg symbol="field-clear" class="svg"></svg>
            </div>
        </div>
    </ValidationProvider>
</template>

<script>
    import {store} from '@/assets/js/store/index';
    import { ValidationProvider } from 'vee-validate';

	export default {
		name: "InputCustom",
        components: {
            ValidationProvider,
        },
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
            mask: {
                type: String,
                default: '',
            },
            rules: {
                type: String,
                default: '',
            },
            vid: {
                type: String,
                default: null,
            },
        },
        mounted() {
        },
        data() {
		    return {
                filledLength: null,
                buffer: null,
            }
        },
        store,
        computed: {
		  fieldName() {
		      return this.placeholder.toLowerCase();
          },
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
          },
          monthValidate() {
             return this.name === 'month';
          },
        },
        methods: {
            justTry(val) {
                if(this.monthValidate) {
                    const value = parseInt (val);

                    if (value > 0 && value < 10 && val.indexOf ('0') !== 0) {
                        this.input = '0' + val;
                        return;
                    }
                    if (value > 12) {
                        const last = val.slice (-1);
                        if(last !== '0') {
                            this.input = '0' + val.slice (-1);
                            return;
                        } else  {
                            this.input = '0';
                            return;
                        }
                    }
                    if (val.slice (0, 2) === '01' && val.length === 3) {
                        this.input = val.slice (1, 3);
                    } else if(value === 0) {
                        this.input = 0;
                    } else {
                        this.input = val.slice (0, 2);
                    }
                }
            }
        }
	}
</script>

<style scoped>

</style>
