import { observer } from "mobx-react-lite";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Footer from "./components/Footer";



function App() {

  return (
    <>
      <>
			<Sidebar />
			<Container />
			<Footer />
		</>
    </>
  )
}

export default observer(App);
