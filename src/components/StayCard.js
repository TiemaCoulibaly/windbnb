import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Button, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const StayCard = ({ title, rating, type, bed, photo }) => {
	const useStyles = makeStyles({
		container: {},
		card: {
			width: "395px",
			margin: "20px",
			boxShadow: "none",
		},
		image: {
			width: "100%",
			height: "270px",
			borderRadius: "24px",
		},
		contentCard: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "baseline",
		},
		button: {
			borderRadius: "12px",
			height: "px",
			width: "100px",
			fontSize: "10px",
			fontWeight: 750,
		},
		icon: {
			marginRight: "5px",
			marginTop: "5px",
		},
		type: {
			fontWeight: 500,
			fontSize: "16px",
			color: "#828282",
			marginRight: "30px",
		},
		titleCard: {
			fontWeight: 600,
			fontSize: "17px",
			marginLeft: "15px",
		},
	});
	const classes = useStyles();

	return (
		<>
			<Grid container item lg={3} md={3} className={classes.container}>
				<Card className={classes.card}>
					<img
						className={classes.image}
						src={photo}
						alt="apartemnt"
					/>
					<CardContent className={classes.contentCard}>
						<Button className={classes.button} variant="outlined">
							Super Host
						</Button>

						<span className={classes.type}>
							{" "}
							{type}
							{bed}
						</span>

						<div>
							<StarIcon
								className={classes.icon}
								style={{ color: "#EB5757" }}
								fontSize="small"
							/>
							{rating}
						</div>
					</CardContent>
					<Typography variant="p">
						<span className={classes.titleCard}>{title}</span>
					</Typography>
				</Card>
			</Grid>
		</>
	);
};

export default StayCard;
