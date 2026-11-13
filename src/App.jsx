import "./App.css";
import hero from './assets/hero.png'

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo"><span>MYLOGO</span></div>
        <div>
          <ul className="navitems">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>

      <div className="desc">
        <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum cum consectetur temporibus? Natus expedita numquam commodi amet ducimus ut in quibusdam ullam quasi, sunt sequi rerum facilis porro, impedit ex dolores. Quibusdam fugiat sed iure, ea, commodi dolor aperiam ipsum adipisci, quos atque repellat nostrum?</div>
        <div className="image"><img src={hero} alt="" /></div>
      </div>
      <div className="desc">
        <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum cum consectetur temporibus? Natus expedita numquam commodi amet ducimus ut in quibusdam ullam quasi, sunt sequi rerum facilis porro, impedit ex dolores. Quibusdam fugiat sed iure, ea, commodi dolor aperiam ipsum adipisci, quos atque repellat nostrum?</div>
        <div className="image"><img src={hero} alt="" /></div>
      </div>
      <div className="desc">
        <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum cum consectetur temporibus? Natus expedita numquam commodi amet ducimus ut in quibusdam ullam quasi, sunt sequi rerum facilis porro, impedit ex dolores. Quibusdam fugiat sed iure, ea, commodi dolor aperiam ipsum adipisci, quos atque repellat nostrum?</div>
        <div className="image"><img src={hero} alt="" /></div>
      </div>
      <div className="desc">
        <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum cum consectetur temporibus? Natus expedita numquam commodi amet ducimus ut in quibusdam ullam quasi, sunt sequi rerum facilis porro, impedit ex dolores. Quibusdam fugiat sed iure, ea, commodi dolor aperiam ipsum adipisci, quos atque repellat nostrum?</div>
        <div className="image"><img src={hero} alt="" /></div>
      </div>
    </>
  );
}

export default App;
