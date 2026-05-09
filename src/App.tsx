/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Player } from './components/Player';
import { Equalizer } from './components/Equalizer';
import { MOCK_SONGS, MOCK_CATEGORIES, MOCK_ARTISTS } from './constants';
import { useMusicPlayer } from './hooks/useMusicPlayer';
import { useAuth } from './lib/AuthContext';
import { AnimatePresence } from 'motion/react';
import { HomeView } from './components/views/HomeView';
import { FavoritesView } from './components/views/FavoritesView';
import { DJModeView } from './components/views/DJModeView';
import { DownloadsView } from './components/views/DownloadsView';
import { LoginView } from './components/views/LoginView';
import { RegisterView } from './components/views/RegisterView';
import { SearchView } from './components/views/SearchView';
import { HistoryView } from './components/views/HistoryView';
import { CollaborativeView } from './components/views/CollaborativeView';
import { RecommendationsView } from './components/views/RecommendationsView';
import { TrendsView } from './components/views/TrendsView';
import { ArtistView } from './components/views/ArtistView';
import { LyricsOverlay } from './components/LyricsOverlay';
import { Song, Artist } from './types';

export default function App() {
  const { 
    currentSong, 
    isPlaying, 
    progress, 
    duration, 
    volume, 
    setVolume, 
    togglePlay, 
    nextTrack, 
    prevTrack, 
    seek, 
    playSong 
  } = useMusicPlayer(MOCK_SONGS);

  const { user } = useAuth();

  const [currentView, setCurrentView] = useState('home');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEq, setShowEq] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [djMode, setDjMode] = useState(false);
  const [downloadedIds] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleDj = () => {
    const newDjMode = !djMode;
    setDjMode(newDjMode);
    if (newDjMode) {
      setCurrentView('dj');
    } else if (currentView === 'dj') {
      setCurrentView('home');
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query && currentView !== 'search') {
      setCurrentView('search');
    }
  };

  const filteredSongs = MOCK_SONGS.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    setCurrentView('artist');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView 
            songs={MOCK_SONGS} 
            categories={MOCK_CATEGORIES} 
            artists={MOCK_ARTISTS} 
            onPlaySong={playSong} 
            onArtistClick={handleArtistClick}
            searchQuery={searchQuery}
            onSeeAllTrends={() => setCurrentView('trends')}
          />
        );
      case 'artist':
        return selectedArtist ? (
          <ArtistView 
            artist={selectedArtist} 
            songs={MOCK_SONGS} 
            onPlaySong={playSong} 
          />
        ) : null;
      case 'favorites':
        return (
          <FavoritesView 
            likedSongs={MOCK_SONGS.slice(0, 3)} 
            onPlaySong={playSong}
          />
        );
      case 'search':
        return (
          <SearchView 
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            results={filteredSongs}
            categories={MOCK_CATEGORIES}
            onPlaySong={playSong}
          />
        );
      case 'dj':
        return (
          <DJModeView 
            songs={MOCK_SONGS} 
            currentSong={currentSong} 
            onPlaySong={playSong}
          />
        );
      case 'downloads':
        return (
          <DownloadsView 
            downloadedSongs={MOCK_SONGS.filter(s => downloadedIds.has(s.id))}
            onPlaySong={playSong}
          />
        );
      case 'history':
        return (
          <HistoryView 
            songs={MOCK_SONGS}
            onPlaySong={playSong}
          />
        );
      case 'collaborative':
        return (
          <CollaborativeView 
            songs={MOCK_SONGS}
            onPlaySong={playSong}
          />
        );
      case 'recommendations':
        return (
          <RecommendationsView 
            songs={MOCK_SONGS} 
            artists={MOCK_ARTISTS}
            onPlaySong={playSong}
            onArtistClick={handleArtistClick}
          />
        );
      case 'trends':
        return (
          <TrendsView 
            songs={MOCK_SONGS}
            onPlaySong={playSong}
          />
        );
      default:
        return <HomeView songs={MOCK_SONGS} categories={MOCK_CATEGORIES} artists={MOCK_ARTISTS} onPlaySong={playSong} searchQuery={searchQuery} onSeeAllTrends={() => setCurrentView('trends')} />;
    }
  };

  if (currentView === 'login') {
    return <LoginView onSwitchToRegister={() => setCurrentView('register')} onBack={() => setCurrentView('home')} />;
  }
  if (currentView === 'register') {
    return <RegisterView onSwitchToLogin={() => setCurrentView('login')} onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="flex bg-[#050505] text-[#e0e0e0] h-screen overflow-hidden font-sans">
      <div className={`fixed inset-0 z-50 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex h-full lg:z-0`}>
        <Sidebar 
          currentView={currentView} 
          onViewChange={(view) => {
            setCurrentView(view);
            setIsSidebarOpen(false);
          }} 
        />
        {isSidebarOpen && (
          <div className="lg:hidden absolute inset-0 bg-black/60 z-[-1]" onClick={() => setIsSidebarOpen(false)} />
        )}
      </div>
      
      <main className="flex-1 flex flex-col h-full bg-[#050505] relative min-w-0 overflow-hidden">
        <TopBar 
          djMode={djMode} 
          onToggleDj={handleToggleDj} 
          onAuthClick={() => setCurrentView('login')}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {renderView()}
        </div>
      </main>

      <AnimatePresence>
        {currentSong && currentView !== 'dj' && (
          <Player 
            currentSong={currentSong}
            isPlaying={isPlaying}
            progress={progress}
            duration={duration}
            volume={volume}
            onTogglePlay={togglePlay}
            onVolumeChange={setVolume}
            onSeek={seek}
            onNext={nextTrack}
            onPrev={prevTrack}
            onShowLyrics={() => setShowLyrics(true)}
            onShowEq={() => setShowEq(true)}
          />
        )}
        {showEq && (
          <Equalizer onClose={() => setShowEq(false)} />
        )}
        {currentSong && (
          <LyricsOverlay 
            isOpen={showLyrics} 
            onClose={() => setShowLyrics(false)} 
            song={currentSong} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

