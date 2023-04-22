<template>
	<div class="v-select">
		<div @click="areOptionsVisible = !areOptionsVisible" class="title"> <BaseIcon name="website" wh="20"/> <span>{{ selected }}</span></div>
		<transition
		enter-active-class="enter-active"
		enter-from-class="enter-from"
		enter-to-class="enter-to"
		leave-active-class="leave-active"
		leave-from-class="leave-from"
		leave-to-class="leave-to"
		>
		<ul class="options" v-if="areOptionsVisible">
			<li v-for="option in options" :key="option.value" @click="selectOption(option)">
				{{ option.name }}
			</li>
		</ul>
		</transition>
	</div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
    props: {
        options: {
            type: Array,
            default() {
                return [];
            }
        },
        selected: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            areOptionsVisible: false,
        };
    },
    methods: {
        selectOption(option) {
            this.$emit("select", option);
            if (option.value === 1) {
                this.$store.commit("setLang", true);
            }
            else {
                this.$store.commit("setLang", false);
            }
            if (location.hash !== "#/" && location.hash !== "#/contact") {
                location.reload();
            }
            this.areOptionsVisible = false;
        },
        hideSelect() {
            this.areOptionsVisible = false;
        }
    },
    mounted() {
        window.addEventListener("click", event => {
            if (!this.$el.contains(event.target)) {
                this.areOptionsVisible = false;
            }
        });
    },
    beforeMount() {
        document.removeEventListener("click", this.hideSelect);
    },
    components: { BaseIcon }
}
</script>
<style scoped>
.v-select {
	width: 120px;
	margin: 10px auto;
	cursor: pointer;
	user-select: none;
}
.title{
	border: 1px solid #aeaeae;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
}
.v-select li{
	transition: all 0.1s ease 0s;
	margin: 0;
	list-style: none;
	color: white;
	text-align: center;	
}
.v-select li:hover{
	background: #e7e7e7e3;
	color: rgba(0, 0, 0, 0.973);
}
.options{
	border: 1px solid #aeaeae;
	position: absolute;
	top: 35px;
	width: 100%;
	background-color: rgba(31, 28, 28, 0.979);
	/* border-radius: 5px; */
}
.enter-active {
	transition: all 0.3s ease 0s;
}
.enter-from {
	opacity: 0;
}
.enter-to {
	opacity: 1;
}
.leave-active {
	transition: all 0.3s ease 0s;
}
.leave-from {
	opacity: 1;
}
.leave-to {
	opacity: 0;
}
</style>