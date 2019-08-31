import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components'
import axios from 'axios'

const Posts = styled.main`
  columns: 2;
  column-gap: 50px;
  margin-bottom: 75px;

  @media (max-width: 480px) {
    columns: 1px;
  }
`

const Post = styled.div`
  width: 100%;
  margin: 0 0 25px;
  background-color: #fff;
  overflow: hidden;
  break-inside: avoid;

  img {
    max-width: 100%;
  }
`

const PostBody = styled.div`
  padding: 30px;

  h3 {
    font-size: 20px;
    margin: 0 0 15px;
    text-transform: capitalize;
  }

  p {
    font-size: 10px;
    letter-spacing: 1.5px;
    color: rgba(0,0,0,.5);
    text-transform: uppercase;
    margin-top: 0;
  }
`

const LoadMoreButton = styled.button`
  display: block;
  font-family: 'Wes FY', 'Avenir Next', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 25px;
  margin: 0 auto 100px;
  width: 250px;
  cursor: pointer;
  transition: 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
`

function randomPage() {
  return Math.floor(Math.random() * 100)
}
export default class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      images: [],
      loadingState: true
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.unsplash.com/photos?page=${randomPage()}&per_page=15&order_by=popular&client_id=${process.env.UNSPLASH_APP_ACCESS_KEY}`)
      .then(data => {
        console.log(data)
        this.setState({
          images: data.data,
          loadingState: false
        })
        console.log(this.state.images)
      })
      .catch(err => {
        console.log('Error during fetching! ', err);
      })
  }

  render() {
    const posts = this.state.images.map((img, i) => {
      return (
        <Post key={i}>
          <img src={img.urls.raw} alt={img.alt_description} />
          <PostBody>
            <h3>{img.alt_description}</h3>
            <p>Graphic Design</p>
          </PostBody>  
        </Post>
      )
    })

    return (
      <Layout>
        <SEO title="Home | Minimal Portfolio" />
        <Posts>
          {this.state.loadingState ? <FontAwesomeIcon icon={faCircleNotch} spin /> : posts}
        </Posts>
        <LoadMoreButton>
          {this.state.loadingState ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'load more.'}
        </LoadMoreButton>
      </Layout>
    )
  }
}