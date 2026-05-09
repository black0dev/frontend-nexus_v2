export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // in seconds
  coverUrl: string;
  audioUrl: string;
  genre: string;
  lyrics?: { time: number; text: string }[];
  isDownloaded?: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  songs: string[]; // Song IDs
  coverUrl: string;
  isCollaborative: boolean;
  isPublic: boolean;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genres: string[];
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  color: string;
}
