import Title from "../Components/Title";

export default function Home({ comments}) {
  // console.log(comments);
  return (
    <div>
      
      <Title title='Home'/>
       <div>
           name:Hakkani
           email
       </div>
    </div>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      comments:posts,
    },
  }
}