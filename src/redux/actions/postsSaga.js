import { call, put, takeLatest } from "redux-saga/effects"
import sendGetReq from "@/services/ajax"

function* getPosts(data) {
    const res = call(sendGetReq, "https://jsonplaceholder.typicode.com/posts", data)

    yield put({ type: "UPDATE_POSTS", payload: res.data })
}
function* getPostsById() {

}
function* postsSaga() {
    yield takeLatest("GET_POSTS", getPosts)
    yield takeLatest("GET_POSTS_BY_ID", getPostsById)
}
export default postsSaga;