import React from 'react';
import { BlogPost } from '../types';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onReadPost: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onReadPost }) => {
  return (
    <article
      onClick={() => onReadPost(post)}
      className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E1E2DD] shadow-[0_6px_25px_rgba(30,45,36,0.04)] hover:shadow-[0_14px_35px_rgba(30,45,36,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
    >
      <div>
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEBE7]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#304338] border border-white/40 shadow-2xs">
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-[#7A817C] mb-3">
            <span>{post.date}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#171D18] group-hover:text-[#304338] transition-colors line-clamp-2 leading-snug mb-3">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#59635D] leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-[#F9F8F6] flex items-center justify-between">
        <div className="text-xs font-semibold text-[#171D18]">
          {post.author.name}
        </div>

        <div className="text-xs font-bold text-[#304338] group-hover:text-[#E99A35] transition-colors flex items-center gap-1">
          <span>Leer artículo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
};
