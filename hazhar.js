let newPost = {
    userId: 24,
    body: 'fech in js',
    title: 'js'
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method:'post',
//     body: JSON.stringify(newPost)
// }).then(Response => Response.json())
//     .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
}).then(Response => Response.json())
    .then(data => console.log(data))