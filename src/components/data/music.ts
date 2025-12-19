import legend from "./assets/8830989510e788cf0c95721ec7706871.1000x1000x1.png";

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  audioUrl: string;
  coverUrl: string;
  genre: string[];
}

export interface Playlist {
  id: number;
  name: string;
  coverUrl: string;
  songs: Song[];
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Wishing Well",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:45",
    audioUrl: "/music/Juice-WRLD-Wishing-Well-(HipHopKit.com).mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 2,
    title: "Conversations",
    artist: "Juice Wrld",
    album: "Legends Never Die",
    duration: "3:24",
    audioUrl: "/music/Juice Wrld - Conversations.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 3,
    title: "Titanic",
    artist: "Juice Wrld",
    album: "Legends Never Die",
    duration: "2:56",
    audioUrl: "/music/Juice Wrld - Titanic.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 4,
    title: "Come And Go",
    artist: "Juice Wrld",
    album: "Legends Never Die",
    duration: "3:25",
    audioUrl: "/music/Juice_WRLD_-_Juice_WRLD_-_Come_And_Go_(SkySound.cc).mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 5,
    title: "Blood On My Jeans",
    artist: "Juice Wrld",
    album: "Legends Never Die",
    duration: "2:34",
    audioUrl: "/music/Juice Wrld - Blood On My Jeans.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 6,
    title: "Righteous",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "4:02",
    audioUrl: "/music/Juice Wrld - Righteous.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 7,
    title: "Life's A Mess",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:22",
    audioUrl: "/music/Juice WRLD, Halsey - Life's A Mess.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 8,
    title: "Hate The Other Side",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "2:40",
    audioUrl:
      "/music/Juice Wrld - Hate The Other Side (feat. Marshmello, The Kid Laroi).mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 9,
    title: "Smile",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:16",
    audioUrl: "/music/Juice Wrld & The Weeknd - Smile.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 10,
    title: "Tell Me U Luv Me",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:00",
    audioUrl: "/music/Juice Wrld - Tell Me U Luv Me (feat. Trippie Redd).mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 11,
    title: "Up Up and Away",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "2:27",
    audioUrl: "/music/Juice Wrld - Up Up And Away.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 12,
    title: "I Want It",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "2:53",
    audioUrl: "/music/Juice Wrld - I Want It.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 13,
    title: "Stay High",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "2:48",
    audioUrl: "/music/Juice Wrld - Stay High.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 14,
    title: "Can't Die",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:02",
    audioUrl: "/music/Juice Wrld - Can't Die.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 15,
    title: "Screw Juice",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "2:59",
    audioUrl: "/music/Juice Wrld - Screw Juice.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 16,
    title: "Bad Energy",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:06",
    audioUrl: "/music/Juice Wrld - Bad Energy.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
  {
    id: 17,
    title: "Man Of The Year",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "2:16",
    audioUrl: "/music/Juice Wrld - Man Of The Year.mp3",
    coverUrl: legend,
    genre: ["Emo rap"],
  },
];

export const playlists: Playlist[] = [
  {
    id: 1,
    name: "Legends Never Die",
    coverUrl: legend,
    songs: songs.filter((s) => s.album === "Legends Never Die"),
  },
];
