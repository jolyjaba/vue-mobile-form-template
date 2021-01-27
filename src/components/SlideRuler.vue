<template>
  <div class="slide-ruler"></div>
</template>

<script>
import SlideRuler from "slide-ruler";
export default {
  props: {
    endWeight: Number,
    startWeight: Number,
    selectedWeight: Number
  },
  mounted() {
    this._renderSlideRuler();
  },
  methods: {
    _renderSlideRuler() {
      return new SlideRuler({
        el: this.$el,
        maxValue: this.endWeight,
        minValue: this.startWeight,
        currentValue: this.selectedWeight,
        handleValue: this.handleValue,
        precision: 1,
        divide: 8,
        canvasWidth: 375,
        canvasHeight: 140,
        heightDecimal: 80,
        heightDigit: 40,
        lineWidth: 1,
        fontSize: 24,
        fontColor: "#2D3142",
        fontMarginTop: 90,
        colorDecimal: "#D6D9E0",
        colorDigit: "#D6D9E0"
      });
    },

    handleValue(value) {
      this.$emit("changeValue", value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
