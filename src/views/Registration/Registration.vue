<template>
  <div class="dg gtr-a-1fr-a">
    <div class="df b-b-gray prel">
      <img
        class="p16"
        src="@/assets/svg/back-icon.svg"
        alt="back-icon"
        @click.prevent="prevStep"
      />
      <p class="lh20 pabs pabs-center fs17 l-s03 fw600">{{ getStep }}</p>
    </div>
    <div class="df fdc aic">
      <p :class="classes">{{ getTitle }}</p>
      <p v-if="+$route.params.step === 9" class="sub-title">
        Можно выбрать несколько целей
      </p>
      <div class="p0--16" v-if="showFirstForm">
        <input
          v-model="firstName"
          class="input"
          type="text"
          :placeholder="getFirstPlaceholder"
        />
        <input
          v-model="lastName"
          class="input"
          type="text"
          :placeholder="getSecondPlaceholder"
        />
        <input
          v-model="patronymic"
          class="input"
          type="text"
          :placeholder="getThirdPlaceholder"
        />
        <button class="button fs17 mt8" @click.prevent="nextStep">
          Далее
        </button>
      </div>
      <div class="p0--16" v-if="showSecondForm">
        <input
          v-model="email"
          class="input"
          type="text"
          :placeholder="getEmail"
        />
        <input
          v-model="password"
          class="input"
          type="password"
          :placeholder="getPassword"
        />
        <input
          v-model="repeatPassword"
          class="input"
          type="password"
          :placeholder="getRepeatPassword"
        />
      </div>
      <div v-if="+$route.params.step === 3" class="df jcsb w100 p0--32 mt69">
        <template v-for="(item, index) in sex" :key="index">
          <cards
            :selected="selectedSex"
            @changeValue="selectedSex = $event"
            :index="index"
            :name="'lifeStyles'"
            :item="item"
            :isLargeCard="true"
          />
        </template>
      </div>
      <div v-if="+$route.params.step === 4" class="datePicker">
        <scroll-picker
          active-style="font-size: 24px;"
          inactive-style="background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);"
          :options="getDates"
          v-model="selectedDate"
        >
          <template #center-overlay>
            <div class="custom-center-overlay"></div>
          </template>
          <template #option="{item}">
            <div class="custom-option">
              {{ item.label }}
            </div>
          </template>
        </scroll-picker>
      </div>
      <div v-if="+$route.params.step === 5" class="height-picker df fdc jcc">
        <scroll-picker
          active-style="font-size: 24px;"
          inactive-style="background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%); font-size: 18px"
          :options="getHeights"
          v-model="selectedHeight"
        >
          <template #center-overlay>
            <div class="custom-center-overlay">
              <span class="height-value">см</span>
            </div>
          </template>
          <template #option="{item}">
            <div class="custom-option">
              {{ item.label }}
            </div>
          </template>
        </scroll-picker>
      </div>
      <div v-if="+$route.params.step === 6" class="weight-picker">
        <slide-ruler
          :startWeight="startWeight"
          :endWeight="endWeight"
          :selectedWeight="selectedWeight"
          @changeValue="selectedWeight = $event"
        />
      </div>
      <div v-if="+$route.params.step === 7" class="cards">
        <template v-for="(item, index) in lifeStyles" :key="index">
          <cards
            :selected="selectedLifeStyle"
            @changeValue="selectedLifeStyle = $event"
            :index="index"
            :name="'lifeStyles'"
            :item="item"
          />
        </template>
      </div>
      <div v-if="+$route.params.step === 8" class="cards diet-wrapper">
        <template v-for="(item, index) in dietType" :key="index">
          <cards
            :selected="selectedDietType"
            @changeValue="selectedDietType = $event"
            :index="index"
            :name="'dietType'"
            :item="item"
          />
        </template>
      </div>
      <div v-if="+$route.params.step === 9" class="cards">
        <template v-for="(item, index) in healthGoals" :key="index">
          <cards
            :selected="selectedHealthGoalsType"
            @changeValue="selectedHealthGoalsType = $event"
            :index="index"
            :name="'healthGoals'"
            :item="item"
          />
        </template>
      </div>
    </div>
    <div v-if="+$route.params.step !== 1" class="p0--16--40 df fdc jcfxend">
      <template v-if="+$route.params.step === 2">
        <div class="checkbox">
          <input
            v-model="agreement"
            type="checkbox"
            id="check_icon_1"
            value="1"
            name="agree"
          />
          <label for="check_icon_1" class="check_icon">
            <img src="@/assets/svg/check-icon.svg" alt="check-icon" />
          </label>
          <p class="fs14 lh17">
            Я согласен(на) с Условиями
            <a class="link" href="">Лицензионного и Сервисного Соглашения</a>
            VitAlem
          </p>
        </div>
        <div class="checkbox">
          <input
            v-model="agreement"
            type="checkbox"
            id="check_icon_2"
            value="2"
            name="agree"
          />
          <label for="check_icon_2" class="check_icon">
            <img src="@/assets/svg/check-icon.svg" alt="check-icon" />
          </label>
          <p class="fs14 lh17">
            Я согласен(на) с
            <a class="link" href="">Условиями Конфиденциальности</a>
          </p>
        </div>
        <div class="checkbox">
          <input
            v-model="agreement"
            type="checkbox"
            id="check_icon_3"
            value="3"
            name="agree"
          />
          <label for="check_icon_3" class="check_icon">
            <img src="@/assets/svg/check-icon.svg" alt="check-icon" />
          </label>
          <p class="fs14 lh17">
            Я согласен(на) получать от VitAlem новостные и другие материалы
          </p>
        </div>
      </template>
      <button class="button fs17 mt40" @click.prevent="nextStep">
        Продолжить
      </button>
    </div>
  </div>
