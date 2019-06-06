function fetchVideos(store, action) {

    if (action.videoType === 'trending') {
        fetch(" https://www.googleapis.com/youtube/v3/videos?"
            + "part=snippet&key=AIzaSyAre3R_lOPoWUzpUxZOCmx5kPwoOT07Tco&chart=mostPopular&maxResults=30")
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
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAre3R_lOPoWUzpUxZOCmx5kPwoOT07Tco&q=${action.query}`
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

export { fetchVideos };