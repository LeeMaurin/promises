// callback example

// const blogs = [
//     {title: "first blog", text: "FreeCodeCamp"},
//     {title: "second blog", text: "capital one cafe"}
// ]

// function getBlogs() {
//     setTimeout(function() {
//         console.log("Start printing")
//         blogs.forEach((blog) => {
//             console.log(`Title is ${blog.title} and content is ${blog.text}`)
//         })
//     }, 1000)
// }

// function createBlog(blog, callback) {
//     setTimeout(function() {
//         blogs.push(blog);
//         console.log("Blog is pushed")
//         callback();
//     }, 2000)
// }

// createBlog({title: "Third blog", text: "The final blog"}, getBlogs)

// simple example

// function sayHello() {
//     console.log("Say Hello")
// }

// function greet(callback) {
//     callback();
// }

// greet(sayHello)


// promises


// const blogs = [
//     {title: "first blog", text: "FreeCodeCamp"},
//     {title: "second blog", text: "capital one cafe"}
// ]

// function getBlogs() {
//     setTimeout(function() {
//         console.log("Start printing")
//         blogs.forEach((blog) => {
//             console.log(`Title is ${blog.title} and content is ${blog.text}`)
//         })
//     }, 1000)
// }

// function createBlog(blog) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             blogs.push(blog);
//             const error = false;
//             if(!error) {
//                 resolve();
//             } else {
//                 reject("Something went wrong")
//             }
//         }, 2000)
//     })
// }

// createBlog({title: "Third blog", text: "The final blog"})
//     .then(getBlogs)
//     .catch((error) => {
//     console.log(error)
// })

// async & await

const blogs = [
    {title: "first blog", text: "FreeCodeCamp"},
    {title: "second blog", text: "capital one cafe"}
]

function getBlogs() {
    setTimeout(function() {
        console.log("Start printing")
        blogs.forEach((blog) => {
            console.log(`Title is ${blog.title} and content is ${blog.text}`)
        })
    }, 1000)
}

function createBlog(blog) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            blogs.push(blog);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject("Something went wrong")
            }
        }, 2000)
    })
}

async function init() {
    await createBlog({title: "Third blog", text: "The final blog"});
    getBlogs();
}

init();
