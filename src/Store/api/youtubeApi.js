import MYTUBE_CONFIG from '../../config.js';

function fetchVideos(store, action) {



    if (action.videoType === 'trending') {

        let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&chart=mostPopular&maxResults=30`
        fetch(url)
            .then(function (data) {
                return data.json();
            })
            .then(function (response) {
                // console.log(response);
                store.dispatch({
                    type: "VIDEOS_LOADED",
                    videos: response.items
                })
            })
            .catch(function (err) {
                console.log("err ==>", err)
            })
    } else if (action.videoType === "search") {
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&q=${action.query}`
        console.log(url)
        fetch(url)
            .then(function (data) {
                return data.json()
            })
            .then(function (response) {
                store.dispatch({
                    type: "VIDEOS_LOADED",
                    videos: response.items

                })
            })
            .catch(function (err) {
                console.log("Error =>", err)
            })
    }

}

function fetchOneVideo(store,action){
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`

    // console.log("fetchOneVideo url ",url);
   
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        store.dispatch({
            type:"VIDEO_DATA_LOADED",
            videoData:data.items[0]
        })
        // console.log(data)
    })
    .catch(function(err){
        console.log("Error ===>"+err);
    })
}

function fetchVideoComments(store,action){
    let url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`

    //console.log(url)
   
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        store.dispatch({
            type:"VIDEO_COMMENTS_LOADED",
            comments:data.items
        })
        // console.log(data)
    })
    .catch(function(err){
        console.log("Error ===>"+err);
    })
}
export { fetchVideos ,fetchOneVideo,fetchVideoComments};