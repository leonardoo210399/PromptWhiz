"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/profile");
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  const isCopied = copied === post.prompt;

  return (
    <div className='prompt_card'>
      {/* Header */}
      <div className='flex justify-between items-start gap-3 mb-3'>
        <div
          className='flex items-center gap-2.5 cursor-pointer flex-1 min-w-0'
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt='user_image'
            width={28}
            height={28}
            className='object-contain flex-shrink-0'
            style={{ border: '1px solid var(--border-2)' }}
          />
          <div className='min-w-0'>
            <p
              style={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: '0.78rem',
                color: 'var(--text)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {post.creator.username}
            </p>
            <p
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginTop: '1px',
              }}
            >
              {post.creator.email}
            </p>
          </div>
        </div>

        <div
          className='copy_btn'
          onClick={handleCopy}
          title={isCopied ? 'Copied!' : 'Copy prompt'}
        >
          <Image
            src={isCopied ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            alt={isCopied ? 'tick_icon' : 'copy_icon'}
            width={11}
            height={11}
            style={{ filter: isCopied ? 'invert(0.7) sepia(1) saturate(8) hue-rotate(50deg)' : 'invert(0.65)' }}
          />
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '0.875rem' }} />

      {/* Prompt text */}
      <p
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.76rem',
          color: 'var(--text)',
          lineHeight: '1.75',
          letterSpacing: '0.01em',
          marginBottom: '0.875rem',
        }}
      >
        {post.prompt}
      </p>

      {/* Tag */}
      <div className='flex justify-between items-center'>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.65rem',
            color: 'var(--accent)',
            letterSpacing: '0.04em',
            cursor: 'pointer',
            opacity: 0.85,
            transition: 'opacity 0.12s',
          }}
          onClick={() => handleTagClick && handleTagClick(post.tag)}
          onMouseEnter={(e) => (e.target.style.opacity = '1')}
          onMouseLeave={(e) => (e.target.style.opacity = '0.85')}
        >
          #{post.tag}
        </span>
      </div>

      {/* Edit / Delete — profile page only */}
      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div
          className='flex gap-4 mt-3 pt-3'
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <button
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.12s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#ff5555')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
