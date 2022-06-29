<template>
  <div class="backgroup" style="">
    <form
      @submit.prevent="handleSubmit"
      action=""
      class="modal-auth__form modal-auth__form-create form1"
    >
      <div class="modal-auth__form-header modal-auth__form-create-header">
        <div
          class="modal-auth__form-header-title modal-auth__form-create-header-title"
        >
          <h1>ĐĂNG KÍ</h1>
        </div>
      </div>
      <div class="modal-auth__form-content modal-create-content">
        <div class="modal-auth__form-content-wrap">
          <div class="modal-auth__form-content-row" style="position: relative">
            <label for="CustomerLastName"
              >Họ tên <span class="required">*</span>
            </label>
            <input
              v-model="fullName"
              type="text"
              @change="v$.fullName.$touch()"
              @blur="v$.fullName.$touch()"
            />
            <div class="error">
              <span v-if="v$.fullName.$error">Vui lòng nhập họ tên</span>
            </div>
          </div>
          <div class="modal-auth__form-content-row" style="position: relative">
            <label for="CustomerEmailCreate"
              >Email <span class="required">*</span></label
            >
            <input
              v-model="userName"
              type="email"
              @change="v$.userName.$touch()"
              @blur="v$.userName.$touch()"
            />
            <div class="error">
              <span v-if="v$.userName.$error">Vui lòng nhập email</span>
            </div>
          </div>
          <div class="modal-auth__form-content-row" style="position: relative">
            <label for="CustomerPasswordCreate"
              >Password <span class="required">*</span></label
            >
            <input
              v-model="passWord"
              type="password"
              @change="v$.passWord.$touch()"
              @blur="v$.passWord.$touch()"
            />
            <div class="error">
              <span v-if="v$.passWord.$error">Vui lòng nhập số mật khẩu</span>
            </div>
          </div>
          <div class="modal-auth__form-content-row">
            <button
              type="submit"
              style="margin: 15px 0"
              class="btn modal-auth__form-btn"
            >
              Đăng Ký
            </button>
          </div>
          <div class="modal-auth__form-content-row">
            <p class="modal-auth__form-support">
              Bạn đã có tài khoản?
              <router-link
                :to="{ name: 'Login' }"
                class="modal-auth__form-support-link"
                >Đi tới đăng nhập</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  name: "RegistorComponent",
  data() {
    return {
      v$: useValidate(),
      fullName: "",
      userName: "",
      passWord: "",
    };
  },
  validations() {
    return {
      fullName: { required },
      userName: { required, email },
      passWord: { required },
    };
  },
  methods: {
    async handleSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        await axios.post("https://localhost:44309/api/Customer/Registor", {
          fullName: this.fullName,
          userName: this.userName,
          passWord: this.passWord,
        });
        alert("Đăng kí thành công");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
form {
  right: 0px;
  border: 2px solid #ccc;
  visibility: visible;
  opacity: 1;
  /* bottom: 0; */
  width: 50%;
  margin: 0 auto;
  margin-top: 127px;
  margin-right: 200px;
}
.form1 {
  background: white;
  right: 0px;
  visibility: visible;
  opacity: 1;
  width: 35%;
  margin-top: 80px;
  margin-right: 450px;
  height: 550px;
  border-radius: 20px;
}
.backgroup {
  object-fit: contain;
  display: block;
  object-fit: cover;
  background-position: center center;
  background-size: contain;
  position: relative;
  height: 670px;
  background-repeat: no-repeat, repeat;
  background: #f7f7f7;
  width: 100%;
  background-size: cover;
}
input {
  border-radius: 30px;
}
.error {
  color: red;
  position: absolute;
  font-size: 12px;
  padding: 5px;
  left: 37%;
}
</style>
