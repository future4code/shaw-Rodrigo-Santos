import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../Routes/coordinator";
import {
  BoxInformTimePrice,
  ContainerCardRestaurant,
  ImageRestaurant,
  InformTimePrice,
  NameRestaurant,
} from "./styled";

const CardRestaurant = ({ restaurant }) => {
  const navigate = useNavigate();
  return (
    <ContainerCardRestaurant onClick={()=> goToRestaurant(navigate, restaurant.id)}>
      <ImageRestaurant src={restaurant.logoUrl} alt={`Logo ${restaurant.name}`}/>
      <NameRestaurant>{restaurant.name} </NameRestaurant>
      <BoxInformTimePrice>
        <InformTimePrice>{restaurant.deliveryTime}</InformTimePrice>
        <InformTimePrice>{restaurant.shipping}</InformTimePrice>
      </BoxInformTimePrice>
    </ContainerCardRestaurant>
  );
};

export default CardRestaurant;
