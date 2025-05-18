import { B as i, u as n, p as m, _ as r, k as h } from "./hooks.module-D3T0iSRI.js";
const l = () => {
  const [a, s] = m([]);
  return r(() => {
    fetch(
      "https://ruj56hpsooydu4jmctx5u7gdra0mbszw.lambda-url.eu-north-1.on.aws/?codefreeze=2026"
    ).then((t) => t.json()).then((t) => {
      s(t.sort(
        (o, c) => o.name.localeCompare(c.name)
      ));
    }).catch(console.error);
  }, []), /* @__PURE__ */ n(h, { children: a.map((t) => /* @__PURE__ */ n(d, { profile: t })) });
}, d = ({ profile: a }) => /* @__PURE__ */ n("div", { class: "participant", children: [
  /* @__PURE__ */ n("img", { class: "avatar", src: a.photoThumbnail ?? "/images/avatar.jpg", alt: a.name }),
  /* @__PURE__ */ n("h3", { children: [
    a.name,
    a.pronouns && /* @__PURE__ */ n("small", { children: [
      /* @__PURE__ */ n("br", {}),
      a.pronouns
    ] })
  ] }),
  /* @__PURE__ */ n("nav", { children: [
    a.homepage && /* @__PURE__ */ n(e, { icon: /* @__PURE__ */ n("i", { class: "fas fa-home" }), href: a.homepage, title: `Homepage of ${a.name}` }),
    a.linkedin && /* @__PURE__ */ n(e, { icon: /* @__PURE__ */ n("i", { class: "fab fa-linkedin" }), href: a.linkedin, title: `${a.name}'s LinkedIn profile` }),
    a.mastodon && /* @__PURE__ */ n(e, { icon: /* @__PURE__ */ n("img", { src: "/logos/mastodon.svg", alt: "mastodon", class: "icon" }), href: a.mastodon, title: `${a.name} on Mastodon` }),
    a.matrix && /* @__PURE__ */ n(e, { icon: /* @__PURE__ */ n("img", { src: "/logos/matrix.svg", alt: "matrix", class: "icon" }), href: a.matrix, title: `${a.name} on Matrix` }),
    a.github && /* @__PURE__ */ n(e, { icon: /* @__PURE__ */ n("i", { class: "fab fa-github" }), href: a.github, title: `${a.name} on GitHub` })
  ] })
] }), e = ({ href: a, title: s, icon: t }) => /* @__PURE__ */ n("a", { href: a, target: "_blank", rel: "noopener noreferrer", title: s, children: t });
i(
  /* @__PURE__ */ n(l, {}),
  document.getElementById("participants-container")
);
