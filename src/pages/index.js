import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi Dev</h1>
    <p>Welcom to my page</p>
    <p>Please contact me here</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
