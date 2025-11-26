import { Book, BlogPost } from './types';

export const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@irish.history.t",
  youtube: "https://www.youtube.com/@IrishHistoryTales", 
  instagram: "https://instagram.com",
  email: "contact@irishhistorytales.com"
};

export const BOOKS: Book[] = [
  {
    id: 'verses-1',
    title: "Verses of the United Irishmen",
    subtitle: "Poetry of Rebellion",
    description: "A stirring collection that captures the spirit, tragedy, and hope of the 1798 Rebellion. Through rhythm and rhyme, Darren Beaming brings the United Irishmen back to life in this essential volume for history lovers.",
    // using Amazon's image service with the ASIN B0CJHCSX95
    coverUrl: "https://images-na.ssl-images-amazon.com/images/P/B0CJHCSX95.01.LZZZZZZZ.jpg", 
    buyLink: "https://www.amazon.co.uk/Verses-United-Irishmen-Darren-Beaming/dp/B0CJHCSX95",
    releaseYear: "2023",
    isNew: true
  }
];

/* 
  HOW TO ADD A NEW BLOG POST:
  1. Copy the "TEMPLATE" object below (between the curly braces).
  2. Paste it at the TOP of the BLOG_POSTS list below.
  3. Fill in your details.
  
  TEMPLATE:
  {
    id: 'unique-id-here',
    title: "Your Title Here",
    date: "October 20, 2024",
    readTime: "5 min read",
    imageUrl: "https://link-to-your-image.com/image.jpg",
    tags: ["History", "Update"],
    excerpt: "Short summary that appears on the main card.",
    content: `
      <p class="mb-4">Your first paragraph goes here.</p>
      <p class="mb-4">Your second paragraph.</p>
      <h3 class="text-xl font-bold text-emerald-800 mt-6 mb-3">A Subheading</h3>
      <p>Final paragraph.</p>
    `
  },
*/

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: "Walking in the Footsteps of the United Irishmen",
    date: "October 12, 2023",
    readTime: "5 min read",
    imageUrl: "https://picsum.photos/seed/history1/800/600",
    tags: ["History", "Research", "1798 Rebellion"],
    excerpt: "The hills of Wexford still whisper the tales of 1798. Join me as I explore the battlefields that inspired my latest book.",
    content: `
      <p class="mb-4">When I set out to write <em>Verses of the United Irishmen</em>, I knew that reading about the history wasn't enough. I had to walk the land.</p>
      <p class="mb-4">Standing on Vinegar Hill, looking out over the town of Enniscorthy, you get a profound sense of the desperate courage those men and women possessed. The wind up there feels different—colder, perhaps, or just heavier with the weight of memory.</p>
      <h3 class="text-xl font-bold text-emerald-800 mt-6 mb-3">The Pike and the Musket</h3>
      <p class="mb-4">One of the most striking things I discovered during my research was the sheer ingenuity of the rebel forces. Lacking standard military weaponry, the pike became the symbol of the uprising. It was a tool of the farm turned into a weapon of war.</p>
      <p class="mb-4">In my book, I tried to capture the rhythm of the pike-drill in the meter of the poetry. It's a heavy, stomping rhythm—the sound of boots on the earth and wood clashing against steel.</p>
      <p>I hope that when you read these verses, you can hear that echo. The echo of a people who stood up when they had nothing left to lose.</p>
    `
  },
  {
    id: 'blog-2',
    title: "Why Mythology Matters Today",
    date: "September 28, 2023",
    readTime: "3 min read",
    imageUrl: "https://picsum.photos/seed/myth/800/600",
    tags: ["Mythology", "Culture", "Modern Life"],
    excerpt: "Are the old stories just fairytales, or do they hold lessons for the modern world? A look at the enduring power of the Tuatha Dé Danann.",
    content: `
      <p class="mb-4">We often dismiss mythology as simple stories for children, or superstitious explanations for natural phenomena. But to view Irish mythology this way is to miss its heart.</p>
      <p class="mb-4">The stories of Cú Chulainn, of Fionn mac Cumhaill, and of the Sidhe are not just entertainment; they are a codex of values. They teach us about honor (enech), about hospitality, and about the terrible cost of breaking one's word.</p>
      <p>In a modern world that often feels disconnected and transactional, these ancient values offer a grounding. They remind us that we are part of a long lineage of storytellers and listeners, gathered around the fire, trying to make sense of the dark.</p>
    `
  },
  
];