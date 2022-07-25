import { BoxInformTimePrice, ContainerCardsRestaurantDetails, ImageRestaurants, Inform, NameRestaurant } from './styled'
import { useNavigate } from 'react-router-dom'

const CardsRestaurantDetails = ({ restaurant }) => {
    const navigate = useNavigate()
    return (
        <ContainerCardsRestaurantDetails >
            <ImageRestaurants src={restaurant.logoUrl} />
            <NameRestaurant>{restaurant.name}</NameRestaurant>
            <Inform>{restaurant.category}</Inform>
            <BoxInformTimePrice>
                <Inform>{restaurant.deliveryTime}</Inform>
                <Inform>{restaurant.shipping}</Inform>
            </BoxInformTimePrice>
            <Inform>{restaurant.address}</Inform>
        </ContainerCardsRestaurantDetails>
    )
}
export default CardsRestaurantDetails