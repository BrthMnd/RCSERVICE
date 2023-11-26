/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  changeReload,
} from "../features/modal/moda.slice";
import { useEffect, useState } from "react";

export function ApplyButton({ table }) {
  const [isApplied, setIsApplied] = useState(false);
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers);
  const user = useSelector(state => state.user)
  const HandleClick = async () => {
    
    const url = import.meta.env.VITE_URL_ADD_CANDIDATE;
    console.log(url);
    let data = {
      id: table.id,
      id_ServiceProvider: user.id_provider,
    };
    const res = await ApiPut(url, data);
    
    dispatch(changeReload());
  };
  useEffect(()=>{
    if(table){

      offers.Category.forEach(Father => {
        Father.id_ServiceProvider.forEach((child )=> {
          console.log('Father id offers: '+Father.id_offers._id )
          console.log('table id : '+table.id )
          console.log('child: '+child)
          console.log('User: '+user.id_provider)
          if( child._id == user.id_provider ){
            console.log('se cumplio')
            setIsApplied(true)
          }
        })
      })
    }
  },[isApplied])
  return (
    <>
      <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Aplicar">
        <button
          type="button"
          className={`btn ${isApplied ? "btn-danger" : "btn-success"}`}
          onClick={HandleClick}
        >
          <i class="far fa-check-circle"></i>
          {isApplied ? "Desaplicar" : "Aplicar"}
        </button>
      </span>
    </>
  );
}
