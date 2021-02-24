<template>
  <div id="app">
    <Navigation :user="user" />
    <router-view
      :user="user"
      @logout="logout"
      @addMeeting="addMeeting"
      @deleteMeeting="deleteMeeting"
      @checkIn="checkIn"
      :meetings="meetings"
    />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import db from "./db";
import Firebase from "firebase";
export default {
  name: "App",
  components: {
    Navigation,
  },
  data: function() {
    return {
      user: null,
      meetings: [],
    };
  },
  methods: {
    logout: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
      this.user = null;
    },
    addMeeting: function(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .add({
          name: payload,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
        });
    },
    deleteMeeting: function(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .doc(payload)
        .delete();
    },
    checkIn: function(payload) {
     console.log("payload.userID_____",payload.userID,'payload.meetingID',payload.meetingID);
      db.collection("users")
        .doc(payload.userID)
        .collection("meetings")
        .doc(payload.meetingID)
        .get()
        .then(w => {
          console.log(w)
          if (w.exists) {
            db.collection("users")
              .doc(payload.userID)
              .collection("meetings")
              .doc(payload.meetingID)
              .collection("attendees")
              .add({
                displayName: payload.displayName,
                email: payload.email,
                createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
              })
              .then(() => this.$router.push("/"));
          } else {
            alert("Sorry, no such meeting");
          }
        });
    },
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        db.collection("users")
          .doc(this.user.uid)
          .collection("meetings")
          .onSnapshot((snapshot) => {
            let snapData = [];
            snapshot.forEach((doc) => {
              snapData.push({
                id: doc.id,
                name: doc.data().name,
              });
            });
            this.meetings = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else {
                return 1;
              }
            });
          });
      }
    });
  },
};
</script>

<style lang="sass"></style>
