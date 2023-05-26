"use client";
import { PageWrapper } from "@/components/page-wrapper";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { annotate } from "rough-notation";

export default function Home() {
  const mernRef = useRef<HTMLElement>(null);
  const langAgnoRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const githubRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    annotate(mernRef.current as HTMLElement, {
      type: "box",
    }).show();

    annotate(langAgnoRef.current as HTMLElement, {
      type: "box",
    }).show();

    annotate(blogRef.current as HTMLElement, {
      type: "highlight",
      color: "#3c096c",
    }).show();

    annotate(githubRef.current as HTMLElement, {
      type: "highlight",
      color: "#55a70a",
    }).show();
  }, []);

  return (
    <PageWrapper>
      <main className="flex flex-col items-center min-h-screen p-10 color-white">
        <div className="lg:w-2/5 md:w-3/5 sm:w-full">
          <div className="flex items-center">
            <Image
              src="/photo.jpg"
              alt="Tauseef's Photo"
              width={70}
              height={70}
              className="rounded-full"
            />

            <div className="ml-3" style={{ height: "fit-content" }}>
              <h1 className="text-2xl">tauseef</h1>
              <h3 className="text-lg text-slate-400">
                love to code cool stuff. based in India
              </h3>
            </div>
          </div>

          <div className="mt-5">
            <p>
              i&apos;m a software engineer. was recently working for Castler, a
              fintech startup.
            </p>
            <p>I have more than 1 year of professional experience.</p>
            <p>
              although most of my experience is in the{" "}
              <span ref={mernRef}>MERN</span> stack, I&apos;m{" "}
              <span ref={langAgnoRef}>language&nbsp;agnostic</span> and ready to
              learn whatever is required for the task
            </p>
            <p>to be honest, i love backend work more than frontend</p>
          </div>

          <div className="mt-5">
            <div>
              <Link href="blog">
                <span ref={blogRef}>I like to write, sometimes!</span>&nbsp;🔗
              </Link>
            </div>
            <div className="mt-2">
              <Link href="https://github.com/tam2628" target="_blank">
                <span ref={githubRef}>Github</span>&nbsp;🔗
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
