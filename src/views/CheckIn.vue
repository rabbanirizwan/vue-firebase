<template>
  <div>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <!-- <a-alert
        v-if="errMessage"
        message="Error"
        v-text="errMessage"
        type="error"
        show-icon
      /> -->
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
            'username',
            { rules: [{ required: true, message: 'Please input your name' }] },
          ]"
          placeholder="Please input your name"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          Check In
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
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
          this.checkIn(values);
        }
      });
    },
    checkIn(info) {
        this.$emit('checkIn',{
            userID:this.$route.params.userID,
            meetingID:this.$route.params.meetingID,
            displayName:info.username,
            email:info.email
        })
     // console.log(this.$route.params.meetingID,this.$route.params.uid,info)
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
