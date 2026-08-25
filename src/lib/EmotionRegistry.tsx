"use client";
import React, { useState } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';

export default function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => createCache({ key: 'mui', prepend: true }));

  useServerInsertedHTML(() => {
    const { key } = cache;
    // emotion stores tags on cache.sheet.tags
    // collect and return style tags for SSR
    // @ts-ignore
    const tags = cache.sheet?.tags || [];
    if (tags.length === 0) return null;
    const styles = tags.map((t: any) => t.textContent).join('');
    const dataEmotion = `${key} ${tags.map((t: any) => t.key).join(' ')}`;
    return (
      <style
        key={dataEmotion}
        data-emotion={dataEmotion}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
