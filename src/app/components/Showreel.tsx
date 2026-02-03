import React from "react";
import { motion } from 'motion/react';

export function Showreel(): React.ReactElement {
    const videoSrc = "https://player.vimeo.com/video/1052180875?h=28d3f66613";

    return (
        <section id="showreel" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl mb-4 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Showreel
                </motion.h2>

                <div
                    className="mx-auto"
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
                        src={videoSrc}
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Showreel"
                    />
                </div>
            </div>r
        </section>
    );
};
