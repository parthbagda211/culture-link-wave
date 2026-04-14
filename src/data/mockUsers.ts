export interface MockUser {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  country: string;
  countryCode: string;
  flag: string;
  avatar: string;
  bio: string;
  status: "online" | "away" | "offline";
  lastActive?: string;
  languages: string[];
}

export const mockUsers: MockUser[] = [
  { id: "1", name: "Lucas Silva", age: 26, gender: "male", country: "Brazil", countryCode: "BR", flag: "🇧🇷", avatar: "https://i.pravatar.cc/150?img=15", bio: "Football enthusiast and gamer from São Paulo", status: "online", lastActive: "5 mins ago", languages: ["Portuguese", "English"] },
  { id: "2", name: "Priya Sharma", age: 25, gender: "female", country: "India", countryCode: "IN", flag: "🇮🇳", avatar: "https://i.pravatar.cc/150?img=20", bio: "Bollywood, chai, and good deep conversations", status: "online", lastActive: "12 mins ago", languages: ["Hindi", "English"] },
  { id: "3", name: "Mohammed Al-Farsi", age: 30, gender: "male", country: "UAE", countryCode: "AE", flag: "🇦🇪", avatar: "https://i.pravatar.cc/150?img=11", bio: "Tech enthusiast who loves philosophy & travel", status: "away", lastActive: "18 mins ago", languages: ["Arabic", "English"] },
  { id: "4", name: "Emma Bergström", age: 23, gender: "female", country: "Sweden", countryCode: "SE", flag: "🇸🇪", avatar: "https://i.pravatar.cc/150?img=9", bio: "Nature lover, photographer, and coffee addict", status: "online", lastActive: "25 mins ago", languages: ["Swedish", "English"] },
  { id: "5", name: "Carlos Mendez", age: 27, gender: "male", country: "Mexico", countryCode: "MX", flag: "🇲🇽", avatar: "https://i.pravatar.cc/150?img=3", bio: "Musician and language exchange enthusiast...", status: "away", lastActive: "32 mins ago", languages: ["Spanish", "English"] },
  { id: "6", name: "Pierre Dubois", age: 29, gender: "male", country: "France", countryCode: "FR", flag: "🇫🇷", avatar: "https://i.pravatar.cc/150?img=12", bio: "Chef, cinema lover, practicing Japanese 🥐", status: "online", lastActive: "1 hr ago", languages: ["French", "English"] },
  { id: "7", name: "Sakura Tanaka", age: 24, gender: "female", country: "Japan", countryCode: "JP", flag: "🇯🇵", avatar: "https://i.pravatar.cc/150?img=1", bio: "Learning English, love anime & cooking 🍣", status: "online", lastActive: "2 hrs ago", languages: ["Japanese", "English"] },
  { id: "8", name: "Amira Hassan", age: 22, gender: "female", country: "Egypt", countryCode: "EG", flag: "🇪🇬", avatar: "https://i.pravatar.cc/150?img=5", bio: "Architecture student, love meeting new people ✨", status: "offline", lastActive: "3 hrs ago", languages: ["Arabic", "English"] },
  { id: "9", name: "Liam O'Connor", age: 26, gender: "male", country: "Ireland", countryCode: "IE", flag: "🇮🇪", avatar: "https://i.pravatar.cc/150?img=7", bio: "Musician & traveler, let's chat about culture 🎸", status: "offline", lastActive: "5 hrs ago", languages: ["English", "Irish"] },
  { id: "10", name: "Yuna Kim", age: 23, gender: "female", country: "South Korea", countryCode: "KR", flag: "🇰🇷", avatar: "https://i.pravatar.cc/150?img=23", bio: "K-drama addict, teaching Korean! 🎀", status: "online", lastActive: "8 hrs ago", languages: ["Korean", "English"] },
];

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface RecentChat {
  user: MockUser;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export const recentChats: RecentChat[] = [
  { user: mockUsers[0], lastMessage: "That sounds amazing! 🎌", timestamp: "2 min ago", unread: 3 },
  { user: mockUsers[4], lastMessage: "Sure, I can teach you that phrase!", timestamp: "15 min ago", unread: 1 },
  { user: mockUsers[1], lastMessage: "Haha yes! Football is life ⚽", timestamp: "1h ago", unread: 0 },
  { user: mockUsers[6], lastMessage: "The movie was so good!", timestamp: "3h ago", unread: 0 },
  { user: mockUsers[9], lastMessage: "Let's play that game tomorrow 🎮", timestamp: "Yesterday", unread: 0 },
];

export const chatMessages: ChatMessage[] = [
  { id: "1", senderId: "1", text: "Konnichiwa! How are you? 😊", timestamp: "10:30 AM", isMe: false },
  { id: "2", senderId: "me", text: "Hey Sakura! I'm great, just had lunch. How about you?", timestamp: "10:31 AM", isMe: true },
  { id: "3", senderId: "1", text: "I just woke up haha, it's morning here in Tokyo! 🌅", timestamp: "10:32 AM", isMe: false },
  { id: "4", senderId: "me", text: "Oh right, the time difference! What's for breakfast?", timestamp: "10:33 AM", isMe: true },
  { id: "5", senderId: "1", text: "Rice, miso soup and some pickles. Traditional! 🍚", timestamp: "10:34 AM", isMe: false },
  { id: "6", senderId: "me", text: "That sounds amazing! I wish I could try authentic Japanese breakfast 🎌", timestamp: "10:35 AM", isMe: true },
  { id: "7", senderId: "1", text: "You should visit Japan sometime! I can show you around 🗼", timestamp: "10:36 AM", isMe: false },
];
