(function() {
'use strict';

var NOTES = {
    'C3':130.81,'Db3':138.59,'D3':146.83,'Eb3':155.56,'E3':164.81,'F3':174.61,'Gb3':185.00,'G3':196.00,'Ab3':207.65,'A3':220.00,'Bb3':233.08,'B3':246.94,
    'C4':261.63,'Db4':277.18,'D4':293.66,'Eb4':311.13,'E4':329.63,'F4':349.23,'Gb4':369.99,'G4':392.00,'Ab4':415.30,'A4':440.00,'Bb4':466.16,'B4':493.88,
    'C5':523.25,'Db5':554.37,'D5':587.33,'Eb5':622.25,'E5':659.25,'F5':698.46,'Gb5':739.99,'G5':783.99,'Ab5':830.61,'A5':880.00,'Bb5':932.33,'B5':987.77
};

// All durations in 16th note units
var SONGS = [
{
    name: 'The Entertainer',
    artist: 'Scott Joplin',
    icon: '\u{1F3B9}',
    bpm: 140,
    melody: [
        ['D4',1],['Eb4',1],['E4',2],['C5',2],[null,2],['E4',2],
        ['C5',2],['E4',2],['C5',6],[null,2],
        ['C4',1],['D4',1],['Eb4',1],['E4',1],['C4',2],['E4',2],
        ['A4',3],['G4',3],[null,2],
        ['D4',1],['Eb4',1],['E4',2],['C5',2],[null,2],['E4',2],
        ['C5',2],['E4',2],['C5',4],
        ['C5',1],['D5',1],['Eb5',1],['C5',1],['D5',2],['E5',2],
        ['C5',2],['D5',2],['C5',6],[null,4],
        ['D4',1],['Eb4',1],['E4',2],['C5',2],[null,2],['E4',2],
        ['C5',2],['E4',2],['C5',6],[null,2],
        ['C4',1],['D4',1],['Eb4',1],['E4',1],['C4',2],['E4',2],
        ['A4',3],['G4',3],[null,2],
        ['D4',1],['Eb4',1],['E4',2],['C5',2],[null,2],['E4',2],
        ['C5',2],['D5',2],['E5',2],['D5',2],
        ['C5',2],['A4',2],['G4',4],[null,4],['C4',4],[null,4]
    ],
    bass: [
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['F3',4],['C3',4],['F3',4],['C3',4],
        ['G3',4],['G3',4],['G3',4],[null,4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['A3',4],['E3',4],['G3',4],['D3',4],
        ['C3',4],['G3',4],['C3',8],[null,4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['F3',4],['C3',4],['F3',4],['C3',4],
        ['G3',4],['G3',4],['G3',4],[null,4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['F3',4],['G3',4],
        ['C3',4],['F3',4],['G3',4],[null,4],['C3',4],[null,4]
    ]
},
{
    name: 'F\u00FCr Elise',
    artist: 'Beethoven',
    icon: '\u{1F3BB}',
    bpm: 112,
    melody: [
        ['E5',2],['Eb5',2],['E5',2],['Eb5',2],['E5',2],['B4',2],['D5',2],['C5',2],
        ['A4',4],[null,2],['C4',2],['E4',2],['A4',2],
        ['B4',4],[null,2],['E4',2],['Ab4',2],['B4',2],
        ['C5',4],[null,2],['E4',2],['E5',2],['Eb5',2],
        ['E5',2],['Eb5',2],['E5',2],['B4',2],['D5',2],['C5',2],
        ['A4',4],[null,2],['C4',2],['E4',2],['A4',2],
        ['B4',4],[null,2],['E4',2],['C5',2],['B4',2],
        ['A4',4],[null,4],
        ['E5',2],['Eb5',2],['E5',2],['Eb5',2],['E5',2],['B4',2],['D5',2],['C5',2],
        ['A4',4],[null,2],['C4',2],['E4',2],['A4',2],
        ['B4',4],[null,2],['E4',2],['Ab4',2],['B4',2],
        ['C5',4],[null,2],['E4',2],['E5',2],['Eb5',2],
        ['E5',2],['Eb5',2],['E5',2],['B4',2],['D5',2],['C5',2],
        ['A4',4],[null,2],['C4',2],['E4',2],['A4',2],
        ['B4',4],[null,2],['E4',2],['C5',2],['B4',2],
        ['A4',4],[null,8]
    ],
    bass: [
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['E3',4],['E3',4],['E3',4],['E3',4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['E3',4],['E3',4],['E3',4],['E3',4],
        ['A3',4],[null,4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['E3',4],['E3',4],['E3',4],['E3',4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['A3',4],['E3',4],['A3',4],['E3',4],
        ['E3',4],['E3',4],['E3',4],['E3',4],
        ['A3',4],[null,8]
    ]
},
{
    name: 'Ode to Joy',
    artist: 'Beethoven',
    icon: '\u{1F3BA}',
    bpm: 120,
    melody: [
        ['E4',4],['E4',4],['F4',4],['G4',4],
        ['G4',4],['F4',4],['E4',4],['D4',4],
        ['C4',4],['C4',4],['D4',4],['E4',4],
        ['E4',6],['D4',2],['D4',8],
        ['E4',4],['E4',4],['F4',4],['G4',4],
        ['G4',4],['F4',4],['E4',4],['D4',4],
        ['C4',4],['C4',4],['D4',4],['E4',4],
        ['D4',6],['C4',2],['C4',8],
        ['D4',4],['D4',4],['E4',4],['C4',4],
        ['D4',4],['E4',2],['F4',2],['E4',4],['C4',4],
        ['D4',4],['E4',2],['F4',2],['E4',4],['D4',4],
        ['C4',4],['D4',4],['G3',8],
        ['E4',4],['E4',4],['F4',4],['G4',4],
        ['G4',4],['F4',4],['E4',4],['D4',4],
        ['C4',4],['C4',4],['D4',4],['E4',4],
        ['D4',6],['C4',2],['C4',8],[null,8]
    ],
    bass: [
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['F3',4],['G3',4],
        ['C3',4],['G3',4],['G3',8],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['F3',4],['G3',4],
        ['G3',4],['G3',4],['C3',8],
        ['G3',4],['G3',4],['C3',4],['G3',4],
        ['G3',4],['G3',4],['C3',4],['G3',4],
        ['G3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['G3',8],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['F3',4],['G3',4],
        ['G3',4],['G3',4],['C3',8],[null,8]
    ]
},
{
    name: 'Twinkle Twinkle',
    artist: 'Traditional',
    icon: '\u2B50',
    bpm: 100,
    melody: [
        ['C4',4],['C4',4],['G4',4],['G4',4],
        ['A4',4],['A4',4],['G4',8],
        ['F4',4],['F4',4],['E4',4],['E4',4],
        ['D4',4],['D4',4],['C4',8],
        ['G4',4],['G4',4],['F4',4],['F4',4],
        ['E4',4],['E4',4],['D4',8],
        ['G4',4],['G4',4],['F4',4],['F4',4],
        ['E4',4],['E4',4],['D4',8],
        ['C4',4],['C4',4],['G4',4],['G4',4],
        ['A4',4],['A4',4],['G4',8],
        ['F4',4],['F4',4],['E4',4],['E4',4],
        ['D4',4],['D4',4],['C4',8],[null,8]
    ],
    bass: [
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['F3',4],['C3',4],['C3',8],
        ['F3',4],['C3',4],['C3',4],['G3',4],
        ['G3',4],['G3',4],['C3',8],
        ['C3',4],['G3',4],['F3',4],['C3',4],
        ['C3',4],['G3',4],['G3',8],
        ['C3',4],['G3',4],['F3',4],['C3',4],
        ['C3',4],['G3',4],['G3',8],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['F3',4],['C3',4],['C3',8],
        ['F3',4],['C3',4],['C3',4],['G3',4],
        ['G3',4],['G3',4],['C3',8],[null,8]
    ]
},
{
    name: 'Jingle Bells',
    artist: 'Traditional',
    icon: '\u{1F514}',
    bpm: 150,
    melody: [
        ['E4',4],['E4',4],['E4',8],
        ['E4',4],['E4',4],['E4',8],
        ['E4',4],['G4',4],['C4',4],['D4',4],
        ['E4',16],
        ['F4',4],['F4',4],['F4',4],['F4',4],
        ['F4',4],['E4',4],['E4',4],['E4',4],
        ['E4',4],['D4',4],['D4',4],['E4',4],
        ['D4',8],['G4',8],
        ['E4',4],['E4',4],['E4',8],
        ['E4',4],['E4',4],['E4',8],
        ['E4',4],['G4',4],['C4',4],['D4',4],
        ['E4',16],
        ['F4',4],['F4',4],['F4',4],['F4',4],
        ['F4',4],['E4',4],['E4',4],['E4',4],
        ['G4',4],['G4',4],['F4',4],['D4',4],
        ['C4',16],[null,8]
    ],
    bass: [
        ['C3',4],['G3',4],['C3',8],
        ['C3',4],['G3',4],['C3',8],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['F3',4],['C3',4],['F3',4],['C3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['G3',4],['G3',4],['G3',4],['G3',4],
        ['G3',8],['G3',8],
        ['C3',4],['G3',4],['C3',8],
        ['C3',4],['G3',4],['C3',8],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['F3',4],['C3',4],['F3',4],['C3',4],
        ['C3',4],['G3',4],['C3',4],['G3',4],
        ['G3',4],['G3',4],['F3',4],['G3',4],
        ['C3',16],[null,8]
    ]
},
{
    name: 'Greensleeves',
    artist: 'Traditional',
    icon: '\u{1F3B6}',
    bpm: 108,
    melody: [
        ['A4',4],
        ['C5',8],['D5',4],
        ['E5',6],['F5',2],['E5',4],
        ['D5',8],['B4',4],
        ['G4',6],['A4',2],['B4',4],
        ['C5',8],['A4',4],
        ['A4',6],['Ab4',2],['A4',4],
        ['B4',8],['Ab4',4],
        ['E4',8],[null,4],
        ['A4',4],
        ['C5',8],['D5',4],
        ['E5',6],['F5',2],['E5',4],
        ['D5',8],['B4',4],
        ['G4',6],['A4',2],['B4',4],
        ['C5',6],['B4',2],['A4',4],
        ['Ab4',6],['Gb4',2],['Ab4',4],
        ['A4',12],
        [null,8],
        ['G5',12],
        ['G5',6],['Gb5',2],['E5',4],
        ['D5',8],['B4',4],
        ['G4',6],['A4',2],['B4',4],
        ['C5',8],['A4',4],
        ['A4',6],['Ab4',2],['A4',4],
        ['B4',8],['Ab4',4],
        ['E4',8],[null,4],
        ['G5',12],
        ['G5',6],['Gb5',2],['E5',4],
        ['D5',8],['B4',4],
        ['G4',6],['A4',2],['B4',4],
        ['C5',6],['B4',2],['A4',4],
        ['Ab4',6],['Gb4',2],['Ab4',4],
        ['A4',12],
        [null,8]
    ],
    bass: [
        [null,4],
        ['A3',4],['E3',4],['A3',4],
        ['A3',4],['E3',4],['A3',4],
        ['G3',4],['D3',4],['G3',4],
        ['G3',4],['D3',4],['G3',4],
        ['A3',4],['E3',4],['A3',4],
        ['A3',4],['E3',4],['A3',4],
        ['E3',4],['B3',4],['E3',4],
        ['E3',4],['B3',4],[null,4],
        [null,4],
        ['A3',4],['E3',4],['A3',4],
        ['A3',4],['E3',4],['A3',4],
        ['G3',4],['D3',4],['G3',4],
        ['G3',4],['D3',4],['G3',4],
        ['A3',4],['E3',4],['A3',4],
        ['E3',4],['E3',4],['E3',4],
        ['A3',8],['A3',4],
        [null,8],
        ['C3',4],['G3',4],['C3',4],
        ['C3',4],['G3',4],['C3',4],
        ['G3',4],['D3',4],['G3',4],
        ['G3',4],['D3',4],['G3',4],
        ['A3',4],['E3',4],['A3',4],
        ['A3',4],['E3',4],['A3',4],
        ['E3',4],['B3',4],['E3',4],
        ['E3',4],['B3',4],[null,4],
        ['C3',4],['G3',4],['C3',4],
        ['C3',4],['G3',4],['C3',4],
        ['G3',4],['D3',4],['G3',4],
        ['G3',4],['D3',4],['G3',4],
        ['A3',4],['E3',4],['A3',4],
        ['E3',4],['E3',4],['E3',4],
        ['A3',8],['A3',4],
        [null,8]
    ]
}
];

// ---- Player state ----
var ctx = null;
var masterGain = null;
var playing = false;
var currentSongIdx = 0;
var generation = 0;
var toggling = false;
var playlistOpen = false;

// ---- Audio engine ----
function sixteenth(bpm) {
    return 60 / bpm / 4;
}

function scheduleVoice(voice, bpm, index, startTime, gen) {
    if (!playing || gen !== generation) return;
    if (index >= voice.length) index = 0;
    var note = voice[index][0];
    var dur = voice[index][1];
    var s = sixteenth(bpm);
    var duration = dur * s;
    if (note && NOTES[note]) {
        var osc = ctx.createOscillator();
        var g = ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = NOTES[note];
        g.gain.setValueAtTime(0.15, startTime);
        g.gain.linearRampToValueAtTime(0.0, startTime + duration * 0.9);
        osc.connect(g);
        g.connect(masterGain);
        osc.start(startTime);
        osc.stop(startTime + duration);
    }
    var nextTime = startTime + duration;
    var delay = (nextTime - ctx.currentTime) * 1000;
    setTimeout(function() {
        scheduleVoice(voice, bpm, index + 1, nextTime, gen);
    }, Math.max(0, delay - 50));
}

function beginPlayback() {
    var song = SONGS[currentSongIdx];
    playing = true;
    generation++;
    var gen = generation;
    var t = ctx.currentTime + 0.1;
    scheduleVoice(song.melody, song.bpm, 0, t, gen);
    scheduleVoice(song.bass, song.bpm, 0, t, gen);
    updatePlayerUI();
}

function startPlayback() {
    if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        masterGain = ctx.createGain();
        masterGain.gain.value = 0.125;
        masterGain.connect(ctx.destination);
    }
    // Synchronous oscillator to force-unlock iOS audio
    var unlock = ctx.createOscillator();
    var uGain = ctx.createGain();
    uGain.gain.value = 0.001;
    unlock.connect(uGain);
    uGain.connect(ctx.destination);
    unlock.start();
    unlock.stop(ctx.currentTime + 0.001);

    if (ctx.state === 'suspended') {
        ctx.resume().then(beginPlayback);
    } else {
        beginPlayback();
    }
}

function stopPlayback() {
    playing = false;
    generation++;
    updatePlayerUI();
}

function switchSong(idx) {
    var wasPlaying = playing;
    if (playing) {
        playing = false;
        generation++;
    }
    currentSongIdx = idx;
    closePlaylist();
    if (wasPlaying) {
        startPlayback();
    } else {
        updatePlayerUI();
    }
}

// ---- UI ----
var playBtn, songNameEl, songSubEl, volSlider, playlistEl;

function updatePlayerUI() {
    var song = SONGS[currentSongIdx];
    if (playBtn) playBtn.innerHTML = playing ? '\u23F8' : '\u25B6';
    if (songNameEl) songNameEl.textContent = song.icon + ' ' + song.name;
    if (songSubEl) songSubEl.textContent = song.artist;
    // Update active state in playlist
    if (playlistEl) {
        var items = playlistEl.querySelectorAll('.pp-item');
        for (var i = 0; i < items.length; i++) {
            items[i].className = 'pp-item' + (i === currentSongIdx ? ' pp-active' : '');
        }
    }
}

function togglePlaylist(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    playlistOpen = !playlistOpen;
    if (playlistEl) playlistEl.style.display = playlistOpen ? 'block' : 'none';
}

function closePlaylist() {
    playlistOpen = false;
    if (playlistEl) playlistEl.style.display = 'none';
}

function handleToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    if (toggling) return;
    toggling = true;
    setTimeout(function() { toggling = false; }, 300);
    playing ? stopPlayback() : startPlayback();
}

function createPlayer() {
    // Inject CSS
    var style = document.createElement('style');
    style.textContent =
        '#piggy-player{position:fixed;bottom:20px;right:20px;z-index:100;display:flex;align-items:center;gap:10px;' +
        'background:rgba(232,67,147,0.2);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);' +
        'border:1px solid rgba(232,67,147,0.3);border-radius:40px;padding:8px 16px 8px 8px;user-select:none;transition:background .2s}' +
        '#piggy-player:hover{background:rgba(232,67,147,0.3)}' +
        '#pp-play{width:36px;height:36px;border-radius:50%;border:none;background:#e84393;color:#fff;font-size:16px;' +
        'cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .15s;flex-shrink:0}' +
        '#pp-play:hover{transform:scale(1.1)}' +
        '#pp-song{display:flex;flex-direction:column;cursor:pointer;min-width:0}' +
        '#pp-song:hover .pp-name{color:#fd79a8}' +
        '.pp-name{font-size:12px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .2s}' +
        '.pp-sub{font-size:10px;color:rgba(255,255,255,0.4);white-space:nowrap}' +
        '#pp-vol{width:60px;height:4px;-webkit-appearance:none;appearance:none;background:rgba(255,255,255,0.15);' +
        'border-radius:2px;outline:none;flex-shrink:0}' +
        '#pp-vol::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:#fd79a8;cursor:pointer}' +
        '#pp-playlist{position:fixed;bottom:72px;right:20px;z-index:101;background:rgba(20,15,50,0.95);' +
        'backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(232,67,147,0.25);' +
        'border-radius:16px;padding:8px 0;min-width:220px;display:none;box-shadow:0 8px 32px rgba(0,0,0,0.4)}' +
        '.pp-header{padding:8px 16px 6px;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;' +
        'color:rgba(255,255,255,0.3);font-weight:600;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:4px}' +
        '.pp-item{padding:10px 16px;font-size:13px;color:rgba(255,255,255,0.7);cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:8px}' +
        '.pp-item:hover{background:rgba(232,67,147,0.15);color:#fff}' +
        '.pp-item.pp-active{color:#fd79a8;font-weight:600}' +
        '.pp-item .pp-artist{margin-left:auto;font-size:10px;color:rgba(255,255,255,0.25);font-weight:400}' +
        '.pp-caret{font-size:8px;margin-left:2px;color:rgba(255,255,255,0.3)}';
    document.head.appendChild(style);

    // Create player
    var player = document.createElement('div');
    player.id = 'piggy-player';

    playBtn = document.createElement('button');
    playBtn.id = 'pp-play';
    playBtn.innerHTML = '\u25B6';

    var songDisplay = document.createElement('div');
    songDisplay.id = 'pp-song';
    songNameEl = document.createElement('span');
    songNameEl.className = 'pp-name';
    songSubEl = document.createElement('span');
    songSubEl.className = 'pp-sub';
    var caret = document.createElement('span');
    caret.className = 'pp-caret';
    caret.textContent = '\u25B2';
    songNameEl.appendChild(caret);
    songDisplay.appendChild(songNameEl);
    songDisplay.appendChild(songSubEl);

    volSlider = document.createElement('input');
    volSlider.type = 'range';
    volSlider.id = 'pp-vol';
    volSlider.min = '0';
    volSlider.max = '100';
    volSlider.value = '25';
    volSlider.title = 'Volume';

    player.appendChild(playBtn);
    player.appendChild(songDisplay);
    player.appendChild(volSlider);
    document.body.appendChild(player);

    // Create playlist popup
    playlistEl = document.createElement('div');
    playlistEl.id = 'pp-playlist';
    var header = document.createElement('div');
    header.className = 'pp-header';
    header.textContent = 'Piggy Playlist';
    playlistEl.appendChild(header);

    SONGS.forEach(function(song, i) {
        var item = document.createElement('div');
        item.className = 'pp-item' + (i === 0 ? ' pp-active' : '');
        item.innerHTML = song.icon + ' ' + song.name + '<span class="pp-artist">' + song.artist + '</span>';
        item.addEventListener('click', function(e) { e.stopPropagation(); switchSong(i); });
        item.addEventListener('touchend', function(e) { e.preventDefault(); e.stopPropagation(); switchSong(i); });
        playlistEl.appendChild(item);
    });
    document.body.appendChild(playlistEl);

    // Events
    playBtn.addEventListener('click', handleToggle);
    playBtn.addEventListener('touchend', handleToggle);

    songDisplay.addEventListener('click', function(e) { e.stopPropagation(); togglePlaylist(e); });
    songDisplay.addEventListener('touchend', function(e) { e.preventDefault(); e.stopPropagation(); togglePlaylist(e); });

    volSlider.addEventListener('input', function() {
        if (masterGain) masterGain.gain.value = this.value / 100 * 0.5;
    });
    volSlider.addEventListener('click', function(e) { e.stopPropagation(); });
    volSlider.addEventListener('touchend', function(e) { e.stopPropagation(); });

    // Close playlist on outside click/touch
    document.addEventListener('click', closePlaylist);
    document.addEventListener('touchend', closePlaylist);

    updatePlayerUI();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createPlayer);
} else {
    createPlayer();
}

})();