</template>

<script>
import ScrollPicker from "vue3-scroll-picker";
import SlideRuler from "@/components/SlideRuler";
import Cards from "@/components/Cards";

export default {
  name: "Registration",
  components: { ScrollPicker, SlideRuler, Cards },
  data() {
    return {
      startYear: 1990,
      endYear: 2040,
      startHeight: 150,
      endHeight: 250,
      startWeight: 30,
      endWeight: 150,
      selectedDate: [1, "0", 1990],
      selectedHeight: [],
      selectedWeight: 0,
      firstName: "",
      lastName: "",
      patronymic: "",
      email: "",
      password: "",
      repeatPassword: "",
      selectedSex: "",
      agreement: [],
      sex: [
        {
          value: "male",
          text: "Мужчина",
          src: "/svg/male-icon.svg"
        },
        {
          value: "female",
          text: "Женщина",
          src: "/svg/female-icon.svg"
        }
      ],
      dates: [
        {
          label: "январь",
          value: "0"
        },
        {
          label: "февраль",
          value: "1"
        },
        {
          label: "март",
          value: "2"
        },
        {
          label: "апрель",
          value: "3"
        },
        {
          label: "май",
          value: "4"
        },
        {
          label: "июнь",
          value: "5"
        },
        {
          label: "июль",
          value: "6"
        },
        {
          label: "август",
          value: "7"
        },
        {
          label: "сентябрь",
          value: "8"
        },
        {
          label: "октябрь",
          value: "9"
        },
        {
          label: "ноябрь",
          value: "10"
        },
        {
          label: "декабрь",
          value: "11"
        }
      ],
      selectedLifeStyle: "",
      lifeStyles: [
        {
          value: "low_activity",
          text: "Малоподвижный, сидячий"
        },
        {
          value: "average_activity",
          text: "Средней активности"
        },
        {
          value: "hight_activity",
          text: "Активный, спортивный"
        }
      ],
      selectedDietType: "",
      dietType: [
        {
          value: "unhealthy",
          text: "Считаю, мое питание нездоровым"
        },
        {
          value: "improve",
          text: "Стремлюсь к улучшению питания"
        },
        {
          value: "healthy",
          text: "Считаю, что питаюсь правильно"
        }
      ],
      selectedHealthGoalsType: "",
      healthGoals: [
        {
          value: "1",
          text: "Просто оздоровиться и предупредить болезни"
        },
        {
          value: "2",
          text: "Похудеть и лучше выглядеть"
        },
        {
          value: "3",
          text: "Поправиться и/или нарастить мышцы"
        },
        {
          value: "4",
          text: "Научиться управлять болезнями"
        },
        {
          value: "5",
          text: "Я участник клинического исследования"
        },
        {
          value: "6",
          text: "Другое"
        }
      ]
    };
  },
  computed: {
    getWeights() {
      const weights = Array(this.endWeight - this.startWeight + 1)
        .fill()
        .map((_, index) => ({
          label: this.startWeight + index,
          value: this.startWeight + index
        }));
      return [weights];
    },
    getHeights() {
      const heights = Array(this.endHeight - this.startHeight + 1)
        .fill()
        .map((_, index) => ({
          label: this.startHeight + index,
          value: this.startHeight + index
        }));
      return [heights];
    },
    getDates() {
      const date = new Date(this.selectedDate[2], this.selectedDate[1]);
      const daysInMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
      const yearRange = Array(this.endYear - this.startYear + 1)
        .fill()
        .map((_, index) => ({
          label: this.startYear + index,
          value: this.startYear + index
        }));
      const newDays = Array.from({ length: daysInMonth }, (_, index) => ({
        label: 1 + index,
        value: 1 + index
      }));
      return [newDays, this.dates, yearRange];
    },
    classes() {
      return [
        "fs24 ls04",
        {
          "maxW-300": ![7, 8].includes(+this.$route.params.step),
          p24: +this.$route.params.step === 1,
          "p40--24": +this.$route.params.step === 2,
          "p60--24": ![1, 2].includes(+this.$route.params.step),
          "p60--24--12": +this.$route.params.step === 9,
          "maxW-190": [5, 6].includes(+this.$route.params.step)
        }
      ];
    },
    showFirstForm() {
      return (
        this.getFirstPlaceholder &&
        this.getSecondPlaceholder &&
        this.getThirdPlaceholder
      );
    },
    getFirstPlaceholder() {
      return +this.$route.params.step === 1 && "Имя";
    },
    getSecondPlaceholder() {
      return +this.$route.params.step === 1 && "Фамилия";
    },
    getThirdPlaceholder() {
      return +this.$route.params.step === 1 && "Отчество";
    },
    showSecondForm() {
      return this.getEmail && this.getPassword && this.getRepeatPassword;
    },
    getEmail() {
      return +this.$route.params.step === 2 && "Введите электронную почту";
    },
    getPassword() {
      return +this.$route.params.step === 2 && "Придумайте пароль";
    },
    getRepeatPassword() {
      return +this.$route.params.step === 2 && "Повторите пароль";
    },
    getStep() {
      return `Регистрация ${this.$route.params.step} из 9`;
    },
    getTitle() {
      let res = "";
      switch (this.$route.params.step) {
        case "1":
          res = "Зарегистрируйтесь и раскройте секреты своего здоровья";
          break;
        case "2":
          res = "Создайте учетную запись";
          break;
        case "3":
          res = "Выберите пол";
          break;
        case "4":
          res = "Укажите дату рождения";
          break;
        case "5":
          res = "Укажите ваш рост";
          break;
        case "6":
          res = "Укажите ваш вес";
          break;
        case "7":
          res = "Какой у вас образ жизни?";
          break;
        case "8":
          res = "Каков характер вашего питания?";
          break;
        case "9":
          res = "Каковы Ваши цели касательно здоровья?";
          break;
        default:
          break;
      }
      return res;
    }
  },
  methods: {
    nextStep() {
      this.$route.params.step < 9 &&
        this.$router.push(`/registration/${++this.$route.params.step}`);
      // +this.$route.params.step === 9 && this.$router.push("/management");
    },
    prevStep() {
      +this.$route.params.step === 1 && this.$router.push("/login");
      this.$route.params.step > 1 &&
        this.$router.push(`/registration/${--this.$route.params.step}`);
    }
  }
};
</script>

<style lang="scss" scoped></style>
