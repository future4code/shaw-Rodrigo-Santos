import {
  BoxInformTimePrice,
  ContainerCardRestaurantDetails,
  ImageRestaurant,
  Inform,
  InformTimePrice,
  NameRestaurant,
} from "./styled";
import { useNavigate } from "react-router-dom";

const CardRestaurantDetails = ({ restaurant }) => {
  const navigate = useNavigate();
  return (
    <ContainerCardRestaurantDetails>
      <ImageRestaurant src={restaurant.logoUrl} />
      <NameRestaurant>{restaurant.name}</NameRestaurant>
      <Inform>{restaurant.category}</Inform>
      <BoxInformTimePrice>
        <InformTimePrice>{restaurant.deliveryTime}</InformTimePrice>
        <InformTimePrice>{restaurant.shipping}</InformTimePrice>
      </BoxInformTimePrice>
      <Inform>{restaurant.address}</Inform>
    </ContainerCardRestaurantDetails>
  );
};
export default CardRestaurantDetails;
