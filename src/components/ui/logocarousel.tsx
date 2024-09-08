import Image from 'next/image'


export default function LogoCarousel() {

  const logos = [
    { src: "https://media.discordapp.net/attachments/847153213996400660/1282210480529866874/logos_github.png?ex=66de8710&is=66dd3590&hm=38aa3c58da9344e991dbedb2a0ccce5b1b69c0a74929711ab16303e5a9031184&=&format=webp&quality=lossless&width=640&height=173",alt: "src/public/logos_github.png"},
    { src: "https://media.discordapp.net/attachments/847153213996400660/1282210480529866874/logos_github.png?ex=66de8710&is=66dd3590&hm=38aa3c58da9344e991dbedb2a0ccce5b1b69c0a74929711ab16303e5a9031184&=&format=webp&quality=lossless&width=640&height=173",alt: "src/public/logos_github.png"},
    
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100}/>
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
  )
}