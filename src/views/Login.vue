<template>
  <div>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-alert
        v-if="errMessage"
        message="Error"
        v-text="errMessage"
        type="error"
        show-icon
      />
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            },
          ]"
          placeholder="email"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            },
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          Log in
        </a-button>
        Or
        <a href=""> register now! </a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          //  console.log("Received values of form: ", values);
          this.login(values);
        }
      });
    },
    login(info) {
      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push("meetings");
          },
          (error) => {
            this.errMessage = error.message;
            //console.log(this.errMessage, "error.message______", error.message);
          }
        );
    },
  },
  data: function() {
    return {
      email: "",
      password: "",
      errMessage: "",
    };
  },
};
</script>
<style>
#components-form-demo-normal-login {
  padding: 50px 20vw;
}
</style>
