document.addEventListener('DOMContentLoaded', function() {
    // Mobile sidebar toggle functionality
    const sidebarToggleBtn = document.querySelector('button[aria-controls="sidebarMenu"]');
    const sidebarMenu = document.getElementById('sidebarMenu');
    
    if (sidebarToggleBtn && sidebarMenu) {
        // Toggle sidebar visibility
        function toggleSidebar() {
            sidebarMenu.classList.toggle('-translate-x-full');
            sidebarMenu.classList.toggle('translate-x-0');
        }
        
        // Close sidebar
        function closeSidebar() {
            sidebarMenu.classList.remove('translate-x-0');
            sidebarMenu.classList.add('-translate-x-full');
        }
        
        // Add event listeners
        sidebarToggleBtn.addEventListener('click', toggleSidebar);
        
        // Close sidebar when close button is clicked
        const sidebarCloseBtn = sidebarMenu.querySelector('button[aria-label="Close"]');
        if (sidebarCloseBtn) {
            sidebarCloseBtn.addEventListener('click', closeSidebar);
        }
        
        // Close sidebar when clicking outside of it
        document.addEventListener('click', function(event) {
            // Check if sidebar is open and click is outside sidebar
            if (!sidebarMenu.classList.contains('-translate-x-full') && 
                !sidebarMenu.contains(event.target) && 
                event.target !== sidebarToggleBtn && 
                !sidebarToggleBtn.contains(event.target)) {
                closeSidebar();
            }
        });
        
        // Close sidebar when pressing Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !sidebarMenu.classList.contains('-translate-x-full')) {
                closeSidebar();
            }
        });
    }
    
    // Custom toast functionality
    function showToast(toastEl, duration = 3000) {
        if (!toastEl) return;
        
        // Add classes to show toast
        toastEl.classList.remove('hidden');
        toastEl.classList.add('flex', 'flex-col');
        
        // Auto-hide after duration
        setTimeout(() => {
            toastEl.classList.add('hidden');
            toastEl.classList.remove('flex', 'flex-col');
        }, duration);
    }

    // Play button functionality
    const playButtons = document.querySelectorAll('.play-btn, .play-btn-card, .play-pause-btn');
    const playToast = document.getElementById('playToast');
    const playingToastText = document.getElementById('playingToastText');
    
    // Handle play/pause button clicks
    function handlePlayButtonClick(button) {
        const icon = button.querySelector('i');
        const isPlaying = icon.classList.contains('fa-pause');
        
        // Reset all buttons to play state
        if (!isPlaying) {
            document.querySelectorAll('.fa-pause').forEach(pauseIcon => {
                pauseIcon.classList.remove('fa-pause');
                pauseIcon.classList.add('fa-play');
            });
        }
        
        // Toggle this button's state
        icon.classList.toggle('fa-play');
        icon.classList.toggle('fa-pause');
        
        // If switching to play state
        if (!isPlaying) {
            // Update now playing info
            const songName = button.dataset.song;
            const artistName = button.dataset.artist;
            const imgSrc = button.dataset.img;
            updateNowPlaying(songName, artistName, imgSrc);
            
            // Start progress bar animation
            startProgressBar();
            
            // Show toast notification
            if (playingToastText && songName) {
                playingToastText.textContent = songName;
                showToast(playToast);
            }
        }
    }
    
    // Add click event listeners to all play buttons
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            handlePlayButtonClick(this);
        });
    });

    // Song item hover effect and double-click functionality
    const songItems = document.querySelectorAll('.song-item');
    
    // Handle song item hover effect
    function handleSongItemHover(item, isHovering) {
        const numberSpan = item.querySelector('.song-number-text');
        const playIcon = item.querySelector('.song-number-icon');
        
        if (numberSpan && playIcon) {
            numberSpan.style.display = isHovering ? 'none' : 'inline-block';
            playIcon.style.display = isHovering ? 'inline-block' : 'none';
        }
    }
    
    songItems.forEach((item) => {
        // Add hover event listeners
        item.addEventListener('mouseenter', function() {
            handleSongItemHover(this, true);
        });
        
        item.addEventListener('mouseleave', function() {
            handleSongItemHover(this, false);
        });

        // Double click to play
        item.addEventListener('dblclick', function() {
            // Find the play button in the player
            const playerPlayBtn = document.querySelector('.play-pause-btn');
            if (playerPlayBtn) {
                // Set data attributes from song item
                playerPlayBtn.dataset.song = this.querySelector('.song-name').textContent;
                playerPlayBtn.dataset.artist = this.querySelector('.song-artist').textContent;
                playerPlayBtn.dataset.img = this.querySelector('.song-img').src;
                
                // Use the same handler as play buttons
                handlePlayButtonClick(playerPlayBtn);
            }
        });
    });

    // Create Playlist button functionality
    const createPlaylistBtn = document.getElementById('createPlaylistBtn');
    const playlistToast = document.getElementById('playlistToast');
    const playlistNameInput = document.getElementById('playlistName');
    
    // Handle playlist creation
    function handleCreatePlaylist() {
        // Get the playlist name from the input
        const playlistName = playlistNameInput?.value || 'New Playlist';
        const playlistToastText = document.getElementById('playlistToastText');
        
        if (playlistToastText) {
            playlistToastText.textContent = `"${playlistName}" has been created!`;
        }
        
        // Show toast notification
        if (playlistToast) {
            showToast(playlistToast);
        }
        
        // Reset form
        if (playlistNameInput) {
            playlistNameInput.value = '';
        }
    }
    
    if (createPlaylistBtn) {
        createPlaylistBtn.addEventListener('click', handleCreatePlaylist);
    }
    
    // Function to update now playing
    function updateNowPlaying(song, artist, img) {
        if (!song || !artist || !img) return;
        
        const nowPlayingImg = document.querySelector('.current-song-img');
        const nowPlayingName = document.querySelector('.current-song-name');
        const nowPlayingArtist = document.querySelector('.current-song-artist');
        
        if (nowPlayingImg) nowPlayingImg.src = img;
        if (nowPlayingName) nowPlayingName.textContent = song;
        if (nowPlayingArtist) nowPlayingArtist.textContent = artist;
    }

    // Format time function (converts seconds to MM:SS format)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
    
    // Handle progress bar click
    function handleProgressBarClick(progressBar, e) {
        const progressBarWidth = progressBar.clientWidth;
        const clickPosition = e.offsetX;
        const progressPercentage = (clickPosition / progressBarWidth) * 100;
        
        // Update progress bar
        progressBar.querySelector('.absolute').style.width = progressPercentage + '%';
        
        // Update current time (in a real app, this would seek the song)
        const totalSeconds = 210; // 3:30 in seconds
        const newSeconds = Math.floor((progressPercentage / 100) * totalSeconds);
        document.querySelector('.current-time').textContent = formatTime(newSeconds);
    }
    
    // Progress bar functionality
    const progressBar = document.querySelector('.relative.flex-grow');
    if (progressBar) {
        progressBar.addEventListener('click', function(e) {
            handleProgressBarClick(this, e);
        });
    }

    // Handle volume change
    function handleVolumeChange(slider) {
        // In a real app, this would change the actual volume
        const volumePercentage = slider.value;
        const volumeDisplay = document.querySelector('.volume-percentage');
        if (volumeDisplay) {
            volumeDisplay.textContent = volumePercentage + '%';
        }
    }
    
    // Volume slider functionality
    const volumeSlider = document.querySelector('.range-slider');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            handleVolumeChange(this);
        });
    }

    // Handle sidebar link activation
    function handleSidebarLinkClick(clickedLink, allLinks) {
        // Remove active class from all links
        allLinks.forEach(link => link.classList.remove('bg-spotify-light-black', 'text-white'));
        // Add active class to clicked link
        clickedLink.classList.add('bg-spotify-light-black', 'text-white');
    }
    
    // Sidebar active link
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            handleSidebarLinkClick(this, sidebarLinks);
        });
    });

    // Handle like button click
    function handleLikeButtonClick(button) {
        const icon = button.querySelector('i');
        const likeToast = document.getElementById('likeToast');
        
        // Toggle heart icon filled/outline
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.classList.add('text-spotify-green');
        } else if (icon.classList.contains('text-spotify-green')) {
            icon.classList.remove('text-spotify-green');
        } else {
            icon.classList.add('text-spotify-green');
            // Show toast notification
            if (likeToast) {
                showToast(likeToast);
            }
        }
    }
    
    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleLikeButtonClick(this);
        });
    });
    
    // Progress bar functionality
    let progressInterval;
    const currentTimeEl = document.querySelector('.current-time');
    const progressBarEl = document.querySelector('.absolute.h-full');
    
    // Update volume icon based on volume level
    function updateVolumeIcon(volumeIcon, volume) {
        // Remove all classes first
        volumeIcon.className = '';
        
        // Add appropriate icon class based on volume level
        if (volume == 0) {
            volumeIcon.classList.add('fas', 'fa-volume-mute');
        } else if (volume < 30) {
            volumeIcon.classList.add('fas', 'fa-volume-off');
        } else if (volume < 70) {
            volumeIcon.classList.add('fas', 'fa-volume-down');
        } else {
            volumeIcon.classList.add('fas', 'fa-volume-up');
        }
    }
    
    // Handle volume control input
    function handleVolumeInput(volumeControl, volumeIcon) {
        const volume = volumeControl.value;
        updateVolumeIcon(volumeIcon, volume);
    }
    
    // Toggle mute/unmute
    function toggleMute(volumeControl, volumeIcon) {
        if (volumeIcon.classList.contains('fa-volume-mute')) {
            // Unmute - restore to previous volume
            volumeControl.value = volumeControl.dataset.previousVolume || 70;
        } else {
            // Mute - save current volume
            volumeControl.dataset.previousVolume = volumeControl.value;
            volumeControl.value = 0;
        }
        
        // Trigger input event to update icon
        volumeControl.dispatchEvent(new Event('input'));
    }
    
    // Volume control functionality
    const volumeControl = document.getElementById('volumeControl');
    const volumeIcon = document.querySelector('.fa-volume-up');
    
    if (volumeControl && volumeIcon) {
        volumeControl.addEventListener('input', function() {
            handleVolumeInput(this, volumeIcon);
        });
        
        // Toggle mute when clicking the volume icon
        volumeIcon.parentElement.addEventListener('click', function() {
            toggleMute(volumeControl, volumeIcon);
        });
    }
    
    // Reset progress bar and time display
    function resetProgress() {
        if (progressBarEl) {
            progressBarEl.style.width = '0%';
        }
        if (currentTimeEl) {
            currentTimeEl.textContent = '0:00';
        }
        
        // Clear any existing interval
        if (progressInterval) {
            clearInterval(progressInterval);
        }
    }
    
    // Update progress bar and time display
    function updateProgress(progress, minutes, seconds) {
        if (progressBarEl) {
            progressBarEl.style.width = `${progress}%`;
        }
        
        if (currentTimeEl) {
            currentTimeEl.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }
    
    // Start progress bar animation
    function startProgressBar() {
        // Reset progress
        resetProgress();
        
        // Start new progress simulation
        let progress = 0;
        let seconds = 0;
        let minutes = 0;
        
        progressInterval = setInterval(() => {
            progress += 0.5;
            seconds += 1;
            
            if (seconds >= 60) {
                minutes += 1;
                seconds = 0;
            }
            
            updateProgress(progress, minutes, seconds);
            
            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, 1000);
    }
    
    // Initialize with first song
    const firstSong = document.querySelector('.song-item');
    if (firstSong) {
        const songName = firstSong.querySelector('.song-name').textContent;
        const artistName = firstSong.querySelector('.song-artist').textContent;
        const imgSrc = firstSong.querySelector('.song-img').src;
        
        // Set initial now playing
        updateNowPlaying(songName, artistName, imgSrc);
    }
});

