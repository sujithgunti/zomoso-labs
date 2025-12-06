"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FRAMEWORKS_ROW_1, FRAMEWORKS_ROW_2 } from "@/models/data";
import { FrameworkItem } from "@/models/types";
import Image from "next/image";

export const Frameworks = () => {
    return (
        <section className="bg-[#2B3D72] py-16 md:py-24 overflow-hidden font-dm relative">
            <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
                <span className="text-[#FF5722] font-bold tracking-wide uppercase text-sm mb-4 block">
                    FRAMEWORKS
                </span>
                <h2 className="text-3xl md:text-[2.5rem] leading-tight font-normal text-white max-w-4xl">
                    We transform good ideas into great products with our <span className="text-white font-medium">proven proprietary methodologies and precise execution</span>
                </h2>
            </div>

            <div className="flex flex-col gap-6">
                <InfiniteMovingCards items={FRAMEWORKS_ROW_1} direction="left" speed="slow" />
                <InfiniteMovingCards items={FRAMEWORKS_ROW_2} direction="right" speed="slow" />
            </div>
        </section>
    );
};

const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
}: {
    items: FrameworkItem[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "150s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[17.5rem] h-[13rem] max-w-full relative rounded-[10px] border flex-shrink-0 border-slate-100/10 px-6 py-6 bg-white text-left flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 cursor-default"
                        style={{
                            // background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                        }}
                        key={item.title + idx}
                    >
                        <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center text-[#2B3D72] mb-3 relative overflow-hidden">
                            {item.imageSrc ? (
                                <Image
                                    src={item.imageSrc}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-2"
                                />
                            ) : (
                                item.icon && <item.icon size={24} strokeWidth={1.5} />
                            )}
                        </div>
                        <span className="text-[#2B3D72] text-lg font-medium leading-tight">
                            {item.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
