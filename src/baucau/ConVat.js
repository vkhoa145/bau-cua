import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function ConVat({data}) {
    const dispatch = useDispatch();
    const {tongDiem} = useSelector(state => state.baucua)
    const increase =() => {
        dispatch({type:"TANG_CUOC",data: data.loai})
    };

    const decrease = () => {
        dispatch({type:"GIAM_CUOC",data: data.loai})
    }
    return (
        <div className="card bg-warning">
            <img src={`/img/${data.loai}.png`} alt={data.loai} />
            <div className="card-body">
                <div className="card-title text-center">
                    <span className="mr-2 text-dark">Cuoc</span>
                    <button className="btn btn-success" onClick={decrease} disabled={!data.diemcuoc}>-</button>
                    <span className="mx-3 text-dark">{data.diemcuoc}</span>
                    <button className="btn btn-success" onClick={increase} disabled={!tongDiem}>+</button>
                </div>
            </div>
        </div>
    )
}
