exports.index = function(req, res) {
 res.render('news.twig')
}
// exports.index = function(req, res) {
// 	let content = {
// 		news: [
// 		{
// 			id: 1,
// 			url: '//image/img-1.jpg',
// 			title: 'news 1'
// 		},
// 		{
// 			id: 2,
// 			url: '//image/img-1.jpg',
// 			title: 'news 2'
// 		}
// 	]
// 	}

// 	res.json(content)
// }