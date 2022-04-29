// import { doc, addDoc, setDoc, collection } from "firebase/firestore";
// import { db } from "./lib/firebase.prod";
// import { fetchMoives } from "./utils/getMovie";

// export async function addDatabase(firebase) {
//   function getUUID() {
//     // eslint gets funny about bitwise
//     /* eslint-disable */
//     return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
//       const piece = (Math.random() * 16) | 0;
//       const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
//       return elem.toString(16);
//     });
//     /* eslint-enable */
//   }

//   const movieList = await fetchMoives()

//   movieList.map(async item=>{
//     await addDoc(collection(db, 'test'),{
//       ...item,
//       id: getUUID()
//     })
//   })

//   // (await movieList).map(item=>{
//   //   console.log(item);
//   // })



//   // await addDoc(collection(db, "films"), {
//   //   id: getUUID(),
//   //   description:
//   //     "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist - when she gets too excited, she transforms into a giant red panda.",
//   //   genre: "animation",
//   //   img: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
//   //   largeImg:
//   //     "https://image.tmdb.org/t/p/w500/,iPhDToxFzREctUA0ZQiYZamXsMy.jpg",
//   //   maturity: 12,
//   //   slug: "turning-red",
//   //   title: "Turning Red",
//   // });
// }

// // {
// //   id: getUUID(),
// //   description:
// //     "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist - when she gets too excited, she transforms into a giant red panda.",
// //   genre: "animation",
// //   img: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
// //   largeImg:
// //     "https://image.tmdb.org/t/p/w500/,iPhDToxFzREctUA0ZQiYZamXsMy.jpg",
// //   maturity: 12,
// //   slug: "turning-red",
// //   title: "Turning Red",
// // }
