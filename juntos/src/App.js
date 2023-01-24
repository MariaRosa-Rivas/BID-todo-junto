import './App.css';
import ComponenteUltimo from './Components/ComponenteUltimo';
import ComponenteTres from './Components/ComponenteTres';
import OtroComponente from './Components/OtroComponente';
import PersonCard from './Components/PersonCard';
function App() {
  return (
    <div className="App">
    <PersonCard firstName = {"Doe ,"} lastName={"Jane"} age ={"Age:"} valorAge={55}> 
      <p>Hair Color: Black</p>
    </PersonCard>
    <OtroComponente firstName1 = {"Smith ,"} lastName1={"John"} age1 ={"Age:"}  ValorAge1 = {88}>
      <p>Hair Color: Brown</p>
    </OtroComponente>
    < ComponenteTres firstNam = {"Fillmore ,"} lastNam={"Millard"} ages ={"Age:"} Valor = {65}>
      <p>Hair Color: Brown</p>
    </ ComponenteTres> 
    <ComponenteUltimo firstN = {"Smith ,"} lastN={"Maria"} edades ={"Age:"} edad = {55}>
      <p>Hair Color: Brown</p>
    </ComponenteUltimo>
</div>
  );
}

export default App;
