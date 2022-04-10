import axios from 'axios';

async function getImages() {
  let response = await axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=21c1c693f8ca2a2fed55d4bf9536fa2e&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`
  );
  let result = response.data;
  console.log(result.photos);
  return result;
}

export default { getImages };
