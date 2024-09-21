import Image from 'next/image'; // Assuming you're using Next.js
import logosGithub from './logos_github.svg'; // Adjust the path as necessary

export default function LogoCarousel() {
  const logos = [
    { src: logosGithub, alt: "GitHub Logo" },
    { src: logosGithub, alt: "GitHub Logo" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}