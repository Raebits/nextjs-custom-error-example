import { NextPageContext } from "next"
import Error from "next/error"


const BlogContentPage = ({ data, error }: { data: any, error?: any }) => {
  if (error) return <Error statusCode={404}/>
  return (
    <h1>this is my blog page</h1>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // const error = new Error('this is an error trial')

  // Pass data to the page via props
  // return { props: { data } }
  return {
    notFound: true,
    props: {
      data: {},
      error: 404
    }
  }
}

export default BlogContentPage