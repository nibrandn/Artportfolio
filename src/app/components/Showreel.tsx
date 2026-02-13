import React from "react";
import { motion } from 'motion/react';

export function Showreel(): React.ReactElement {
    const videoSrc = "https://player.vimeo.com/video/1052180875?h=28d3f66613";

    return (
        <section id="showreel" className="min-h-screen flex items-center justify-center bg-white pt-20">
            <div className="container mx-auto px-6 flex items-center justify-center">
                <div
                    className="w-full max-w-4xl mx-auto"
                    style={{
                        position: "relative",
                        paddingBottom: "56.25%" /* keep 16:9 aspect ratio */,
                        height: 0,
                        maxWidth: 1000 /* limit width to make player smaller */,
                        margin: "0 auto" /* center the player */,
                        marginTop: 0 /* ensure no extra gap above the video */
                    }}
                >
                    <iframe
                        src={`${videoSrc}&autoplay=1&muted=1&loop=1&autopause=`}
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Showreel"
                    />
                </div>
            </div>
        </section>
    );
};
