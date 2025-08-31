import React from 'react';
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Sharan Vasoya Portfolio - Cybersecurity & Red Team Enthusiast</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Sharan Vasoya Portfolio - Cybersecurity & Red Team Enthusiast" />
            <meta name="description"
                content="Sharan Vasoya's Personal Portfolio Website. Showcasing cybersecurity projects, Red Team tools, and RedHawk automated recon scanner. Built with Next.js & Tailwind CSS." />
            <meta name="author" content="Sharan Vasoya" />
            <meta name="keywords"
                content="Sharan Vasoya, cybersecurity portfolio, red team, penetration testing, RedHawk, ethical hacking, linux pentesting, web application testing" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="/images/logos/logo_1024.png" />

            {/* Schema.org for Google */}
            <meta itemProp="name" content="Sharan Vasoya Portfolio - Cybersecurity & Red Team Enthusiast" />
            <meta itemProp="description"
                content="Sharan Vasoya's Personal Portfolio Website. Showcasing cybersecurity projects, Red Team tools, and RedHawk automated recon scanner. Built with Next.js & Tailwind CSS." />
            <meta itemProp="image" content="/images/logos/logo_1024.png" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Sharan Vasoya Portfolio - Cybersecurity & Red Team Enthusiast" />
            <meta name="twitter:description"
                content="Sharan Vasoya's Personal Portfolio Website. Showcasing cybersecurity projects, Red Team tools, and RedHawk automated recon scanner. Built with Next.js & Tailwind CSS." />
            <meta name="twitter:site" content="@VasoyaSharan" />
            <meta name="twitter:creator" content="@VasoyaSharan" />
            <meta name="twitter:image:src" content="/images/logos/logo_1024.png" />

            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Sharan Vasoya Portfolio - Cybersecurity & Red Team Enthusiast" />
            <meta name="og:description"
                content="Sharan Vasoya's Personal Portfolio Website. Showcasing cybersecurity projects, Red Team tools, and RedHawk automated recon scanner. Built with Next.js & Tailwind CSS." />
            <meta name="og:image" content="/images/logos/logo_1200.png" />
            <meta name="og:url" content="https://Vasoyasharan.github.io/" />
            <meta name="og:site_name" content="Sharan Vasoya Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="/images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="/images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
    )
}
