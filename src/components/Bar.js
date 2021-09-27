import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import { Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "#515c56",
	},
	hero: {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
		height: "500px",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#49d5ff",
		fontSize: "4rem",
		[theme.breakpoints.down("sm")]: {
			height: 300,
			fontSize: "3em",
		},
	},
	blogsContainer: {
		paddingTop: theme.spacing(3),
	},
	blogTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: "100%",
	},
	media: {
		height: 240,
	},
	cardActions: {
		display: "flex",
		margin: "0 10px",
		justifyContent: "space-between",
	},
	author: {
		display: "flex",
	},
	paginationContainer: {
		display: "flex",
		justifyContent: "center",
	},
}));

const Bar = () => {
	const classes = useStyles();
	return (
		<div className='App'>
			<AppBar className={classes.appBar} position='static'>
				<Toolbar>
					<Typography variant='h6' color='primary'>
						DevBlog_
					</Typography>
				</Toolbar>
			</AppBar>
			<Box className={classes.hero}>
				<Box>
					Eleet Developers
					<Typography variant='h6' color='default'>
						Open your mind to a world of possibilities.
					</Typography>
				</Box>
			</Box>
			<Container maxWidth='lg' className={classes.blogsContainer}>
				<Typography variant='h4' className={classes.blogTitle}>
					Articles
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
									>
										Competitive Speed Typing
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Odio, excepturi neque
										distinctio adipisci a voluptatem ipsam
										nihil quis odit tenetur facere
										voluptatibus et incidunt laudantium
										reiciendis, natus corporis ducimus eos.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
									<Box ml={2}>
										<Typography
											variant='subtitle2'
											component='p'
										>
											Evereth Argon
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'
										>
											September 27 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
							<Button
								size='small'
								href='https://twitter.com/login'
							>
								Share on twitter
							</Button>
							<Button
								size='small'
								href='https://facebook.com/login'
							>
								Share on facebook
							</Button>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=825&q=80'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
									>
										Remote Developers
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Odio, excepturi neque
										distinctio adipisci a voluptatem ipsam
										nihil quis odit tenetur facere
										voluptatibus et incidunt laudantium
										reiciendis, natus corporis ducimus eos.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='https://images.unsplash.com/photo-1508643315917-6688bbbb4cb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80' />
									<Box ml={2}>
										<Typography
											variant='subtitle2'
											component='p'
										>
											Ardon Wild
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'
										>
											September 29 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
							<Button
								size='small'
								href='https://twitter.com/login'
							>
								Share on twitter
							</Button>
							<Button
								size='small'
								href='https://facebook.com/login'
							>
								Share on facebook
							</Button>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
									>
										Digital Nomad (The Developer)
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Odio, excepturi neque
										distinctio adipisci a voluptatem ipsam
										nihil quis odit tenetur facere
										voluptatibus et incidunt laudantium
										reiciendis, natus corporis ducimus eos.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80' />
									<Box ml={2}>
										<Typography
											variant='subtitle2'
											component='p'
										>
											Rida Forester
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'
										>
											October 2 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
							<Button
								size='small'
								href='https://twitter.com/login'
							>
								Share on twitter
							</Button>
							<Button
								size='small'
								href='https://facebook.com/login'
							>
								Share on facebook
							</Button>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
									>
										Books on Web Development
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Odio, excepturi neque
										distinctio adipisci a voluptatem ipsam
										nihil quis odit tenetur facere
										voluptatibus et incidunt laudantium
										reiciendis, natus corporis ducimus eos.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='https://images.unsplash.com/photo-1599507593548-0187ac4043c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' />
									<Box ml={2}>
										<Typography
											variant='subtitle2'
											component='p'
										>
											Jiron Elthy
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'
										>
											October 9 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
							<Button
								size='small'
								href='https://twitter.com/login'
							>
								Share on twitter
							</Button>
							<Button
								size='small'
								href='https://facebook.com/login'
							>
								Share on facebook
							</Button>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='https://images.unsplash.com/photo-1622050756792-5b1180bbb873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
									>
										Front End Development
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Odio, excepturi neque
										distinctio adipisci a voluptatem ipsam
										nihil quis odit tenetur facere
										voluptatibus et incidunt laudantium
										reiciendis, natus corporis ducimus eos.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
									<Box ml={2}>
										<Typography
											variant='subtitle2'
											component='p'
										>
											Eric Hetheway
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'
										>
											October 12 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
							<Button
								size='small'
								href='https://twitter.com/login'
							>
								Share on twitter
							</Button>
							<Button
								size='small'
								href='https://facebook.com/login'
							>
								Share on facebook
							</Button>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='https://images.unsplash.com/photo-1566837945700-30057527ade0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
									>
										The World of Programming
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Odio, excepturi neque
										distinctio adipisci a voluptatem ipsam
										nihil quis odit tenetur facere
										voluptatibus et incidunt laudantium
										reiciendis, natus corporis ducimus eos.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='https://images.unsplash.com/photo-1548691905-57c36cc8d935?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80' />
									<Box ml={2}>
										<Typography
											variant='subtitle2'
											component='p'
										>
											James Barton
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'
										>
											October 20 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
							<Button
								size='small'
								href='https://twitter.com/login'
							>
								Share on twitter
							</Button>
							<Button
								size='small'
								href='https://facebook.com/login'
							>
								Share on facebook
							</Button>
						</Card>
					</Grid>
				</Grid>

				<Box my={4} className={classes.paginationContainer}>
					<Pagination count={10} />
				</Box>
			</Container>
		</div>
	);
};

export default Bar;
