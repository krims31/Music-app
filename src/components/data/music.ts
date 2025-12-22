import legend from './assets/8830989510e788cf0c95721ec7706871.1000x1000x1.png'
import fighting from './assets/ab67616d0000b273c820e86be3bcbc65e5b88ef0.jpeg'

export interface Song {
	id: number
	title: string
	artist: string
	album: string
	duration: string
	audioUrl: string
	coverUrl: string
	genre: string[]
}

export interface Playlist {
	id: number
	name: string
	coverUrl: string
	songs: Song[]
}

export const songs: Song[] = [
	{
		id: 1,
		title: 'Wishing Well',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '3:45',
		audioUrl: '/music/Juice-WRLD-Wishing-Well-(HipHopKit.com).mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 2,
		title: 'Conversations',
		artist: 'Juice Wrld',
		album: 'Legends Never Die',
		duration: '3:24',
		audioUrl: '/music/Juice Wrld - Conversations.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 3,
		title: 'Titanic',
		artist: 'Juice Wrld',
		album: 'Legends Never Die',
		duration: '2:56',
		audioUrl: '/music/Juice Wrld - Titanic.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 4,
		title: 'Come And Go',
		artist: 'Juice Wrld',
		album: 'Legends Never Die',
		duration: '3:25',
		audioUrl: '/music/Juice_WRLD_-_Juice_WRLD_-_Come_And_Go_(SkySound.cc).mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 5,
		title: 'Blood On My Jeans',
		artist: 'Juice Wrld',
		album: 'Legends Never Die',
		duration: '2:34',
		audioUrl: '/music/Juice Wrld - Blood On My Jeans.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 6,
		title: 'Righteous',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '4:02',
		audioUrl: '/music/Juice Wrld - Righteous.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 7,
		title: "Life's A Mess",
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '3:22',
		audioUrl: "/music/Juice WRLD, Halsey - Life's A Mess.mp3",
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 8,
		title: 'Hate The Other Side',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '2:40',
		audioUrl:
			'/music/Juice Wrld - Hate The Other Side (feat. Marshmello, The Kid Laroi).mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 9,
		title: 'Smile',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '3:16',
		audioUrl: '/music/Juice Wrld & The Weeknd - Smile.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 10,
		title: 'Tell Me U Luv Me',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '3:00',
		audioUrl: '/music/Juice Wrld - Tell Me U Luv Me (feat. Trippie Redd).mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 11,
		title: 'Up Up and Away',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '2:27',
		audioUrl: '/music/Juice Wrld - Up Up And Away.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 12,
		title: 'I Want It',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '2:53',
		audioUrl: '/music/Juice Wrld - I Want It.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 13,
		title: 'Stay High',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '2:48',
		audioUrl: '/music/Juice Wrld - Stay High.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 14,
		title: "Can't Die",
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '3:02',
		audioUrl: "/music/Juice Wrld - Can't Die.mp3",
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 15,
		title: 'Screw Juice',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '2:59',
		audioUrl: '/music/Juice Wrld - Screw Juice.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 16,
		title: 'Bad Energy',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '3:06',
		audioUrl: '/music/Juice Wrld - Bad Energy.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},
	{
		id: 17,
		title: 'Man Of The Year',
		artist: 'Juice WRLD',
		album: 'Legends Never Die',
		duration: '2:16',
		audioUrl: '/music/Juice Wrld - Man Of The Year.mp3',
		coverUrl: legend,
		genre: ['Emo rap']
	},

	// Fighting Demons
	{
		id: 18,
		title: 'Burn',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:37',
		audioUrl: '/music/Juice WRLD - Burn.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 19,
		title: 'Already Dead',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:51',
		audioUrl: '/music/Juice WRLD - Relapse (Already Dead).mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 20,
		title: 'Cigarettes',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:47',
		audioUrl: '/music/Juice Wrld - Cigarettes.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 21,
		title: 'You Wouldnt Understand',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '2:50',
		audioUrl: '/music/Juice WRLD - You Wouldnt Understand.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 22,
		title: 'Sometimes',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '4:19',
		audioUrl: '/music/Juice WRLD - Sometimes.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 23,
		title: 'Wandered To LA',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:08',
		audioUrl: '/music/Juice Wrld, Justin Bieber - Wandered To LA.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 24,
		title: 'Eminem Speaks',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '2:13',
		audioUrl: '/music/Juice WRLD - Eminem Speaks.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 25,
		title: 'Rockstar In His Prime',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:00',
		audioUrl: '/music/Juice Wrld - Rockstar In His Prime.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 26,
		title: 'Doom',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:37',
		audioUrl: '/music/Juice WRLD - Doom.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 27,
		title: 'Go Hard',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '2:14',
		audioUrl: '/music/Juice WRLD - Go Hard.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 28,
		title: 'Not Enough',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '2:51',
		audioUrl: '/music/Juice WRLD - Not Enough.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 29,
		title: 'Feline',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:32',
		audioUrl: '/music/Juice WRLD, Polo G, Trippie Redd - Feline.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 30,
		title: 'Relocate',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:28',
		audioUrl: '/music/Juice WRLD - Relocate.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 31,
		title: 'Until The Plug Comes Back Around',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '2:53',
		audioUrl: '/music/Juice WRLD - Until The Plug Comes Back Around.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 32,
		title: 'From My Window',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:07',
		audioUrl: '/music/Juice WRLD - From My Window.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 33,
		title: 'Girl Of My Dreams',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:46',
		audioUrl: '/music/Juice WRLD, SUGA, BTS - Girl Of My Dreams.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 34,
		title: 'Feel Alone',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:50',
		audioUrl: '/music/Juice WRLD - Feel Alone.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 35,
		title: 'My Life In A Nutshell',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:09',
		audioUrl: '/music/Juice WRLD - My Life In A Nutshell.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 36,
		title: 'Rich And Blind',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:48',
		audioUrl: '/music/Juice Wrld - Rich And Blind.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	},
	{
		id: 37,
		title: 'Legends',
		artist: 'Juice WRLD',
		album: 'Fighting Demons',
		duration: '3:11',
		audioUrl: '/music/Juice Wrld - Legends.mp3',
		coverUrl: fighting,
		genre: ['Emo rap']
	}
]

export const playlists: Playlist[] = [
	{
		id: 1,
		name: 'Legends Never Die',
		coverUrl: legend,
		songs: songs.filter(s => s.album === 'Legends Never Die')
	},
	{
		id: 2,
		name: 'Fighting Demons',
		coverUrl: fighting,
		songs: songs.filter(s => s.album === 'Fighting Demons')
	}
]
