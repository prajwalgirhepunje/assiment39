import ReactDOM from 'react-dom/client';
import HelloUser, { GoodEvening, GoodMoring } from "hellouser";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <div>
     <h1 style={{
         textAlign:"center",
         color:"tomato",
     }}>ALL GRETTING</h1>
  <HelloUser name="prajwal"  />
  <GoodMoring name="Saurabh" />
  <GoodEvening  name="samya"/>

  </div>
);