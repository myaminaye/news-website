export type News = {
  source: { id: string | null, name: string },
  author: string | null,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
};

// {
//     "source": {
//         "id": "wired",
//         "name": "Wired"
//     },
//     "author": "Lisa Wood Shapiro",
//     "title": "Plantaform Smart Indoor Garden Review: Rewarding but Risky",
//     "description": "We tested this unique indoor gardening solution that utilizes NASA technology, but air quality data raised concerns.",
//     "url": "https://www.wired.com/review/plantaform-smart-indoor-garden/",
//     "urlToImage": "https://media.wired.com/photos/6846cc404fbb2878931dbfd7/191:100/w_1280,c_limit/Review-%20Plantaform%20Smart%20Indoor%20Garden_.png",
//     "publishedAt": "2025-06-27T05:46:47Z",
//     "content": "It was about a week into my journey as a hydroponic lettuce farmer when I noticed my Mila air purifier, set to auto mode, was running at full blast. Its internal air quality sensor told me the air wa… [+4100 chars]"
// }
