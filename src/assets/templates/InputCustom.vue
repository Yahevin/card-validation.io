<template>
	<div class="field" :class="selector">
        <input class="field__input"
               v-model="input"
               :placeholder="placeholder"
               :type="type"
               :name="name"
               :id="inputId">
        <label class="field__label"
               :for="inputId">
            {{ placeholder }}
        </label>
        <div class="field__clear"
                @click="input = null">
            <svg v-svg symbol="field-clear" class="svg"></svg>
        </div>
    </div>
</template>

<script>
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
		        input: null,
            }
        },
        computed: {
		    inputId: ()=> {
                return name + '-id';
            }
        }
	}
</script>

<style scoped>

</style>
