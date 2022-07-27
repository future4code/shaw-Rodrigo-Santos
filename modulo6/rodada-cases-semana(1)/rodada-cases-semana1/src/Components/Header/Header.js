import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../Routes/coordinator";
import { ContainerHeader, Title } from "./styled";

const Header = ({ title, back }) => {
  const navigate = useNavigate();
  return (
    <ContainerHeader>
      { back && <ArrowBackIosNew onClick={() => goToBack(navigate)}/>}
      <Title>{title}</Title>
    </ContainerHeader>
  );
};

export default Header;
