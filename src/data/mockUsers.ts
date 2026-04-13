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
  { id: "1", name: "Sakura Tanaka", age: 24, gender: "female", country: "Japan", countryCode: "JP", flag: "🇯🇵", avatar: "https://i.pravatar.cc/150?img=1", bio: "Learning English, love anime & cooking 🍣", status: "online", languages: ["Japanese", "English"] },
  { id: "2", name: "Carlos Rivera", age: 28, gender: "male", country: "Mexico", countryCode: "MX", flag: "🇲🇽", avatar: "https://i.pravatar.cc/150?img=3", bio: "Hola! Football fan, want to learn Korean 🌮", status: "online", languages: ["Spanish", "English"] },
  { id: "3", name: "Amira Hassan", age: 22, gender: "female", country: "Egypt", countryCode: "EG", flag: "🇪🇬", avatar: "https://i.pravatar.cc/150?img=5", bio: "Architecture student, love meeting new people ✨", status: "online", languages: ["Arabic", "English"] },
  { id: "4", name: "Liam O'Connor", age: 26, gender: "male", country: "Ireland", countryCode: "IE", flag: "🇮🇪", avatar: "https://i.pravatar.cc/150?img=7", bio: "Musician & traveler, let's chat about culture 🎸", status: "away", lastActive: "5 min ago", languages: ["English", "Irish"] },
  { id: "5", name: "Yuna Kim", age: 23, gender: "female", country: "South Korea", countryCode: "KR", flag: "🇰🇷", avatar: "https://i.pravatar.cc/150?img=9", bio: "K-drama addict, teaching Korean! 🎀", status: "online", languages: ["Korean", "English"] },
  { id: "6", name: "Hans Müller", age: 30, gender: "male", country: "Germany", countryCode: "DE", flag: "🇩🇪", avatar: "https://i.pravatar.cc/150?img=11", bio: "Engineer, love board games & beer 🍺", status: "away", lastActive: "12 min ago", languages: ["German", "English"] },
  { id: "7", name: "Priya Sharma", age: 25, gender: "female", country: "India", countryCode: "IN", flag: "🇮🇳", avatar: "https://i.pravatar.cc/150?img=20", bio: "Bollywood lover, want to learn French 💃", status: "online", languages: ["Hindi", "English"] },
  { id: "8", name: "Lucas Dubois", age: 27, gender: "male", country: "France", countryCode: "FR", flag: "🇫🇷", avatar: "https://i.pravatar.cc/150?img=12", bio: "Chef, cinema lover, practicing Japanese 🥐", status: "offline", lastActive: "2h ago", languages: ["French", "English"] },
  { id: "9", name: "Fatima Al-Rashid", age: 21, gender: "female", country: "UAE", countryCode: "AE", flag: "🇦🇪", avatar: "https://i.pravatar.cc/150?img=23", bio: "Fashion & design student, love languages 🌸", status: "online", languages: ["Arabic", "English"] },
  { id: "10", name: "Mateo Silva", age: 29, gender: "male", country: "Brazil", countryCode: "BR", flag: "🇧🇷", avatar: "https://i.pravatar.cc/150?img=15", bio: "Surfer, musician, let's exchange cultures 🏄", status: "away", lastActive: "8 min ago", languages: ["Portuguese", "English"] },
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
