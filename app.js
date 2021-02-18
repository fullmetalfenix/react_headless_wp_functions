const {useState, useEffect} = React;

 function NewComponent(){
        const [posts, setPosts] = useState([{}])

        useEffect(() => {
          async function fetchData() {
            const result = await fetch('<whatever-your-site-url-is>/wp-json/wp/v2/posts').then(res => res.json());
            setPosts(result);
          }
          fetchData();
        }, []); 

        return(
          <div>
          <h1>Blog.</h1>
          {posts.map((item, index) => (
                  <div className="post-containers" id={"post-container-" + index}  key={index}>
                      {/* 'Whats with the ternary operators below'? They are waiting for the content to load. They are blank until loaded, then switch to the rendered content*/}
                     <h2> {item.title ? item.title.rendered : ''}</h2>
                     {/* Removes the '<p>' tags from arround the item exerpt*/}
                      <p>{item.excerpt ? item.content.rendered.replace(/<\/p>/g, '').replace(/<p>/g, '') : ''}</p>
                     {console.log(item)}
                  </div>
          ))}
      </div>
        )
    }

    
    ReactDOM.render(<NewComponent />, document.getElementById('app-container'));