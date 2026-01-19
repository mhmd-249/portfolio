'use client';

import Image from 'next/image';
import { ContentBlock } from '@/data/blogs';
import { Fragment } from 'react';

interface ArticleContentProps {
  content: ContentBlock[];
}

// Parse inline formatting: **bold**, *italic*, `code`, [link](url)
function parseInlineFormatting(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let key = 0;

  // Combined regex to find all formatting in order
  const combinedRegex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[(.+?)\]\((.+?)\))/g;

  let lastIndex = 0;
  let match;

  while ((match = combinedRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }

    const fullMatch = match[0];

    if (fullMatch.startsWith('**')) {
      // Bold
      const content = match[2];
      parts.push(<strong key={key++} className="font-bold">{content}</strong>);
    } else if (fullMatch.startsWith('*')) {
      // Italic
      const content = match[3];
      parts.push(<em key={key++} className="italic">{content}</em>);
    } else if (fullMatch.startsWith('`')) {
      // Inline code
      const content = match[4];
      parts.push(<code key={key++} className="inline-code">{content}</code>);
    } else if (fullMatch.startsWith('[')) {
      // Link
      const linkText = match[5];
      const url = match[6];
      parts.push(
        <a
          key={key++}
          href={url}
          className="text-mint hover:underline transition-all duration-200"
          target={url.startsWith('http') ? '_blank' : undefined}
          rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {linkText}
        </a>
      );
    }

    lastIndex = match.index + fullMatch.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return parts.length > 0 ? parts : [text];
}

// Render a single content block
function renderBlock(block: ContentBlock, index: number): React.ReactNode {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="text-body text-text-primary leading-relaxed mb-6">
          {parseInlineFormatting(block.text)}
        </p>
      );

    case 'heading2':
      return (
        <h2 key={index} className="text-[1.75rem] font-bold text-text-primary mt-12 mb-4">
          {block.text}
        </h2>
      );

    case 'heading3':
      return (
        <h3 key={index} className="text-[1.25rem] font-bold text-text-primary mt-8 mb-3">
          {block.text}
        </h3>
      );

    case 'code':
      return (
        <div key={index} className="my-6">
          <div className="code-block-header">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              {block.language}
            </span>
          </div>
          <pre className="code-block">
            <code className={`language-${block.language}`}>
              {block.code}
            </code>
          </pre>
        </div>
      );

    case 'list':
      return (
        <ul key={index} className="list-disc list-outside ml-6 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-body text-text-primary leading-relaxed pl-2">
              {parseInlineFormatting(item)}
            </li>
          ))}
        </ul>
      );

    case 'image':
      return (
        <figure key={index} className="my-8">
          <div className="relative w-full aspect-video">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {block.caption && (
            <figcaption className="text-meta text-text-tertiary text-center mt-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="article-content">
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
