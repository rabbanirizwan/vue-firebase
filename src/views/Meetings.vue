<template>
  <div
    style="display:flex;flex-direction:column;justify-content:center;align-items:center"
  >
    <div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Add Meetings">
          <a-input
            v-decorator="[
              'note',
              {
                rules: [{ required: true, message: 'Please input your note!' }],
              },
            ]"
            ref="meetingName"
            style="width:80vw"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">
            Add
            <a-icon type="plus-square" />
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div
      v-for="item in meetings"
      :key="item.id"
      style="width:80vw;margin-top:20px;display:flex"
    >
      <p
        style="background-color: #e6f7ff;border: 1px solid #91d5ff;padding: 8px 15px 8px 37px;border-radius:4px;width:80vw;"
      >
        <router-link :to="'/checkin/' + user.uid + '/' + item.id" style="margin-right:10px">
          <a-icon
            type="video-camera"
            style="color:#096dd9;font-size:20px"
          />
        </router-link>
        <router-link :to="'/attendees/' + user.uid + '/' + item.id" style="margin-right:10px" >
          <a-icon
            type="eye"
            style="color:#096dd9;font-size:20px;"
          />
        </router-link>
        <a-icon
          @click="$emit('deleteMeeting', item.id)"
          type="delete"
          theme="filled"
          style="color:#096dd9;font-size:20px"
        />

        <span style="margin-left:10px">{{ item.name }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meetings",
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      meetingName: null,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.addMeeting(values);
        }
      });
    },
    itemToRemove() {
      alert("sdssd");
    },
    addMeeting(info) {
      this.$emit("addMeeting", info.note);
      this.form.resetFields();
      this.$refs.meetingName.focus();
    },
  },
  props: ["user", "meetings"],
};
</script>
