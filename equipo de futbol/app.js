const db = firebase.firestore();
const ejemploRef = db.collection("ejemplo");

ejemploRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});