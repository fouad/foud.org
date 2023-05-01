import { Logo } from '@/components/logo'
import { load } from 'cheerio'

type Post = {
  src: string
  href: string
}

const posts: Post[] = [
  {
    src: '/images/img1.jpg',
    href: 'https://www.instagram.com/p/BscQKFYhYek/',
  },
  {
    src: '/images/img2.jpg',
    href: 'https://www.instagram.com/p/BscQKFYhYek/',
  },
  {
    src: '/images/img3.jpg',
    href: 'https://www.instagram.com/p/BscQKFYhYek/',
  },
  {
    src: '/images/img4.jpg',
    href: 'https://www.instagram.com/p/BscQKFYhYek/',
  },
  {
    src: '/images/img5.jpg',
    href: 'https://www.instagram.com/p/CrrysqZrPJu/',
  },
].reverse()

export default async function Home() {
  // const { posts } =  await getInstaPosts()
  // console.log({ posts })
  return (
    <main>
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 px-8">
        <div className="flex flex-col sm:flex-row items-center space-x-4">
          <Logo />
          <p className="my-2 sm:my-0 text-slate-600 text-center sm:text-left">
            Inspiration and art
            <br /> in food-form.
          </p>
        </div>
        <a href="https://instagram.com/foudplz">
          <IGLogo className="h-12" />
        </a>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:space-x-4 lg:space-y-4">
          {posts.map((post, index) => (
            <a
              key={post.href}
              href={post.href}
              className={
                'hover:opacity-80 relative' +
                (index
                  ? ''
                  : ' border-4 border-black dark:border-white lg:col-span-2 lg:row-span-2')
              }
            >
              <img alt="Photo of Instagram post" src={post.src} />
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-tl-lg" />
              <span className="absolute bottom-2 right-2">
                <IGLogo width={32} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

const IGLogo = (props: any) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <radialGradient
      cx={56.3501}
      cy={19.2179}
      gradientTransform="matrix(.9986 -.05234 .04449 .8488 -36.974 443.801)"
      gradientUnits="userSpaceOnUse"
      id="a"
      r={711.335}
    >
      <stop offset={0} stopColor="#fed576" />
      <stop offset={0.2634} stopColor="#f47133" />
      <stop offset={0.6091} stopColor="#bc3081" />
      <stop offset={1} stopColor="#4c63d2" />
    </radialGradient>
    <path
      d="M96.1 23.2c-16.2 6.3-29.9 14.7-43.6 28.4C38.8 65.2 30.4 79 24.1 95.1c-6.1 15.6-10.2 33.5-11.4 59.7-1.2 26.2-1.5 34.6-1.5 101.4s.3 75.2 1.5 101.4c1.2 26.2 5.4 44.1 11.4 59.7 6.3 16.2 14.7 29.9 28.4 43.6 13.7 13.7 27.4 22.1 43.6 28.4 15.6 6.1 33.5 10.2 59.7 11.4 26.2 1.2 34.6 1.5 101.4 1.5 66.8 0 75.2-.3 101.4-1.5 26.2-1.2 44.1-5.4 59.7-11.4 16.2-6.3 29.9-14.7 43.6-28.4 13.7-13.7 22.1-27.4 28.4-43.6 6.1-15.6 10.2-33.5 11.4-59.7 1.2-26.2 1.5-34.6 1.5-101.4s-.3-75.2-1.5-101.4c-1.2-26.2-5.4-44.1-11.4-59.7C484 79 475.6 65.2 462 51.6c-13.7-13.7-27.4-22.1-43.6-28.4-15.6-6.1-33.5-10.2-59.7-11.4-26.2-1.2-34.6-1.5-101.4-1.5s-75.2.3-101.4 1.5c-26.3 1.1-44.2 5.3-59.8 11.4zM356.6 56c24 1.1 37 5.1 45.7 8.5 11.5 4.5 19.7 9.8 28.3 18.4 8.6 8.6 13.9 16.8 18.4 28.3 3.4 8.7 7.4 21.7 8.5 45.7 1.2 25.9 1.4 33.7 1.4 99.4s-.3 73.5-1.4 99.4c-1.1 24-5.1 37-8.5 45.7-4.5 11.5-9.8 19.7-18.4 28.3-8.6 8.6-16.8 13.9-28.3 18.4-8.7 3.4-21.7 7.4-45.7 8.5-25.9 1.2-33.7 1.4-99.4 1.4s-73.5-.3-99.4-1.4c-24-1.1-37-5.1-45.7-8.5-11.5-4.5-19.7-9.8-28.3-18.4-8.6-8.6-13.9-16.8-18.4-28.3-3.4-8.7-7.4-21.7-8.5-45.7-1.2-25.9-1.4-33.7-1.4-99.4s.3-73.5 1.4-99.4c1.1-24 5.1-37 8.5-45.7 4.5-11.5 9.8-19.7 18.4-28.3 8.6-8.6 16.8-13.9 28.3-18.4 8.7-3.4 21.7-7.4 45.7-8.5 25.9-1.2 33.7-1.4 99.4-1.4s73.5.2 99.4 1.4z"
      fill="url(#a)"
    />
    <radialGradient
      cx={154.0732}
      cy={134.5501}
      gradientTransform="matrix(.9986 -.05234 .04449 .8488 -24.362 253.295)"
      gradientUnits="userSpaceOnUse"
      id="b"
      r={365.2801}
    >
      <stop offset={0} stopColor="#fed576" />
      <stop offset={0.2634} stopColor="#f47133" />
      <stop offset={0.6091} stopColor="#bc3081" />
      <stop offset={1} stopColor="#4c63d2" />
    </radialGradient>
    <path
      d="M130.9 256.3c0 69.8 56.6 126.3 126.3 126.3S383.5 326 383.5 256.3 327 130 257.2 130s-126.3 56.5-126.3 126.3zm208.3 0c0 45.3-36.7 82-82 82s-82-36.7-82-82 36.7-82 82-82 82 36.7 82 82z"
      fill="url(#b)"
    />
    <circle cx={388.6} cy={125} r={29.5} fill="#654c9f" />
  </svg>
)

// export async function getInstaPosts() {
//   // set posts to an empty array as a placeholder
//   // let posts = []
//   const html = await fetch('https://www.instagram.com/foudplz/').then((r) =>
//     r.text()
//   )
//   const $ = load(html, {})
//   const links = $('article a')
//   console.log(links)
//   const posts = links.get().map((link) => {
//     const $$ = load(link)
//     return {
//       src: $$('img').attr('src') || '',
//       href: link.attribs.href,
//     } as Post
//   })
//   return {
//     posts,
//   }
// }
