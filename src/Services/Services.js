import axios from 'axios';

async function getImages(search = 'human') {
  try {
    let response = await axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=21c1c693f8ca2a2fed55d4bf9536fa2e&text=${search}&sort=interestingness-desc&per_page=100&license=4&extras=owner_name%2Clicense&format=json&nojsoncallback=1`
    );
    let result = response.data;
    //console.log(result.photos);
    return result.photos;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return error.response;
    } else if (error.request) {
      console.log(error.request);
      return error.request;
    } else {
      console.log('Error', error.message);
      return error.message;
    }
  }
}

export default { getImages };
