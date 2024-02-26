
import Navigation from "../../Navigation"
import { userIcon } from "../../icons/icons"
import { messageIcon } from "../../icons/icons"
const Home = () => {
 
  return (
    <div>
      <Navigation />
      <a href="/myprofile" ><div>{userIcon() }</div></a>
      <a href="/chat" ><div>{messageIcon() }</div></a>
      
    </div>
  )
}

export default Home

