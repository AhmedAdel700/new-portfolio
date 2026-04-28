'use client';

import React from 'react';
import Gallery from '@/components/Gallery';

export default function GalleryPage() {
    return (
        <main className="relative w-full min-h-screen bg-[#030014] overflow-hidden selection:bg-[#7FFFD4] selection:text-black font-sans">
            <Gallery isFullPage={true} id="full-gallery" />
        </main>
    );
}
