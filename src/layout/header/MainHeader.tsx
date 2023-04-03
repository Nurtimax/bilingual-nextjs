import {
  AppBar,
  Box,
  Container,
  styled,
  StyledComponentProps,
  Theme,
} from "@mui/material";
import { FC } from "react";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = ({}) => {
  return (
    <StyledMainHeader>
      <Container>
        <h1>Header4</h1>
      </Container>
    </StyledMainHeader>
  );
};

export default MainHeader;

const StyledMainHeader: React.FC<
  StyledComponentProps<"root", {}, {}, never> & { theme?: Theme }
> = styled(AppBar)(() => ({}));