
import './App.css';
import Profile from './profile/Profile';
import pic from "./profile/picture.jpg";
import pic2 from "./profile/pic2.jpg";
import Images from './profile/Images';

const  setStyleApp = {
  backgroundColor : 'aliceblue',
  opacity :'2.8'
 
}

function App() {

  const handleClick = e => {
    // e.preventDefault();
    //prentDefault mis en commentaire dans ce cas pour ne pas annuler l'ouverture du fichier CV
     console.log("The link was clicked.");
     alert("Saida Cv will be opened soon...");
  };
  return (
    <div className="App" style ={setStyleApp}>
   
      
      <Profile 
      name="Saida Belhadj" 
      profession="Software engineer" 
      email="saidabelhadj@gmail.com"
      phone="22900190" 
      dob="11-01-1984" 
      hClick={handleClick}> 
      {pic}
      </Profile>
        <Images>{pic2}</Images> 
    </div>
  );

}
export default App;

