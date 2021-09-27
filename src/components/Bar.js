import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typeography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { fontSize } from "@mui/system";

const Bar = () => {
	const useStyles = makeStyles((themes) => ({
		appBar: {
			backgroundColor: "#fff",
		},
		hero: {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../img/glassCodeHack.jpg')`,
			height: "500px",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			position: "relative",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: "#fff",
			fontSize: "4rem",
		},
	}));

	const classes = useStyles();

	return (
		<>
			<div>
				<AppBar className={classes.appBar} position='static'>
					<Toolbar>
						<Typeography variant='h6' color='default'>
							Blog
						</Typeography>
					</Toolbar>
				</AppBar>
				<Box className={classes.hero}>
					<Box>React Blog</Box>
				</Box>
			</div>
		</>
	);
};

export default Bar;
