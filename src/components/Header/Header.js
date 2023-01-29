import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { spacing, styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";

const pages = [
  { title: "ホーム", link: "/" },
  { title: "設定", link: "/setting" },
  { title: "コンタクト", link: "/contact" },
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <ContentTitle>大原の部屋</ContentTitle>

          {/*レスポンシブ対応なしの表示 */}
          <LinkBox>
            {pages.map((page) => (
              // <LinkButton key={page}>{page}</LinkButton>
              <Link to={page.link}>
                <LinkButton key={page}>{page.title}</LinkButton>
              </Link>
            ))}
          </LinkBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const ContentTitle = styled(Typography)({
  marginRight: spacing(2),
  display: "flex",
  fontFamily: "monospace",
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
});

const LinkBox = styled(Box)({
  display: "flex",
  flexGrow: 1,
});

const LinkButton = styled(Button)({
  margin: spacing(2, 0),
  color: "white",
  display: "block",
});
export default ResponsiveAppBar;
