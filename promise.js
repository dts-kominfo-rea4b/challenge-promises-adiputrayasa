const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let nontonMarah = 0;
let nontonTidakMarah = 0; 
const promiseOutput = emosi => {
  if (emosi === 'marah' || 'tidak marah') {
      return promiseTheaterIXX().then((value) => {
      return promiseTheaterVGC().then((value) => {
        value.forEach((array) => {
              if (array.hasil === 'marah') {
                nontonMarah++;
             
              }
              else if (array.hasil === 'tidak marah'){
                nontonTidakMarah++;
              }
              else {
                'error';
              }
        });
        return nontonMarah

     
      }); 
      });
   

  }
}



module.exports = {
  promiseOutput,
};
