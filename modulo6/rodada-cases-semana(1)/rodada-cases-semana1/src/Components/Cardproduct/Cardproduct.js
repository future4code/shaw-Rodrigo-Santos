import React, { useState } from "react"
import ModalSelectQuantity from "../Modal/ModalSelectQuantity"
import { BoxInform, BoxInformPriceButton, BoxNameQuantity, ContainerCardProduct, ImageProduct, InformButton, InformDescription, InformPrice, NameProduct } from "./styled"


const CardProduct = ({ product }) => {
    const [showModal, setShowModal]= useState(false)

    return (
        <ContainerCardProduct>
            <ImageProduct src={product.photoUrl && product.photoUrl} />
            <BoxInform>
                <BoxNameQuantity>
                    <NameProduct>{product && product.name}</NameProduct>
                </BoxNameQuantity>
                <InformDescription>
                    {product && product.description}
                </InformDescription>
                <BoxInformPriceButton>
                    <InformPrice>
                        {product.price}
                    </InformPrice>
                    <InformButton onClick={()=> setShowModal(true)}>
                        Adicionar
                    </InformButton>
                </BoxInformPriceButton>
                <ModalSelectQuantity open={showModal} setOpen={setShowModal}/>
            </BoxInform>
        </ContainerCardProduct>
    )

}
export default CardProduct