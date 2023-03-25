<template>
	<div class="tooltip-container" @mouseenter="showTooltip" @mouseleave="hideTooltip">
	  <slot></slot>
	  <div v-if="isTooltipVisible" class="tooltip" :style="tooltipStyle" ref="tooltip">
		 <div class="tooltip-arrow"></div>
		 <div class="tooltip-content">{{ tooltip }}</div>
	  </div>
	</div>
 </template>
 <script>
 export default {
	data() {
	  return {
		 isTooltipVisible: false,
		 targetRect: null,
	  };
	},
	props: {
	  tooltip: {
		 type: String,
		 required: true,
	  },
	},
	methods: {
	  showTooltip(event) {
		 this.isTooltipVisible = true;
		 this.targetRect = event.target.getBoundingClientRect();
	  },
	  hideTooltip() {
		 this.isTooltipVisible = false;
	  },
	},
	computed: {
	  tooltipStyle() {
		 if (this.targetRect && this.$refs.tooltip) {
			return {
			  top: this.targetRect.top - this.$refs.tooltip.offsetHeight - 10 + "px",
			  left:
				 this.targetRect.left +
				 this.targetRect.width / 2 -
				 this.$refs.tooltip.offsetWidth / 2 
				 + "px",
			};
		 } else {
			return {};
		 }
	  },
	},
 };
 </script>
 <style scoped>
 .tooltip-container {
	position: relative;
 }
 
 .tooltip {
	position: absolute;
	border-radius: 5px;
	padding: 8px 16px;
	background-color: rgba(0, 0, 0, 0.781);
	color: rgba(255, 255, 255, 0.932);
	z-index: 99;
	white-space: nowrap;
	pointer-events: none;
	top: -100%;
	left: 50%;
	transform: translate(-50%, -10px);
 }
 
 .tooltip-arrow {
	position: absolute;
	width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 8px solid rgba(0, 0, 0, 0.87);
	top: 100%;
	left: 50%;
	transform: rotate(180deg);
	transform: translate(-50%, 0);
 }
 
 .tooltip-content {
	margin-bottom: 4px;
 }
 </style>