const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

//let jmlnonton = 0; cukup 1 variabel saja 

const promiseOutput =  async (emosi) => {
  let jmlnonton = 0;
  // if (emosi === 'marah' || 'tidak marah') { -> tidak perlu if karena kita langsung ambil hasil input nya
  await promiseTheaterIXX().then( (value) => { 
    value.forEach((array) => {
      if (array.hasil === emosi) {
        jmlnonton++;
      }
    });
  });

  await promiseTheaterVGC().then( (value) => { 
    value.forEach((array) => {
      if (array.hasil === emosi) {
        jmlnonton++;
      }
    });
  });

  return jmlnonton;
};





module.exports = {
  promiseOutput,
};
