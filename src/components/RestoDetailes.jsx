import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useResDetailes from "./utils/useResDetailes";

const RestoDetailes = () => {
  const { resid } = useParams();

  const resDetailes = useResDetailes(resid);

  if (resDetailes === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, slugs, address, contact, openingHours } =
    resDetailes.cards[2].card.card.info;
  const itemcardlist =
    resDetailes?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards ||
    resDetailes?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.itemCards ||
    [];

  return (
    <div className="restocard">
      <div className="restocard-info">
        <h2 className="restocard-name">{name}</h2>
        <p className="restocard-cuisines">
          <strong>Cuisines:{cuisines.join(", ")}</strong>
        </p>
        <p className="restocard-rating">
          <strong>Rating:{avgRating}</strong> ⭐ / 5
        </p>
        <p className="restocard-address">
          <strong>Address:{slugs.restaurant + " " + slugs.city}</strong>{" "}
        </p>

        <h3 className="restocard-menu-title">Menu</h3>
        <ul className="restocard-menu">
          {itemcardlist.length > 0 ? (
            itemcardlist.map((item) => (
              <li className="menu-item" key={item.card.info.id}>
                <span className="menu-item-name">{item.card.info.name}</span>
                <span className="menu-item-price">
                  Rs{item.card.info.price / 100}
                </span>
              </li>
            ))
          ) : (
            <li> no more detailes</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestoDetailes;
