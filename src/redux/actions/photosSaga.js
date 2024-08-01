import {takeLatest} from "redux-saga/effects"

function* getPhotos(){
    alert("get users")
}
function* photosSaga(){
    yield takeLatest("Get_PHOTOS",getPhotos)
}

export default photosSaga