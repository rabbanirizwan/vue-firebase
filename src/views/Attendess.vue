<template>
  <div
    style="
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    margin-top:30px;
    justify-content:center"
  >
    <p
      v-for="customer in attendees"
      :key="customer.id"
      style="background-color: #e6f7ff;border: 1px solid #91d5ff;padding: 8px 15px 8px 37px;border-radius:4px;"
    >
      <span v-if="user !== null && user.uid === userID">
        <a-button
          @click="toggleStar(customer.id)"
          type="default"
         
          style="margin-right:10px"
        >
          <a-icon type="star" :theme="customer.star?'twoTone':'filled'" style="color:yellow" />
        </a-button>
        <a :href="'mailto:' + customer.email">
          <a-button  type="default" style="margin-right:10px">
            <a-icon type="mail" />
          </a-button>
        </a>
        <a-button
          @click="deleteAttendee(customer.id)"
          type="default"
          style="margin-right:10px"
        >
          <a-icon type="delete" />
        </a-button>
      </span>
      <span>{{ customer.displayName }}</span>
    </p>
  </div>
</template>
<script>
import db from "../db";
export default {
  name: "Attendees",
  props: ["user"],
  data: function() {
    return {
      attendees: [],
      userID: this.$route.params.userID,
      meetingID: this.$route.params.meetingID,
    };
  },
  methods: {
    toggleStar(attendeeId) {
      if (this.user && this.user.uid === this.userID) {
        const ref = db
          .collection("users")
          .doc(this.userID)
          .collection("meetings")
          .doc(this.meetingID)
          .collection("attendees")
          .doc(attendeeId);

        ref.get().then((doc) => {
          const star = doc.data().star;
          if (star) {
            ref.update({
              star: !star,
            });
          } else {
            ref.update({
              star: true,
            });
          }
        });
      }
    },
    deleteAttendee(attendeeId) {
      if (this.user && this.user.uid === this.userID) {
        db.collection("users")
          .doc(this.user.uid)
          .collection("meetings")
          .doc(this.meetingID)
          .collection("attendees")
          .doc(attendeeId)
          .delete();
      }
    },
  },
  mounted() {
    db.collection("users")
      .doc(this.userID)
      .collection("meetings")
      .doc(this.meetingID)
      .collection("attendees")
      .onSnapshot((snapshot) => {
        const snapData = [];
        snapshot.forEach((doc) => {
          snapData.push({
            id: doc.id,
            email: doc.data().email,
            displayName: doc.data().displayName,
            star:doc.data().star
          });
        });
        this.attendees = snapData;
      });
  },
};
</script>
