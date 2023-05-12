import React from 'react'
import Layout from './Layout'

const PageNotFound = () => {
    const logo = "https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7879.jpg?w=740&t=st=1683712935~exp=1683713535~hmac=d59bacd14bab93a397e13d7f9a23ee0bfe136fd04729daadfdad45e63a64d85a"
  return (
    <Layout>
    <div className='container'>
        <img src={logo} alt="logo" />
    </div>
    </Layout>
  )
}

export default PageNotFound