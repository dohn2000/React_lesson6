
import './App.css';

function Register(){
    
    return (
        <div className="containerr">
            <div className="card">
                <div className='card-1'>
                    Phieu muon sach
                </div>
                <div >
                        <div className='flex'>
                            <div>Ma Sinh Vien:</div>
                            <input style={{marginLeft:"10px"}}></input>
                        </div>
                        <div className='flex'>
                            <div>Ho va ten:</div>
                            <input style={{marginLeft:"35px"}}></input>
                        </div>
                        <div className='flex'>
                            <div>Loai sach:</div>
                            <select style={{marginLeft:"35px"}}>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div className='flex'>
                            <div>Ten Sach:</div>
                            <input style={{marginLeft:"35px"}}></input>
                        </div>
                        <div className='flex'>
                            <div>Ngay Muon:</div>
                            <input style={{marginLeft:"18px"}}></input>
                        </div>
                        <div className='flex'>
                            <div>Ngay tre:</div>
                            <input style={{marginLeft:"37px"}}></input>
                        </div>
                    </div>
                    <div className='buut'>
                    <button >Dang Nhap</button>
                    <button >Dang Ki</button>
                </div>
            </div>
        </div>
  );
}

export default Register;