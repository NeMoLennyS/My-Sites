import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FaInstagram } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

interface InstagramFeedProps {
  username: string;
}

const InstagramFeed = ({ username }: InstagramFeedProps) => {
  const [posts, setPosts] = useState<any[]>([]);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/instagram'],
    staleTime: 1000 * 60 * 15, // 15 minutes
  });
  
  useEffect(() => {
    // Since we can't fully integrate with Instagram API without proper authentication,
    // we'll use placeholder images for demo purposes
    if (!isLoading && !error && data) {
      try {
        // In a real implementation, we would process the fetched Instagram data here
        console.log("Instagram data fetched successfully");
      } catch (err) {
        console.error("Failed to process Instagram data:", err);
      }
    }
    
    // Placeholder posts
    const placeholderPosts = [
      {
        id: '1',
        image: 'https://images.unsplash.com/photo-1516526995003-435ccce2be97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        caption: 'Утренняя практика хатха йоги #йога #медитация #утро',
        likes: 54,
        url: 'https://www.instagram.com/yogavaleriyaivanova73/'
      },
      {
        id: '2',
        image: 'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        caption: 'Групповое занятие по виньяса флоу #виньяса #йога #групповыезанятия',
        likes: 42,
        url: 'https://www.instagram.com/yogavaleriyaivanova73/'
      },
      {
        id: '3',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        caption: 'Медитация - ключ к внутреннему спокойствию #медитация #йога #дзен',
        likes: 67,
        url: 'https://www.instagram.com/yogavaleriyaivanova73/'
      },
      {
        id: '4',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        caption: 'Йога на природе - особое удовольствие #йоганаприроде #практика #хатхайога',
        likes: 89,
        url: 'https://www.instagram.com/yogavaleriyaivanova73/'
      }
    ];
    
    setPosts(placeholderPosts);
  }, [data, isLoading, error]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden">
            <Skeleton className="h-40 sm:h-48 md:h-56 lg:h-64 w-full" />
            <div className="p-2 md:p-3">
              <Skeleton className="h-3 md:h-4 w-full mb-2" />
              <Skeleton className="h-3 md:h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 md:p-8 bg-red-50 rounded-lg">
        <p className="text-red-600 mb-3 md:mb-4 text-sm md:text-base">Не удалось загрузить данные из Instagram</p>
        <a 
          href={`https://www.instagram.com/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#614C67] hover:bg-[#483A4D] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md transition duration-300 text-sm md:text-base"
        >
          <FaInstagram className="mr-2 text-sm md:text-base" /> Перейти в Instagram
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {posts.map(post => (
        <a 
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative rounded-lg overflow-hidden bg-white shadow-md"
        >
          <div className="h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.caption.substring(0, 30) + '...'}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FaInstagram className="text-white text-xl md:text-2xl lg:text-3xl" />
            </div>
          </div>
          <div className="p-2 md:p-3">
            <p className="text-[#6D6875] text-xs md:text-sm truncate">{post.caption}</p>
            <p className="text-[#8CA58C] text-xs mt-1">❤️ {post.likes} лайков</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
