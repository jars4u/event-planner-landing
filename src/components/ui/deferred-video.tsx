import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

type DeferredVideoProps = {
  src: string;
  type?: string;
  className?: string;
  ariaLabel?: string;
  decorative?: boolean;
  loadStrategy?: 'immediate' | 'idle' | 'visible';
  rootMargin?: string;
};

const DeferredVideo = ({
  src,
  type = 'video/mp4',
  className,
  ariaLabel,
  decorative = true,
  loadStrategy = 'visible',
  rootMargin = '200px 0px',
}: DeferredVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(loadStrategy === 'immediate');
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || shouldLoad || loadStrategy !== 'idle') {
      return;
    }

    let idleCallbackId: number | undefined;
    let timeoutId: number | undefined;

    if ('requestIdleCallback' in window) {
      idleCallbackId = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 1200 });
    } else {
      timeoutId = globalThis.setTimeout(() => setShouldLoad(true), 350);
    }

    return () => {
      if ('cancelIdleCallback' in window && idleCallbackId !== undefined) {
        window.cancelIdleCallback(idleCallbackId);
      }

      if (timeoutId !== undefined) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, [loadStrategy, prefersReducedMotion, shouldLoad]);

  useEffect(() => {
    if (prefersReducedMotion || shouldLoad || loadStrategy !== 'visible' || !videoRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [loadStrategy, prefersReducedMotion, rootMargin, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) {
      return;
    }

    videoRef.current.load();
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={cn('transition-opacity duration-700', isLoaded ? 'opacity-100' : 'opacity-0', className)}
      autoPlay={!prefersReducedMotion}
      muted
      loop
      playsInline
      preload={loadStrategy === 'immediate' ? 'metadata' : 'none'}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : ariaLabel}
      onLoadedData={() => setIsLoaded(true)}
    >
      {shouldLoad ? <source src={src} type={type} /> : null}
    </video>
  );
};

export default DeferredVideo;