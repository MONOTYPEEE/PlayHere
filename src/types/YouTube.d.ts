declare interface YouTubeThumbnail {
    url: string;
    width: number;
    height: number;
}

declare interface YouTubeVideoID {
    kind: string;
    videoId: string;
}

declare interface YouTubeSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: YouTubeThumbnail;
        medium: YouTubeThumbnail;
        high: YouTubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}

declare interface YouTubeVideoItem {
    kind: string;
    etag: string;
    id: YouTubeVideoID;
    snippet: YouTubeSnippet;
}

declare interface YoutubeResponsePageInfo {
    totalResults: number;
    resultsPerPage: number;
}

declare interface YoutubeResponse {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: YoutubeResponsePageInfo;
    items: YouTubeVideoItem[];
}