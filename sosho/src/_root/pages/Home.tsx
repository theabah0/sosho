
import Navigation from "../../Navigation"
import { userIcon } from "../../icons/icons"
const Home = () => {
 
  return (
    <div>
      <Navigation />
      <a href="/myprofile" ><div>{userIcon() }</div></a>
      <a href="/chat" ><div>{userIcon() }</div></a>
      
    </div>
  )
}

export default Home

