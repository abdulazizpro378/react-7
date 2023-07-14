import { Fragment } from "react"
import Home from "../components/home/Home"
import Pitsa from "../components/pittsa/Pitsa"
import Search from "../components/serach/Search"
import Text from "../components/text/Text"

const HomeP = () => {
  return (
    <Fragment>
      <Home/>        
      <Search/>
      <Pitsa/>
      <Text/>
    </Fragment>
  )
}

export default HomeP