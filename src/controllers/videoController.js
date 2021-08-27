export const trending = (req, res) => {
  const videos = [
      {
      title: "First Video",
      rating: 5,
      comments: 2,
      created_at: "2 minutes ago",
      views: 59,
      id : 1
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      created_at: "2 minutes ago",
      views: 59,
      id : 1
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      created_at: "2 minutes ago",
      views: 59,
      id : 1
    }
];
  return res.render("home", {pageTitle: "Home",videos}); // pageTile comes from your controller
}

export const see = (req, res) => res.render("watch"); // 파일명은 띄어쓰기가 있으면 안된다. 
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}


// export default trending; // 이렇게 하면 하나밖에 export 못함

