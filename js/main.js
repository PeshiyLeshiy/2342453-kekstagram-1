import { getPictures } from './data.js';
import { renderPictures } from './picture.js';
import { turnFilterOn, filterPictures } from './filter.js';


const onGetDataSuccess = (data) => {
    turnFilterOn(data);
    renderPictures(filterPictures());
};

getData(onGetDataSuccess);
