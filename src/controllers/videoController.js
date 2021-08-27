const fakeUser = {
    username:"JUNE",
    loggedIn:false
}



export const trending = (req, res) => res.render("home", {pageTitle: "Home",fakeUser:fakeUser}); // pageTile comes from your controller
export const see = (req, res) => res.render("watch"); // 파일명은 띄어쓰기가 있으면 안된다. 
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}


// export default trending; // 이렇게 하면 하나밖에 export 못함

