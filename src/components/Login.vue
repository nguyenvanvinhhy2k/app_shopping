<template>
  <div class="backgroup">
    <form
      @submit.prevent="handleSubmit"
      action=""
      class="modal-auth__form modal-auth__form-login modal-auth__form--active form1"
      style="height: 525px"
    >
      <div class="modal-auth__form-header modal-auth__form-login-header">
        <div
          class="modal-auth__form-header-title modal-auth__form-login-header-title"
        >
          <h1>ĐĂNG NHẬP</h1>
        </div>
      </div>
      <div class="modal-auth__form-content modal-login-content">
        <div class="modal-auth__form-content-wrap">
          <div class="modal-auth__form-content-row">
            <label for="CustomerEmailLogin"
              >Email <span class="required">*</span></label
            >
            <input v-model="userName" type="email" placeholder="" />
          </div>
          <div class="modal-auth__form-content-row" style="position: relative">
            <label for="CustomerPasswordLogin"
              >Password <span class="required">*</span></label
            >
            <input v-model="passWord" type="password" />
          </div>
          <span
            style="
              color: red;
              font-size: 15px;
              left: 32%;
              font-weight: 600;
              position: absolute;
            "
            >{{ error }}</span
          >
          <div class="modal-auth__form-content-row">
            <button
              style="margin: 5px 0; margin-top: 30px"
              type="submit"
              class="btn modal-auth__form-btn"
            >
              Đăng Nhập
            </button>
          </div>

          <div
            class="modal-auth__form-content-row"
            style="padding-bottom: 28px"
          >
            <div class="modal-auth__form-support" style="display: flex">
              <div class="" style="align-items: center; display: flex">
                <img alt="..." src="../assets/facebook.png" />
                <a
                  class="modal-auth__form-support-link"
                  style="margin-right: 40px"
                  data-form="recover"
                  @click="signInFacebook"
                  >Facebook</a
                >
              </div>
              <div class="" style="align-items: center; display: flex">
                <img alt="..." src="../assets/google.png" />
                <a
                  class="modal-auth__form-support-link"
                  data-form="recover"
                  @click="signInGoogle"
                >
                  Google</a
                >
              </div>
            </div>
          </div>
          <div class="modal-auth__form-content-row">
            <p class="modal-auth__form-support">
              Bạn chưa có tài khoản?<router-link
                :to="{ name: 'Registor' }"
                class="modal-auth__form-support-link"
                data-form="create"
                >Tạo mới</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      userName: "",
      passWord: "",
      error: "",
    };
  },
  methods: {
    async signInGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      await signInWithPopup(auth, provider)
        .then((respon) => {
          localStorage.setItem("user", JSON.stringify(respon.user.displayName));
          localStorage.setItem("userId", JSON.stringify(25));
          this.$store.dispatch("user", respon.user.displayName);
          localStorage.setItem("userID", JSON.stringify(respon.user.uid));
          localStorage.setItem(
            "photoURL",
            JSON.stringify(respon.user.photoURL)
          );
          this.$store.dispatch("userId", 25);
          this.$router.push("/");
          console.log(respon);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async signInFacebook() {
      const provider = new FacebookAuthProvider();
      const auth = getAuth();
      await signInWithPopup(auth, provider)
        .then((respon) => {
          localStorage.setItem("user", JSON.stringify(respon.user.displayName));
          localStorage.setItem(
            "photoURL",
            JSON.stringify(respon.user.photoURL)
          );
          localStorage.setItem("userId", JSON.stringify(28));
          this.$store.dispatch("user", respon.user.displayName);
          localStorage.setItem("userID", JSON.stringify(respon.user.uid));
          this.$store.dispatch("userId", 28);
          this.$router.push("/");
          console.log(respon);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async handleSubmit() {
      const respon = await axios.post(
        "https://localhost:44309/api/Customer/Login",
        {
          userName: this.userName,
          passWord: this.passWord,
        }
      );
      if (!respon.data.isSuucess) {
        this.error = respon.data.messgae;
      } else {
        localStorage.setItem("user", JSON.stringify(respon.data.obj.fullName));
        localStorage.setItem("userId", JSON.stringify(respon.data.obj.id));

        console.log(respon.data.obj);
        this.$store.dispatch("user", respon.data.obj.fullName);
        this.$store.dispatch("userId", respon.data.obj.id);
        this.$router.push("/");
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style scoped>
form {
  border: 2px solid #ccc;
  right: 0px;
  visibility: visible;
  opacity: 1;
  /* bottom: 0; */
  width: 50%;
  margin: 0 auto;
  margin-top: 150px;
  margin-right: 200px;
}
.form1 {
  background: white;
  border-radius: 50%;
  right: 0px;
  visibility: visible;
  opacity: 1;
  width: 35%;
  margin-top: 85px;
  margin-right: 450px;
  min-height: 490px;
  border-radius: 20px;
}
.backgroup {
  /* background-image: url("/fontend/asset/images/slides/backgroup.jpg"); */
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
</style>
