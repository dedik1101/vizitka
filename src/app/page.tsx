'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    const dvdSize = 120;
    const baseColor = "#ffffff";
    const hueRotate = true;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const dvds: HTMLDivElement[] = [];
        const logosCount = 5;

        for (let i = 0; i < logosCount; i++) {
            const dvd = document.createElement("div");
            dvd.className = "dvd";
            dvd.style.position = "absolute";
            dvd.style.width = `${dvdSize}px`;
            dvd.style.height = `${dvdSize}px`;
            dvd.style.top = `${Math.random() * (window.innerHeight - dvdSize)}px`;
            dvd.style.left = `${Math.random() * (window.innerWidth - dvdSize)}px`;
            dvd.style.backgroundColor = baseColor;
            dvd.style.maskImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dvd_logo.svg/1488px-Dvd_logo.svg.png")';
            dvd.style.webkitMaskImage = dvd.style.maskImage;
            dvd.style.maskSize = "contain";
            dvd.style.webkitMaskSize = "contain";
            dvd.style.maskRepeat = "no-repeat";
            dvd.style.webkitMaskRepeat = "no-repeat";
            dvd.style.maskPosition = "center";
            dvd.style.webkitMaskPosition = "center";
            dvd.style.transition = "background-color 0.3s ease";
            container.appendChild(dvd);
            dvds.push(dvd);
        }

        const velocities = dvds.map(() => ({
            dx: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1),
            dy: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1),
        }));

        const move = () => {
            dvds.forEach((dvd, i) => {
                const rect = dvd.getBoundingClientRect();
                const x = rect.left + velocities[i].dx;
                const y = rect.top + velocities[i].dy;

                const bouncedX = x <= 0 || x + rect.width >= window.innerWidth;
                const bouncedY = y <= 0 || y + rect.height >= window.innerHeight;

                if (bouncedX) velocities[i].dx *= -1;
                if (bouncedY) velocities[i].dy *= -1;

                if ((bouncedX || bouncedY) && hueRotate) {
                    dvd.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
                }

                dvd.style.left = `${rect.left + velocities[i].dx}px`;
                dvd.style.top = `${rect.top + velocities[i].dy}px`;
            });

            requestAnimationFrame(move);
        };

        const animationId = requestAnimationFrame(move);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [hueRotate]);

    return (
        <div
            ref={containerRef}
            className="main-container"
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                backgroundColor: "black"
            }}
        >
            <div
                className="center-container"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                }}
            >
                <div
                    className="nickname"
                    style={{
                        fontSize: "40px",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        background: "rgba(0,0,0,0.2)",
                        marginBottom: "20px"
                    }}
                >
                    dedik1101
                </div>
                <div
                    className="socials"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px"
                    }}
                >
                    <a
                        href="https://t.me/dedik1101"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "block" }}
                    >
                        <Image
                            src="https://www.eao.ru/upload/medialibrary/eb7/r8z6pe1r1f7f23fludvi2x4qttix77r7/Telegram_for_Android_3.6_version_2016_Logo.png"
                            alt="Telegram"
                            width={40}
                            height={40}
                        />
                    </a>
                    <a
                        href="https://vk.com/dedik1101"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "block" }}
                    >
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/440px-VK_Compact_Logo_%282021-present%29.svg.png"
                            alt="VK"
                            width={40}
                            height={40}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}