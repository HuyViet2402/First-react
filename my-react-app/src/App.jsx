import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx';
import Printer from './Printer.jsx'
import UserGreeting from './UserGreeting.jsx'
function App() {
  return(
    <>
      <Header/>
      <UserGreeting username = "Huy Viet" isLogin={true}/>
      <Food/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Button/>
      <Printer name = "Printer 1" isAvailable={true}/>
      <Printer name = "Printer 2" isAvailable={false}/>
      <Printer name = "Printer 3" isAvailable={true}/>
      <Printer/>
      <Footer/>
    </>
  );
}

export default App
