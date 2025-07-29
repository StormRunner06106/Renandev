export interface BlueskyPost {
  post: {
    uri: string;
    author: {
      handle: string;
      displayName: string;
      avatar: string;
    };
    record: {
      text: string;
      createdAt: string;
    };
    embed?: {
      $type: string;
      images?: Array<{
        thumb: string;
        fullsize: string;
        alt: string;
        aspectRatio: {
          width: number;
          height: number;
        };
      }>;
      external?: {
        uri: string;
        title: string;
        description: string;
        thumb?: string;
      };
    };
    indexedAt: string;
    likeCount: number;
    replyCount: number;
    repostCount: number;
  };
}
