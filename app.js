const {useState, useEffect} = React;

 function NewComponent(){
        const [posts, setPosts] = useState([{"Hello": "world"}])
        const [selectedPost, setSelectedPost] = useState()


        useEffect(() => {
          async function fetchData() {
            const result = await fetch('http://localhost/react_headless/wordpress/wp-json/wp/v2/posts').then(res => res.json());
            setPosts(result);
          }
          fetchData();
        }, []); 

        return(
          <div>
          <h1>Blog.</h1>
          {posts.map((item, index) => (
                  <div className="post-containers" id={"post-container-" + index}  key={index}>
                     <h2> {item.title ? item.title.rendered : ''}</h2>
                      <p>{item.excerpt ? item.excerpt.rendered : ''}</p>
                     {console.log(item)}
                  </div>
          ))}






      </div>
        )
    }



    
    ReactDOM.render(<NewComponent />, document.getElementById('app-container'));