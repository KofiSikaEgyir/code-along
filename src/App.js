import Header from "./components/Header";
import Button from "./components/Button";
import {Image} from "./components/Image";
import Navbar from "./components/Navbar";
function App(){
  return (
    <div>
      <Navbar />
      <Header />
      <Button label="Add to Cart" />
      <Button label="Login" />
      <Button label="Singup" />
      <Button label="Register" />
      <Image />  
      
    </div>
  )
}
export default App;