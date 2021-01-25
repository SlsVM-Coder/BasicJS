

const getImagen = async () => {

   try {
      const apiKey = 'OdKkrETwVc3Y2K6s2erLO7sNuPNuZtdW';

      const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const { data } = await resp.json();
      const { url } = data.images.original;

      const img = document.createElement('img');
      img.src = url;

      document.body.append(img);


   } catch (error) {
      // manejo del error
      console.error(error);
   }
}

getImagen();