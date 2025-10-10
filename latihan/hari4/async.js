function doAsync() {
  return new Promise(function (resolve, reject) {
    var check = true;
    if (check) {
      resolve("berhasil");
    } else {
      reject("gagal");
    }
  });
}
async function hello() {
  try {
    var result = await doAsync();
    console.log(err);
  } catch (err) {
    console.log;
  }
}
