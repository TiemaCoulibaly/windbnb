import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Footer from "./components/Footer";
import StayCard from "./components/StayCard";
import stays from "./stays.json";

const App = () => {
	const useStyles = makeStyles({
		container: {
			display: "flex",
			justifyContent: "space-around",
			marginTop: "50px",
		},
		containerTitle: {
			display: "flex",
			justifyContent: "space-between",
			margin: "0px 50px 0px",
		},
		logoTriangle: {
			width: "21.65px",
			height: "18.75px",
		},
		logo: {
			width: "69px",
			height: "14px",
		},

		inputGuest: {
			width: "70px",
			height: "18px",
		},
		select: {
			appearance: "none",
			width: "100px",
			height: "29px",
			paddingLeft: "15px",
			border: "1px solid #F2F2F2",
			borderTopLeftRadius: "16px",
			borderBottomLeftRadius: "16px",
			boxShadow: "0px 1px 6px #EAEBED",
		},
		option: {},
		guest: {
			appearance: "none",
			width: "100px",
			height: "25px",
			border: "1px solid #F2F2F2",
			boxShadow: "0px 1px 6px #EAEBED",
			paddingLeft: "15px",
			color: "red",
		},
		button: {
			paddingBottom: "3px",
			height: "29px",
			width: "40px",
			borderTopRightRadius: "16px",
			borderBottomRightRadius: "16px",
			border: "1px solid #F2F2F2",
			boxShadow: "0px 1px 6px #EAEBED",
			backgroundColor: "white",
		},
	});
	const classes = useStyles();

	const options = [
		{
			value: "All Stay",
			label: "All Stay",
		},
		{
			value: "Helsinki",
			label: "Helsinki",
		},
		{
			value: "Poland",
			label: "Poland",
		},
		{
			value: "Brewski",
			label: "Brewski",
		},
	];
	return (
		<>
			<div className={classes.container}>
				<img
					className={classes.logo}
					src="./images/logo.png"
					alt="logo"
				/>
				<div>
					<select className={classes.select}>
						{options.map((option) => (
							<option className={classes.option}>
								{option.label}
							</option>
						))}
					</select>
					<input
						className={classes.guest}
						placeholder="Add Guest"
						type="text"
					/>
					<button className={classes.button}>
						<SearchIcon
							style={{ color: "#EB5757", fontSize: "15px" }}
						/>
					</button>
				</div>
			</div>
			<div className={classes.containerTitle}>
				<h2>Stays in Finland</h2>
				<p>12+ stays</p>
			</div>
			<Box display="flex" flexWrap="wrap">
				{stays.map((stay) => (
					<StayCard {...stay} />
				))}
			</Box>

			<Footer />
		</>
	);
};

export default App;
