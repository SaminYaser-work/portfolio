import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("portfolio copy uses corrected spelling and wording", async () => {
    const files = await Promise.all([
        read("src/components/Hero/Hero.tsx"),
        read("src/pages/home/_about-me.astro"),
        read("src/data.tsx"),
        read("src/pages/404.astro"),
        read("src/content/project/traffichain.mdx"),
        read("src/content/blog/Typesafe Wordpress Block Attributes.mdx"),
    ]);
    const copy = files.join("\n");

    for (const typo of [
        "Assasalamu",
        "Award Wining",
        "Astronout",
        "CICD",
        "Sprint Boot",
        "started my study for Computer Science degree",
        "Wordpress",
        "wordpress plugin",
    ]) {
        assert.equal(copy.includes(typo), false, `found outdated copy: ${typo}`);
    }

    assert.match(copy, /Assalamu Alaikum/);
    assert.match(copy, /Award-winning/);
    assert.match(copy, /CI\/CD/);
    assert.match(copy, /Spring Boot/);
    assert.match(copy, /WordPress/);
});

test("About Me is concise and focused on current hiring signals", async () => {
    const page = await read("src/pages/home/_about-me.astro");
    const section = page.match(
        /<div class="self-center order-2 md:order-1">([\s\S]*?)<\/div>/
    )?.[1];

    assert.ok(section, "About Me copy was not found");
    assert.equal((section.match(/<p class="about-me-p">/g) ?? []).length, 2);

    const words = section
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ");

    assert.ok(words.length <= 100, `About Me has ${words.length} words`);
    for (const keyword of [
        "software engineer",
        "production web products",
        "system design",
        "API development",
        "backend development",
        "performance optimization",
        "CI/CD",
        "automated testing",
        "system architecture",
    ]) {
        assert.match(section, new RegExp(keyword.replace("/", "\\/"), "i"));
    }

    for (const technology of [
        "PHP",
        "TypeScript",
        "React",
        "Node.js",
        "MySQL",
        "WordPress",
        "WooCommerce",
        "WowInvoice",
        "WowOptin",
    ]) {
        assert.doesNotMatch(section, new RegExp(technology, "i"));
    }
});

test("WPXPO experience credits WowInvoice creation", async () => {
    const data = await read("src/data.tsx");

    assert.match(
        data,
        /Created \"WowInvoice\", an all-in-one WooCommerce plugin that automates EU VAT-compliant PDF invoices, packing slips, shipping labels, and other order documents\./
    );
});

test("top-level pages provide descriptive SEO titles and descriptions", async () => {
    const home = await read("src/pages/index.astro");
    const blog = await read("src/pages/blog/index.astro");
    const projects = await read("src/pages/project/index.astro");

    assert.match(home, /title="Samin Yaser — Software Engineer \| Full-stack Developer"/);
    assert.match(
        home,
        /description="Software engineer Samin Yaser builds scalable WordPress, React, PHP, and TypeScript products used by more than \d+K active users\."/
    );
    assert.match(blog, /title="Blog — Samin Yaser"/);
    assert.match(
        blog,
        /description="Technical articles by Samin Yaser on WordPress, TypeScript, Python, web development, and software engineering\."/
    );
    assert.match(projects, /title="Projects — Samin Yaser"/);
    assert.match(
        projects,
        /description="Software projects by Samin Yaser spanning full-stack development, cloud, machine learning, and developer tools\."/
    );
});

test("plural projects route permanently redirects to the canonical projects page", async () => {
    const redirect = await read("src/pages/projects.astro");

    assert.match(redirect, /Astro\.redirect\("\/project\/", 301\)/);
});

test("icon links and portfolio images have descriptive accessible names", async () => {
    const navigation = await read("src/components/Navigation.astro");
    const footer = await read("src/components/Footer.tsx");
    const card = await read("src/components/CustomCard.astro");
    const contentMedia = await read("src/components/ContentMedia.astro");
    const data = await read("src/data.tsx");

    assert.match(navigation, /alt="Samin Yaser logo"/);
    assert.match(footer, /aria-label=\{item\.label\}/);
    assert.match(card, /alt=\{imageAlt\}/);
    assert.match(contentMedia, /alt=\{imageAlt\}/);

    for (const label of [
        "Email Samin Yaser",
        "Download Samin Yaser resume",
        "View Samin Yaser on LinkedIn",
        "View Samin Yaser on GitHub",
        "View Samin Yaser on X",
    ]) {
        assert.match(data, new RegExp(`label: ['\"]${label}['\"]`));
    }
});
