import { useCallback, useState } from "react";
import C1 from "./C1";

function App() {
  const [sayac, sayacGuncelle] = useState(0)


  const uyariGoster = useCallback(  function (uyari) {
    alert(uyari + sayac)
  }
, [])

  const deger = sayac % 5 === 0 ? sayac : "5'in katı değildir."
  return (
    <>
       Sayac: {sayac}
      <button onClick={()=>{sayacGuncelle(eskiDeger => eskiDeger+1)}}>Arttır</button>
      <C1 f1={uyariGoster} veri={deger} />
    </>
  );
}

export default App;
