import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios"

export const ChessSinglePage=()=>{
    const params = useParams();
    const id = params.chessId;
    const [chess, setChess] = useState([])
    const [isPedning, setPending] = useState(false)
}
useEffect(() => {
        setFetchPending(true);
        axios
            .get(`https://chess.sulla.hu/chess/${id}`)
            .then((res)=>setChesses(res.data))
            .catch((error)=> { 
                setHiba(error); 
                console.error("Hiba: ", hiba)})
            .finally(()=> setFetchPending(false))
    },[id]);
    return(
        <div className="p-5" m-auto text-center content bg-ivory>
            {isPending || !chess.id ?
            <div className="spinner-border text-warning"></div> : 
            <div>
                <h2>Sakkozó adatai</h2>
                    <div class="card p-3">
                        <p className="card-title">Sakozó neve: {chess.name}</p>
                        <p className="lead">Születési éve: {chess.birth_date}</p>
                        <p className="load">Nyert világbajnokságai: {chess.world_ch_won}</p>
                        <div className="card-body">
                            <Link to={chess.profil_url}>
                            Profile link
                            </Link><br />
                            <link to={"/"}>
                            <img alt={chess.name} 
                            className="img-fluid"
                            style={{maxHeight:200}}
                            src={chess.image_url || "https://placehold.co/400x800"}/>
                            </link> <br />
                            <Link to={"/"}><i className="bi bi-left-return-arrow"></i></Link>&nbsp;&nbsp;
                            <Link to={"/mod-chess/"+chess.id}><i className="bi bi-pencil"></i></Link>&nbsp;&nbsp;
                            <Link to={"/del-chess/"+chess.id}><i className="bi bi-trash3"></i></Link>
                        </div>
                    </div>
            </div>};
        </div>
    )