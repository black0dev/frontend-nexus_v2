import { Song, Artist, Category, Playlist } from './types';

export const MOCK_SONGS: Song[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    duration: 243,
    coverUrl: 'https://picsum.photos/seed/m83/400/400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    genre: 'Synthpop',
    lyrics: [
      { time: 0, text: "Waiting in a car" },
      { time: 5, text: "Waiting for a ride in the dark" },
      { time: 10, text: "At night the city grows" },
      { time: 15, text: "Look at the horizon line" },
    ]
  },
  {
    id: '2',
    title: 'Starboy',
    artist: 'The Weeknd',
    album: 'Starboy',
    duration: 230,
    coverUrl: 'https://picsum.photos/seed/weeknd/400/400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    genre: 'R&B'
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: 203,
    coverUrl: 'https://picsum.photos/seed/dualipa/400/400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    genre: 'Pop'
  },
  {
    id: '4',
    title: 'Tusa',
    artist: 'Karol G, Nicki Minaj',
    album: 'KG0516',
    duration: 200,
    coverUrl: 'https://picsum.photos/seed/tusa/400/400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    genre: 'Reggaeton'
  }
];

export const MOCK_ARTISTS: Artist[] = [
  { id: '1', name: 'The Weeknd', imageUrl: 'https://picsum.photos/seed/artist1/400/400', genres: ['R&B', 'Pop'], bio: '' },
  { id: '2', name: 'Dua Lipa', imageUrl: 'https://picsum.photos/seed/artist2/400/400', genres: ['Pop'], bio: '' },
  { id: '3', name: 'Bad Bunny', imageUrl: 'https://picsum.photos/seed/artist3/400/400', genres: ['Reggaeton', 'Trap'], bio: '' }
];

export const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Trends', image: 'https://picsum.photos/seed/trends/400/400', color: '#ff4e00' },
  { id: '2', name: 'Latin Hits', image: 'https://picsum.photos/seed/latin/400/400', color: '#ffcd00' },
  { id: '3', name: 'Rock', image: 'https://picsum.photos/seed/rock/400/400', color: '#4a4a4a' },
  { id: '4', name: 'Electronic', image: 'https://picsum.photos/seed/electronic/400/400', color: '#00ffcc' }
];

export const MOCK_PLAYLISTS: Playlist[] = [
  {
    id: 'p1',
    name: 'Top 50 Global',
    description: 'The most played tracks in the world.',
    ownerId: 'system',
    songs: ['1', '2', '3'],
    coverUrl: 'https://picsum.photos/seed/playlist1/400/400',
    isCollaborative: false,
    isPublic: true
  }
];
