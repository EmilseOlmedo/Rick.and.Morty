import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";

const Favorites = ()=> {
    const {myFavorites} = useSelector ((state) => state)
    return (
      //en vez de hacer el map puedo importar Cards y pasar entre <di> solamente:
      // <Cards characters={myFavorites}/>
        <div>
                {myFavorites?.map((favorite) => {
                  return (
                    <Card
                        key={favorite.id}
                        id={favorite.id}
                        name={favorite.name}
                        image={favorite.image}
                    />
                  )
                })}
        </div>
    )
}

export default Favorites;

/*{props.onClose ? (
          <button
            className={style.borrarBtn}
            onClick={() => {
              if (isFav) props.removeFav(props.id);
              props.onClose(props.id);
            }}
          >
            ❌
          </button>
        ) : null}*/
