import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typeography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Bar = () => {
	const useStyles = makeStyles((themes) => ({
		appBar: {
			backgroundColor: "#fff",
		},

	}));

	const classes = useStyles();

	return (
		<>
			<div>
				<AppBar className={classes.appBar} position='static'>
					<Toolbar>
						<Typeography variant='h6'>
							Blog
						</Typeography>
					</Toolbar>
				</AppBar>
                <Box className={classes.hero}>
                    <Box>
                        React Blog
                    </Box>
                </Box>
			</div>
		</>
	);
};

export default Bar;
