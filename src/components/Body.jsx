import RestoCards,{promoted} from "./RestoCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURENT_LIST } from "./utils/Constant";
import useOnlinestatus from "./utils/useOnlinestatus";

const Body = () => {
  const [restaurent, setRestaurent] = useState([]);
  const [filteredrestaurent, setFilteredrestsurent] = useState([]);

  const [searchtext, setSearchtext] = useState("");

  const onlineStatus = useOnlinestatus();

  const PromotedCard=promoted(RestoCards)


  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RESTAURENT_LIST);
    const jsondata = await data.json();

    if (
      jsondata?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants === undefined
    ) {
      return fetchdata();
    }
    setRestaurent(
      jsondata?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredrestsurent(
      jsondata?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (onlineStatus === false)
    return (
      <div className="body-container px-5 py-24 max-w-[1200px] mx-auto">
        <div className="card-container">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      </div>
    );

  if (restaurent.length === 0)
    return (
      <div className="body-container px-5 py-24 max-w-[1200px] mx-auto">
        <div className="card-container grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 justify-center items-start mx-auto">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      </div>
    );

  return (
    <div className="body-container  py-24 max-w-[1200px] mx-auto">
      <h2 className="title text-center text-2xl text-gray-800 mb-5">
        Top Restaurants
      </h2>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            const filterdata = restaurent.filter(
              (restaurentfilter) => restaurentfilter.info.avgRatingString > 4.5
            );
            setFilteredrestsurent(filterdata);
          }}
        >
          top rating restaurant
        </button>
        <div className="search_container">
          <input
            type="text"
            placeholder="search"
            className="search_input"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />

          <button
            className="search_btn"
            onClick={() => {
              const filterRestaurent = restaurent.filter((searchfilter) =>
                searchfilter.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              setFilteredrestsurent(filterRestaurent);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="card-container grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 justify-center  mx-auto">
  {filteredrestaurent.map((restaurantlist) =>
    restaurantlist.info.avgRating >=4.5 ? (
      <PromotedCard
        key={restaurantlist.info.id}
        resdata={restaurantlist.info}
      />
    ) : (
      <RestoCards
        key={restaurantlist.info.id}
        resdata={restaurantlist.info}
      />
    )
  )}
</div>
    </div>
  );
};

export default Body;
