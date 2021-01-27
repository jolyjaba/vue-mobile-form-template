<template>
  <div v-if="!isLargeCard" class="large_radio_btn">
    <input
      v-model="getSelected"
      type="radio"
      :name="name"
      :value="item.value"
      :id="`large_radio-${index}-${item.value}`"
    />
    <label
      class="large_radio w100vw"
      :for="`large_radio-${index}-${item.value}`"
    >
      <span class="check_icon check_icon--blue">
        <img src="@/assets/svg/check-icon.svg" alt="check-icon" />
      </span>
      <p
        :class="[
          'radio__title',
          { 'diet-card': name === 'dietType' || name === 'healthGoals' }
        ]"
      >
        {{ item.text }}
      </p>
    </label>
  </div>
  <div v-else class="large_radio_btn">
    <input
      v-model="getSelected"
      type="radio"
      :name="name"
      :value="item.value"
      :id="`large_radio-${index}-${item.value}`"
    />
    <label class="large_radio" :for="`large_radio-${index}-${item.value}`">
      <img
        class="radio__icon"
        :src="require(`@/assets${item.src}`)"
        alt="male-icon"
      />
      <span class="check_icon check_icon--blue">
        <img src="@/assets/svg/check-icon.svg" alt="check-icon" />
      </span>
      <p class="radio__title">{{ item.text }}</p>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number,
    name: String,
    selected: String,
    isLargeCard: {
      reqired: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    getSelected: {
      get() {
        return this.selected;
      },
      set(value) {
        this.$emit("changeValue", value);
      }
    }
  }
};
</script>
