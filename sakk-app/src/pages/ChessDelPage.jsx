import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export const ChessDelPage =()=> {
    const params = useParams();
    const id = params.chessId;
    const navigate=useNavigate();
    const [chess, setChess] = useState([]);
    const [isPending, setPending] = useState(false);
    const [showModal, setShowModal] = useState(false);
    useEffect(()=> {
        setPending(true);
        (async() => {
            try{
                const res = await axios.get(`https://chess.sulla.hu/chess/${id}`);
                setChess(res.data)
            }
            catch(error) {console.log("Hiba: ", error);}
            finally{
                setPending(false);
            }
        })();
    },[id])
    return(
        <>
            <div className="p-5" m-auto text-center content bg-ivory>
            {isPending || !chess.id ?
            <div className="spinner-border text-warning"></div> : 
            <div>
                <h2>Törlendő elem:</h2>
                    <div class="card p-3">
                        <p className="card-title">Sakozó neve: {chess.name}</p>
                        <p className="lead">Születési éve: {chess.birth_date}</p>
                        <p className="load">Nyert világbajnokságai: {chess.world_ch_won}</p>
                        <div className="card-body">
                            <Link to={chess.profil_url}>
                            Profile link
                            </Link><br />
                            <img alt={ chess.name }
                            className="img-fluid"
                            style={{ maxHeight: 200 }}
                            src={ chess.image_url || "https://placehold.co/400x800" } />
                            </div>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                axios.delete(`https://chess.sulla.hu/chess/${id}`)
                                .then(()=> setShowModal(true))
                                .catch((error) => (console.log('Hiba: ',error)))
                            }}>
                                <button type="submit" className="btn btn-danger">Törlés</button>
                            </form>
                    </div>
                </div>};
            </div>
        </>
    )
}