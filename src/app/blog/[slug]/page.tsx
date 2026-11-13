import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { DraftNotice } from "@/components/DraftNotice";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PostCover } from "@/components/PostCover";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  formatPostDate,
  getPost,
  postHeadings,
  postPath,
  readingMinutes,
  visiblePosts,
  type PostBlock,
} from "@/content/posts";
import { getService, servicePath } from "@/content/services";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

// Cache Components needs at least one entry, so an unused placeholder stands in when no
// article is visible. It resolves to the 404 page.
const PLACEHOLDER = "no-articles-yet";

export function generateStaticParams() {
  return visiblePosts.length > 0
    ? visiblePosts.map((p) => ({ slug: p.slug }))
    : [{ slug: PLACEHOLDER }];
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { robots: { index: false, follow: false } };
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: postPath(post.slug),
    type: "article",
    publishedTime: post.publishedAt,
    noindex: post.status !== "published",
  });
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2 id={block.id}>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="flex gap-4 rounded-lg border-l-4 border-blue bg-mist p-6">
          <Info size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-blue" />
          <div>
            <p className="font-bold text-navy">{block.title}</p>
            <p className="mt-1.5">{block.text}</p>
          </div>
        </aside>
      );
  }
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const headings = postHeadings(post);
  const related = post.relatedServices.map(getService).filter((s) => s !== undefined);
  const others = visiblePosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Guides", path: "/blog" },
          { name: post.title, path: postPath(post.slug) },
        ]}
        title={post.title}
        lead={post.description}
      >
        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/12 pt-6 text-[0.9375rem]">
          <div className="flex gap-2">
            <dt className="text-white/60">By</dt>
            <dd className="font-semibold text-white">{post.author}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-white/60">Published</dt>
            <dd className="font-semibold text-white">
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-white/60">Reading time</dt>
            <dd className="font-semibold text-white">{readingMinutes(post)} minutes</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-white/60">Category</dt>
            <dd className="font-semibold text-white">{post.category}</dd>
          </div>
        </dl>
      </PageHero>

      <article className="section bg-white">
        <div className="shell grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {headings.length >= 3 && (
              <nav aria-labelledby="toc-heading" className="rounded-lg bg-mist p-6">
                <h2 id="toc-heading" className="t-label text-navy">
                  In this article
                </h2>
                <ol className="mt-4 grid gap-2.5 text-[0.9375rem]">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-ink transition-colors hover:text-blue">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </aside>

          <div className="max-w-[44rem]">
            {post.status === "draft" && (
              <div className="mb-8">
                <DraftNotice />
              </div>
            )}
            <PostCover category={post.category} className="mb-10" />
            <div className="prose text-[1.0938rem] leading-[1.7]">
              {post.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </div>

            <section className="mt-14 border-t border-line pt-10" aria-labelledby="related-services">
              <h2 id="related-services" className="text-[1.375rem] tracking-[-0.02em]">
                Services mentioned in this guide
              </h2>
              <ul className="mt-5">
                {related.map((s) => (
                  <li key={s.slug} className="border-t border-line last:border-b">
                    <Link href={servicePath(s.slug)} className="group flex items-start gap-4 py-5">
                      <ServiceIcon name={s.icon} size={24} className="mt-0.5 shrink-0 text-blue" />
                      <span>
                        <span className="font-bold text-navy group-hover:text-blue">{s.name}</span>
                        <span className="t-small mt-1 block text-slate">{s.summary}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="section bg-mist" aria-labelledby="more-guides">
          <div className="shell">
            <h2 id="more-guides" className="t-h2">
              More guides
            </h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-2">
              {others.map((p) => (
                <li key={p.slug}>
                  <article className="group relative h-full rounded-lg border border-line bg-white p-7">
                    <p className="t-label text-blue">{p.category}</p>
                    <h3 className="mt-2 text-[1.375rem] leading-tight tracking-[-0.02em]">
                      <Link
                        href={postPath(p.slug)}
                        className="after:absolute after:inset-0 after:rounded-lg group-hover:text-blue"
                      >
                        {p.title}
                      </Link>
                    </h3>
                    <p className="t-small mt-3 text-slate">{p.description}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand
        title="Still not sure what is wrong?"
        text="Describe the problem to us and a technician can take a look. Open 24 hours, every day."
      />
      <JsonLd data={articleSchema(post)} />
    </>
  );
}
