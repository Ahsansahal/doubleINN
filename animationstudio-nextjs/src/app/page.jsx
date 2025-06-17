// Components
import { Hero, FullViewVideo, HomeGrid as Grid, Portfolio, Industries, FAQs, Footer, Partners, SuccessClients, WeAre, Process, TypesOfVideos, Reviews } from "@/components"

export default function Home() {
  return (
    <>
      <Hero
        title="Video animation agency <br class='hidden md:block' /> to help you drive results <br class='hidden md:block' /> with passion"
        desc="For over 10 years, Video Animation studio has delivered stellar video outcomes for 1000+ clients. For our artists, creativity has no bounds. We deliver videos that create value for your brand messaging, helping you win top of the mind positioning. No need to fall into the footsteps of your competitors. Stand out, and outperform all with stellar animated videos. "
      />
      <SuccessClients />
      <WeAre />
      <Grid />
      <FullViewVideo />
      <Partners />
      <Portfolio />
      <Industries />
      <Process />
      <TypesOfVideos />
      <Reviews />
      <FAQs items={[
        {
          title: "How much does an animation company cost?",
          content: "The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual <strong>30—second animated explainer video</strong>, the cost for production can be anywhere between <strong>$2500 and $5000</strong>. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go <strong>up to $7000 per minute of animation</strong>.",
          faqsList: ""
        },
        {
          title: "What types of video content do you produce?",
          content: "We produce an extensive variety of video content that is meant to aware, excite, engage, convert, and mesmerize your audience. From educational videos to product demos, from promos to animated ads, and even corporate videos to showcase your company culture. ",
          faqsList: ""
        },
        {
          title: "What is your video production process like?",
          content: "<p>Our video production process is streamlined and designed to be highly adaptive. It can catch up with your unique needs, and the feedback you share during the entire project. Here’s what it looks like while keeping the client (you) at the center of everything:</p><ul class='list-disc list-inside'><li>Creative briefing, and narrative direction</li><li>Storyboarding, and character development</li><li>Assets finalization, and review</li><li>Animation, and review</li><li>Voiceover and sound design</li><li>Inclusion of special effects</li><li>Pro-level edit, and review</li><li>Final Delivery</li></ul>",
        },
        {
          title: "What type of video is right for our business?",
          content: "<p>There’s no one-size fit all when it comes to video animation. We recommend you catching up with our team on a FREE discovery call. Our creatives will walk you through a variety of video animation styles, and also point out which one might be ideal for your tone of messaging. You can always experiment with something new, or go for classic explainer videos to reveal your brand.</p>"
        },
        {
          title: "What makes a good video marketing strategy?",
          content: "<p>Good video marketing is creating content for your audience, not for algorithms. Here’s what a solid video marketing strategy looks like:</p><ul class='list-decimal list-inside'><li>Have a clear, and consistent tone of message</li><li>Style of messaging should be powerful, and compelling across all channels</li><li>Video content should be short-form, and value-focused</li><li>Every piece of media should have a clear CTA</li><li>Include subtitles to connect improve user experience</li><li>Collaborate with subject matter experts to build brand authority through video content</li></ul>",
        },
        {
          title: "What briefing materials do I need to provide?",
          content: "<p>You can start off by sharing your message, style of video, (references if any). Or if you’ve got the assets ready, we can even polish your project with our awesome animation techniques.</p>",
        },
        {
          title: "Does Video Animation Studio focus on corporate video production?",
          content: "<p>Along with producing a variety of animated videos, we also put our focus on corporate videos that are a step ahead of the ordinary ones. Our focus on corporate videos is driven by our passion to challenge our creativity, and come up with something truly new, and remarkable to showcase corporate culture and values.</p>"
        },
      ]} />
      < Footer />
    </>
  )
}