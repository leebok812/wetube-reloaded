export const trending = (req, res) => res.send("<h1>Hello!</h1>")
export const see = (req, res) =>{
   return res.send(`Watch Video #${req.params.id}`);
}    
export const edit = (req, res) => {
   return res.send("Edit");
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}


// export default trending; // 이렇게 하면 하나밖에 export 못함