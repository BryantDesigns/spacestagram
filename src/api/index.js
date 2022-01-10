
  
// API: eszsOmGESeKhT3tYeRjD2mHVNjZK7xUkXkjKG8QG
// https://api.nasa.gov/planetary/apod?api_key=eszsOmGESeKhT3tYeRjD2mHVNjZK7xUkXkjKG8QG

// ImageObj = {
//     copyright:      string;
//     date:           Date;
//     explanation:    string;
//     hdurl:          string;
//     mediaType:      string;
//     serviceVersion: string;
//     title:          string;
//     url:            string;
// }
  
  export async function getNasaData() {
      try {
        const nasaObj = await fetch(
          'https://api.nasa.gov/planetary/apod?api_key=eszsOmGESeKhT3tYeRjD2mHVNjZK7xUkXkjKG8QG&count=6'
          );
          const nasaJson = await nasaObj.json();
          return nasaJson;
        } catch (error) {
          console.error(error);
          return [];
        }
  }