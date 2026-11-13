import type { Metadata } from "next";
import Link from "next/link";
import { DraftNotice } from "@/components/DraftNotice";
import { PageHero } from "@/components/PageHero";
import { PostCover } from "@/components/PostCover";
import { CtaBand } from "@/components/sections/CtaBand";
import { formatPostDate, postPath, publishedPosts, readingMinutes, visiblePosts } from "@/content/posts";
import { featuredServices, servicePath } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AC Guides and Advice for Dubai Homes",
  description:
    "Plain-language guides to air conditioning problems, servicing and maintenance in Dubai, from Al Naveed AC Repair & Maintenance.",
  path: "/blog",
  // Nothing worth indexing until at least one article has been approved.
  noindex: publishedPosts.length === 0,
});

export default function BlogPage() {
  const hasDrafts = visiblePosts.some((p) => p.status === "draft");

  return (
    <>
      <PageHero
        crumbs={[{ name: "Guides", path: "/blog" }]}
        title="AC guides and advice"
        lead="Straight answers to the questions we hear every day: why an air conditioner stops cooling, why it leaks, and how to look after it in Dubai's climate."
      />

      <section className="section bg-white">
        <div className="shell">
          {hasDrafts && (
            <div className="mb-10 max-w-[52rem]">
              <DraftNotice />
            </div>
          )}

          {visiblePosts.length === 0 ? (
            <div className="max-w-[44rem]">
              <h2 className="t-h2">Guides are on the way</h2>
              <p className="t-lead mt-5 text-slate">
                Our first articles are being reviewed. In the meantime, each service page explains
                what the work involves and answers common questions.
              </p>
              <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {featuredServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={servicePath(s.slug)} className="link">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              {visiblePosts.map((post) => (
                <li key={post.slug}>
                  <article className="group relative">
                    <PostCover category={post.category} />
                    <p className="t-label mt-6 text-blue">{post.category}</p>
                    <h2 className="mt-2 text-[1.5rem] leading-tight tracking-[-0.02em]">
                      <Link
                        href={postPath(post.slug)}
                        className="after:absolute after:inset-0 group-hover:text-blue"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-slate">{post.description}</p>
                    <p className="t-small mt-4 text-slate">
                      <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                      <span className="mx-2.5 text-line" aria-hidden="true">
                        |
                      </span>
                      {readingMinutes(post)} min read
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBand
        title="Would you prefer to ask a technician?"
        text="Open 24 hours, every day. Call, message or send a booking request."
      />
    </>
  );
}
