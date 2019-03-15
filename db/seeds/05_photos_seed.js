const fs = require("fs");
let photoList = fs.readdirSync("./seeds/photos/", (err, data) => {
  if (err) {
    throw err;
  }
  return data;
});

let photoObjectArray = [];

for (let i in photoList) {
  photoObjectArray.push({
    title: "Test Title: Look at " + photoList[i] + "!",
    device_id: 1,
    group_id: 1,
    order_in_group: i,
    user_id: 4,
    latitude: 35.658124669454075 + 0.002 * i,
    longitude: 139.72756780246945 + 0.002 * i,
    comment:
      "Test Comment: This is photo " +
      (Number(i) + 1) +
      ".<br>\nThe file name is " +
      photoList[i],
    image_file: photoList[i]
  });
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("photos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("photos").insert(photoObjectArray);
    });
};
