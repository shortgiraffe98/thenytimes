import mysql from "mysql";

// database details
const dbNews = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "yourpassword",
	database: "thenytimes"
});

// connect to database
dbNews.connect((err) => {
	if(err) {
		throw err; 
	}
	console.log('The new york times connectred');
});

export const getAllNews = (req, res) => {
	let sql = `
		select json_object(
			'newsId',n.newsId,
			'isDisplayed',n.isDisplayed,
			'posts',(SELECT IFNULL((
									SELECT CONCAT('[',
										GROUP_CONCAT(
											JSON_OBJECT(
												'post_id',p.post_id,
												'title',p.title,
												'content',(SELECT IFNULL((
													SELECT CONCAT('[',
													GROUP_CONCAT(
														JSON_OBJECT(
															'h1',h1,
															'h2',h2,
															'h3',h3,
															'p',p)
													),
												']') from content_of_post where post_id = p.post_id), '[]')),
												'created_at', p.created_at,
												'minute_to_read', p.minute_to_read)),
									']')
								from posts_of_news p where news_id = n.newsId), '[]')),
			'nums_of_sub_post',n.nums_of_sub_post,
			'postSize',n.displayType,
			'section',n.section,
			'columnist',n.columnist,
			'videoUrls',n.videoUrls,
			'short_discription',n.short_discription,
			'long_discription',n.long_discription,
			'imageUrls',n.imageUrls
		) as json from ${'`news`'} n WHERE isDisplayed = 1 ORDER BY id DESC;
	`;
	let query = dbNews.query(sql, (err, results) => {
		if(err) throw err;
		var formattedResults = results.map((row) => {
			var parent = JSON.parse(row.json);
			parent.isDisplayed = parent.isDisplayed !== 0;
			parent.posts = JSON.parse(parent.posts);
			parent.imageUrls = JSON.parse(parent.imageUrls);
			parent.videoUrls = JSON.parse(parent.videoUrls);
			parent.posts.map((post) => {
				// console.log(post.content);
				post.content = JSON.parse(post.content);
				post.content.map((item) => item.p = JSON.parse(item.p));
			});
			return parent;
		});
		res.json(formattedResults);
	})
};

// turn on off display status
export const turnOnOffDisplay = (req, res) => {
	const params = req.params;
	const urlQuery = req.query;
	console.log({ params, urlQuery});
	let sql = `UPDATE ${"`news`"} SET isDisplayed = ${Number(urlQuery.query)} WHERE ${"`news`"}.newsId = '${params.id}'`;
	let query = dbNews.query(sql, (err) => {
		if(err) throw err;
		res.json({message:`turn ${Number(urlQuery.query)===0?"off":"on"}`});
	});
};

// get single news
export const getSingleNews = (req, res) => {
	const { id } = req.params;
	let sql = `SELECT * FROM ${'`news`'} WHERE newsId = '${id}';`;
	let query = dbNews.query(sql, (err, results) => {
		if(err) throw err;
		var formattedResults = results.map((row) => {
			row.isDisplayed = row.isDisplayed !== 0;
			row.imageUrls = JSON.parse(row.imageUrls);
			return row;
		});
		res.json(formattedResults[0]);
	})
};

// add new news
export const addNewNews = (req, res) => {
	let sql = ["INSERT INTO `news` (`id`, `newsId`, `isDisplayed`, `nums_of_sub_post`, `displayType`, `section`, `columnist`, `imageUrls`, `videoUrls`, `short_discription`, `long_discription`) VALUES (NULL, 'SP000001', '1', '1', 'large', 'style', 'Oliver Contreras', '[\"https://static01.nyt.com/images/2023/01/17/multimedia/17china-population-mktl/17china-population-mktl-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale\"]', '[\"https://vp.nyt.com/video/2023/01/15/105565_1_16rattner-video_wg_720p.mp4\"]', 'America’s Must-Win Semiconductor War', 'A Year After a Fiery Voting Rights Speech, Biden Delivers a Muted Address');",
	"INSERT INTO `posts_of_news` (`id`, `post_id`, `title`, `created_at`, `minute_to_read`, `news_id`) VALUES (NULL, 'SP000001-01', 'Population Falls in China, Heralding a Demographic Crisis', current_timestamp(), '5', 'SP000001');",
	"INSERT INTO `content_of_post` (`id`, content_id, `h1`, `h2`, `h3`, `p`, post_id) VALUES (NULL, 'SP000001-01-01', '', '', '', '[\"Deaths outnumbered births last year for the first time in six decades. Experts see major implications for China, its economy and the world.\"]', 'SP000001-01');","INSERT INTO `posts_of_news` (`id`, `post_id`, `title`, `created_at`, `minute_to_read`, `news_id`) VALUES (NULL, 'SP000001-02', 'China’s Economy Stumbled Last Year, With Covid Lockdowns Hobbling Growth', current_timestamp(), '6', 'SP000001');",
	"INSERT INTO `content_of_post` (`id`, content_id, `h1`, `h2`, `h3`, `p`, post_id) VALUES (NULL, 'SP000001-02-01', '', '', '', '[\"New government data shows that growth for the year fell far short of Beijing’s goal. With the pandemic’s course uncertain, hope and fear cloud the forecast.\"]', 'SP000001-01');"];
	const query = sql.map((sqlquery)=>dbNews.query(sqlquery));
	Promise.all(query).then(values => {
		res.json({ message: "new york times new news added"});
	});
};
