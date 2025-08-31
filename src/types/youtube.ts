export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
  duration: string
  publishedAt: string
  viewCount: string
  likeCount: string
  tags?: string[]
}

export interface YouTubePlaylist {
  id: string
  title: string
  description: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
  videoCount: number
  publishedAt: string
  videos?: YouTubeVideo[]
}

export interface YouTubeChannel {
  id: string
  title: string
  description: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
  subscriberCount: string
  videoCount: string
  viewCount: string
}

export interface YouTubeApiResponse<T> {
  items: T[]
  nextPageToken?: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export interface PlaylistsByClass {
  [key: string]: YouTubePlaylist[]
}