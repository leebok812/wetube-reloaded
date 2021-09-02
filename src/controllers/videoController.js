let videos = [
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
      id : 2
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      created_at: "2 minutes ago",
      views: 59,
      id : 3
    }
];

export const trending = (req, res) => {  
  return res.render("home", {pageTitle: "Home",videos}); // pageTile comes from your controller
}

export const see = (req, res) => {
  //  const id = req.params.id 아래와 똑같은 의미 
  const { id } = req.params  // 위와 똑같은 의미 
  const video = videos[id-1] // 컴퓨터는 0부터 읽기 시작하므로
  return res.render("watch", { pageTitle: `Watching ${video.title}` })
}
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");



// export default trending; // 이렇게 하면 하나밖에 export 못함

