import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Button, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const StayCard = ({ title, rating, type, beds, photo, superHost, city }) => {
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
			<Grid container item lg={4} md={3} className={classes.container}>
				<Card className={classes.card}>
					<img
						className={classes.image}
						src={photo}
						alt="apartemnt"
					/>
					<CardContent className={classes.contentCard}>
						{superHost ? (
							<Button
								className={classes.button}
								variant="outlined">
								Super Host
							</Button>
						) : null}

						<span className={classes.type}>
							{type}
							{" . "}
							{beds ? beds + " beds" : null}
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
					<Typography variant="subtitle1">
						<span className={classes.titleCard}>{title}</span>
					</Typography>
				</Card>
			</Grid>
		</>
	);
};

export default StayCard;
