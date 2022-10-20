export type InstagramPost = {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  thumbnailUrl?: string;
  timestamp: string;
  children?: [id: string, mediaUrl: string, mediaType: string];
  username?: string; // Custom field not provided by Behold's API
};

export const fetchInstagramPosts = async () => {
  const feed1Posts = await fetchBeholdFeed(
    import.meta.env.BEHOLD_FEED_URL_1,
    'billismusic'
  );
  const feed2Posts = await fetchBeholdFeed(
    import.meta.env.BEHOLD_FEED_URL_2,
    'uniqueabstracts'
  );

  const combinedPosts = feed1Posts.concat(feed2Posts).sort((a, b) => {
    const aDate = new Date(a.timestamp);
    const bDate = new Date(b.timestamp);
    return bDate.getTime() - aDate.getTime();
  });

  return combinedPosts;
};

const fetchBeholdFeed = async (feedUrl: string, username: string) => {
  const response = await fetch(feedUrl);
  const data: InstagramPost[] = await response.json();

  data.forEach((post) => {
    post.username = username;
  });

  return data;
};
