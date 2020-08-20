export const customThemes = {
	'Black & White': {
		backgroundColor: "#fff",
		color: "#000"
	},
	'Burn Out': {
		backgroundColor: "#FCD215",
		color: "#000"
	},
	'White & Black': {
		color: "#fff",
		backgroundColor: "#000"
	},
	'Reverse Burn Out': {
		color: "#FCD215",
		backgroundColor: "#000"
	},
	'Red & Yellow': {
		color: "red",
		backgroundColor: "yellow"
	},
	'Dream': {
		color: "#e7abec",
		backgroundColor: "#3f1366"
	}
}

export const streamingProviders = {
	"netflix": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876157/StreamingProviders/netflix_y2uaj8.png",
	"amazonprimevideo": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876156/StreamingProviders/amazonprimevideo_bcmcnh.png",
	"hotstar": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876157/StreamingProviders/hotstar_iufttd.png",
	"voot": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876158/StreamingProviders/voot_vop726.png",
	"viu": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876158/StreamingProviders/viu_jonotn.png",
	"jiocinema": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876158/StreamingProviders/jiocinema_bwmppy.png",
	"zee5": "https://res.cloudinary.com/ashwamegh/image/upload/v1597931341/StreamingProviders/zee5_j4iaqa.png",
	"itunes": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876157/StreamingProviders/itunes_eero4y.png",
	"erosnow": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876156/StreamingProviders/erosnow_mrkbni.png",
	"play": "https://res.cloudinary.com/ashwamegh/image/upload/v1597930057/StreamingProviders/playmovies_su34x8.png",
	"mubi": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876157/StreamingProviders/mubi_dpsjug.png",
	"appletvplus": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876156/StreamingProviders/appletvplus_zpbb8t.png",
	"sonyliv": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876158/StreamingProviders/sonyliv_tz6o9c.jpg",
	"youtube": "https://res.cloudinary.com/ashwamegh/image/upload/v1597929605/StreamingProviders/youtube_aslrrc.png",
	"guidedoc": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876157/StreamingProviders/guidedoc_npsuws.png",
	"netflixkids": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876157/StreamingProviders/netflixkids_i0r66m.png",
	"tubitv": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876159/StreamingProviders/tubi_twhq9v.png",
	"bookmyshow": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876156/StreamingProviders/bookmyshow_lswkjh.png",
	"yupptv": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876159/StreamingProviders/yupptv_f8fgf5.png",
	"sunnxt": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876158/StreamingProviders/sunnxt_kbovlx.png",
	"crunchyroll": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876156/StreamingProviders/crunchyroll_le71uk.png",
	"hoichoi": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876157/StreamingProviders/hoichoi_tjse9f.png",
	"altbalaji": "https://res.cloudinary.com/ashwamegh/image/upload/v1597876156/StreamingProviders/altbalaji_nyiebr.png"
}

export function randomNumber(min, max) {  
	return Math.floor(
		Math.random() * (max - min + 1) + min
	)
}