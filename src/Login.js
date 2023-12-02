import React, { useState } from 'react';
import './App.css';
import { useNavigate  } from "react-router-dom";

function Login(){
    const [acc, setAcc] = useState("")
    const [pass, setpass] = useState("")
    const navigate = useNavigate();

    function DangNhap(){
        if(acc === "" && pass === ""){
            alert("fail")
        }else{
            alert("Login successful")
        }
    }
    function DangKi(){
        navigate('/Register')
    }


    return (
        <div className="containerr">
            <div className="card">
                <div className='card-1'>
                    DANG NHAP HE THONG
                </div>
                <div className='flex'>
                    <div> Chia Khoa</div>
                    <div >
                        <div className='flex'>
                            <div>Tai Khoan</div>
                            <input value={acc} onChange={(e)=>setAcc(e.target.value)}></input>
                        </div>
                        <div className='flex'>
                            <div>Mat Khau</div>
                            <input value={pass} onChange={(e)=>setpass(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div className='buut'>
                    <button onClick={DangNhap}>Dang Nhap</button>
                    <button onClick={(DangKi)}>Dang Ki</button>
                </div>
            </div>
        </div>
  );
}

export default Login;