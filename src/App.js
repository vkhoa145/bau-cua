import BanChoi from './baucau/BanChoi';
import TongDiem from './baucau/TongDiem';
import XucXac from './baucau/XucXac';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="bg-dark" style={{minHeight:"100vh",color:"#fff"}}>
      <h1 className="text-center">Bau Cua</h1>
      <div className="d-flex justify-content-center">
        <TongDiem />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <BanChoi />
          </div>
          <div className="col-sm-3">
            <XucXac />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
