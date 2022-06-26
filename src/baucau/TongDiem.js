import React from 'react';
import {useSelector} from 'react-redux'

export default function TongDiem() {
    const {tongDiem} = useSelector(state => state.baucua)
  return (
    <div className="p-4 bg-warning">
        <span className="text-dark">Tong Diem:</span>
        <span className="text-success">{tongDiem}</span>
    </div>
  )
}
